"""Build the reproducible AURA 2026 analysis assets from the lecturer workbook.

This module deliberately uses only the Python standard library so the project
can be regenerated in a clean Replit environment without hiding the cleaning
decisions behind a black-box dependency.
"""

from __future__ import annotations

import csv
import html
import json
import math
import re
import statistics
import textwrap
import zipfile
from collections import Counter, defaultdict
from datetime import date, datetime, timedelta
from pathlib import Path
from tempfile import TemporaryDirectory
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "attached_assets" / "AY_Project_Data_1786812502784.xlsx"
APP = ROOT / "artifacts" / "aura-forecast"
DATA_DIR = APP / "src" / "data"
EXPORT_DIR = APP / "public" / "exports"

NS_MAIN = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
NS_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"

SOURCE_COLUMNS = [
    "Date",
    "Time",
    "Signal Quality",
    "Signal Strength (dBm)",
    "Sat. View",
    "Sat. Used",
    "Lat. (deg.)",
    "Long. (deg.)",
    "Altitude (m)",
    "Accuracy",
    "Temp. (deg. C)",
    "RH (%)",
    "Pressure (mbar)",
    "Heat Index (deg. C)",
    "Refractivity",
    "Battery level (%)",
]

FIELDS = [
    ("signalQuality", "Signal Quality", "count"),
    ("signalStrength", "Signal Strength (dBm)", "dBm"),
    ("satellitesVisible", "Sat. View", "count"),
    ("satellitesUsed", "Sat. Used", "count"),
    ("latitude", "Lat. (deg.)", "deg."),
    ("longitude", "Long. (deg.)", "deg."),
    ("altitude", "Altitude (m)", "m"),
    ("accuracy", "Accuracy", "m"),
    ("temperature", "Temp. (deg. C)", "°C"),
    ("relativeHumidity", "RH (%)", "%"),
    ("pressure", "Pressure (mbar)", "mbar"),
    ("heatIndex", "Heat Index (deg. C)", "°C"),
    ("refractivity", "Refractivity", "N-units"),
    ("batteryLevel", "Battery level (%)", "%"),
]

MODEL_FEATURES = ["temperature", "relativeHumidity", "pressure", "heatIndex", "hourSin", "hourCos"]
TARGET = "refractivity"
CUTOFF = datetime(2026, 9, 1)
TRAIN_START = datetime(2026, 2, 1)
VALIDATION_START = datetime(2026, 8, 1)
BASE_DATE = datetime(1899, 12, 30)


def num(value: str | None) -> float | None:
    if value is None:
        return None
    value = value.strip()
    if not value or value == "-9999":
        return None
    try:
        parsed = float(value)
    except ValueError:
        return None
    if not math.isfinite(parsed):
        return None
    return parsed


def parse_date(value: str | None) -> datetime | None:
    """Parse the date formats found in the workbook without swapping day/month."""
    if value is None:
        return None
    value = value.strip()
    if not value or value in {"0/0/0", "0-0-0"}:
        return None
    for fmt in ("%d-%m-%y", "%d/%m/%y", "%d-%m-%Y", "%d/%m/%Y"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass
    numeric = num(value)
    if numeric is not None and numeric >= 30000:
        try:
            return BASE_DATE + timedelta(days=numeric)
        except OverflowError:
            return None
    return None


def parse_time(value: str | None) -> tuple[int, int, int] | None:
    fraction = num(value)
    if fraction is None or fraction < 0 or fraction > 1:
        return None
    seconds = min(86399, max(0, round(fraction * 86400)))
    return seconds // 3600, (seconds % 3600) // 60, seconds % 60


def shift_to_2026(dt: datetime) -> datetime:
    return dt.replace(year=2026)


def parse_workbook() -> tuple[list[dict[str, object]], dict[str, int]]:
    """Read the single workbook sheet and return only observation rows."""
    with zipfile.ZipFile(SOURCE) as archive:
        strings_root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
        shared = [
            "".join(t.text or "" for t in item.iter(f"{{{NS_MAIN}}}t"))
            for item in strings_root.findall(f"{{{NS_MAIN}}}si")
        ]
        sheet_root = ET.fromstring(archive.read("xl/worksheets/sheet1.xml"))

    counters = Counter()
    records: list[dict[str, object]] = []
    for row in sheet_root.iter(f"{{{NS_MAIN}}}row"):
        counters["sourceRows"] += 1
        values: list[str] = [""] * len(SOURCE_COLUMNS)
        for cell in row.findall(f"{{{NS_MAIN}}}c"):
            ref = cell.attrib.get("r", "")
            match = re.match(r"([A-Z]+)", ref)
            if not match:
                continue
            col = 0
            for char in match.group(1):
                col = col * 26 + ord(char) - 64
            col -= 1
            if col < 0 or col >= len(values):
                continue
            value_node = cell.find(f"{{{NS_MAIN}}}v")
            value = value_node.text if value_node is not None else ""
            if cell.attrib.get("t") == "s" and value:
                try:
                    value = shared[int(value)]
                except (IndexError, ValueError):
                    value = ""
            values[col] = value

        parsed_date = parse_date(values[0])
        if parsed_date is None:
            counters["metadataOrInvalidRows"] += 1
            if values[0].strip():
                counters["invalidDateRows"] += 1
            else:
                counters["blankRows"] += 1
            continue

        parsed_time = parse_time(values[1])
        if parsed_time is None:
            counters["invalidTimeRows"] += 1
            parsed_time = (0, 0, 0)
        raw_dt = parsed_date.replace(hour=parsed_time[0], minute=parsed_time[1], second=parsed_time[2])
        observation_dt = shift_to_2026(raw_dt)
        record: dict[str, object] = {
            "timestamp": observation_dt.isoformat(sep=" "),
            "date": observation_dt.date().isoformat(),
            "time": observation_dt.strftime("%H:%M:%S"),
            "hour": observation_dt.hour,
            "month": observation_dt.month,
            "weekday": observation_dt.weekday(),
            "sourceDate": values[0].strip(),
        }
        for index, (key, _label, _unit) in enumerate(FIELDS, start=2):
            raw = values[index]
            if raw.strip() == "-9999":
                counters["sentinelValues"] += 1
                counters[f"sentinel:{key}"] += 1
            parsed = num(raw)
            if raw.strip() and parsed is None and raw.strip() != "-9999":
                counters[f"invalid:{key}"] += 1
            record[key] = parsed
        records.append(record)

    return records, dict(counters)


def values_for(records: list[dict[str, object]], key: str) -> list[float]:
    return [float(row[key]) for row in records if isinstance(row.get(key), (int, float))]


def percentile(sorted_values: list[float], fraction: float) -> float:
    if not sorted_values:
        return float("nan")
    if len(sorted_values) == 1:
        return sorted_values[0]
    position = (len(sorted_values) - 1) * fraction
    lower = math.floor(position)
    upper = math.ceil(position)
    if lower == upper:
        return sorted_values[lower]
    weight = position - lower
    return sorted_values[lower] * (1 - weight) + sorted_values[upper] * weight


def pearson(xs: list[float], ys: list[float]) -> float | None:
    if len(xs) < 2 or len(xs) != len(ys):
        return None
    mean_x = statistics.fmean(xs)
    mean_y = statistics.fmean(ys)
    numerator = sum((x - mean_x) * (y - mean_y) for x, y in zip(xs, ys))
    denominator = math.sqrt(
        sum((x - mean_x) ** 2 for x in xs) * sum((y - mean_y) ** 2 for y in ys)
    )
    return round(numerator / denominator, 6) if denominator else None


def ranks(values: list[float]) -> list[float]:
    order = sorted(range(len(values)), key=values.__getitem__)
    output = [0.0] * len(values)
    index = 0
    while index < len(order):
        end = index
        while end + 1 < len(order) and values[order[end + 1]] == values[order[index]]:
            end += 1
        rank = (index + end + 2) / 2
        for position in range(index, end + 1):
            output[order[position]] = rank
        index = end + 1
    return output


def correlation(records: list[dict[str, object]], first: str, second: str) -> dict[str, object]:
    pairs = [
        (float(row[first]), float(row[second]))
        for row in records
        if isinstance(row.get(first), (int, float)) and isinstance(row.get(second), (int, float))
    ]
    xs = [pair[0] for pair in pairs]
    ys = [pair[1] for pair in pairs]
    return {
        "n": len(pairs),
        "pearson": pearson(xs, ys),
        "spearman": pearson(ranks(xs), ranks(ys)) if len(pairs) > 1 else None,
    }


def quality_stats(records: list[dict[str, object]]) -> list[dict[str, object]]:
    output: list[dict[str, object]] = []
    total = len(records)
    for key, label, unit in FIELDS:
        values = sorted(values_for(records, key))
        missing = total - len(values)
        q1 = percentile(values, 0.25)
        q3 = percentile(values, 0.75)
        iqr = q3 - q1 if values else None
        outliers = (
            sum(value < q1 - 1.5 * iqr or value > q3 + 1.5 * iqr for value in values)
            if iqr is not None
            else 0
        )
        output.append(
            {
                "key": key,
                "label": label,
                "unit": unit,
                "observations": total,
                "valid": len(values),
                "missing": missing,
                "missingPct": round(missing / total * 100, 3) if total else 0,
                "validPct": round(len(values) / total * 100, 3) if total else 0,
                "invalid": 0,
                "min": round(min(values), 6) if values else None,
                "max": round(max(values), 6) if values else None,
                "mean": round(statistics.fmean(values), 6) if values else None,
                "median": round(statistics.median(values), 6) if values else None,
                "std": round(statistics.stdev(values), 6) if len(values) > 1 else None,
                "variance": round(statistics.variance(values), 6) if len(values) > 1 else None,
                "q1": round(q1, 6) if values else None,
                "q3": round(q3, 6) if values else None,
                "iqr": round(iqr, 6) if iqr is not None else None,
                "outliers": outliers,
            }
        )
    return output


def aggregate(records: list[dict[str, object]], key: str, period: str) -> list[dict[str, object]]:
    buckets: dict[str, list[float]] = defaultdict(list)
    for row in records:
        value = row.get(key)
        if not isinstance(value, (int, float)):
            continue
        if period == "day":
            bucket = str(row["date"])
        elif period == "month":
            bucket = str(row["date"])[:7]
        else:
            bucket = f"{int(row['hour']):02d}:00"
        buckets[bucket].append(float(value))
    return [
        {"period": bucket, "value": round(statistics.fmean(bucket_values), 4), "n": len(bucket_values)}
        for bucket, bucket_values in sorted(buckets.items())
    ]


def solve(matrix: list[list[float]], vector: list[float]) -> list[float]:
    """Small Gaussian elimination solver for the 7-parameter regression."""
    size = len(vector)
    augmented = [row[:] + [vector[index]] for index, row in enumerate(matrix)]
    for column in range(size):
        pivot = max(range(column, size), key=lambda row: abs(augmented[row][column]))
        if abs(augmented[pivot][column]) < 1e-12:
            augmented[pivot][column] = 1e-12
        augmented[column], augmented[pivot] = augmented[pivot], augmented[column]
        divisor = augmented[column][column]
        augmented[column] = [value / divisor for value in augmented[column]]
        for row in range(size):
            if row == column:
                continue
            factor = augmented[row][column]
            augmented[row] = [
                value - factor * pivot_value
                for value, pivot_value in zip(augmented[row], augmented[column])
            ]
    return [augmented[index][-1] for index in range(size)]


def feature_vector(row: dict[str, object], hourly: dict[int, dict[str, float]] | None = None) -> list[float] | None:
    values: dict[str, float] = {}
    for key in ("temperature", "relativeHumidity", "pressure", "heatIndex"):
        value = row.get(key)
        if not isinstance(value, (int, float)) and hourly is not None:
            value = hourly.get(int(row["hour"]), {}).get(key)
        if not isinstance(value, (int, float)):
            return None
        values[key] = float(value)
    hour = int(row["hour"])
    return [
        1.0,
        values["temperature"],
        values["relativeHumidity"],
        values["pressure"],
        values["heatIndex"],
        math.sin(2 * math.pi * hour / 24),
        math.cos(2 * math.pi * hour / 24),
    ]


def fit_regression(records: list[dict[str, object]]) -> dict[str, object]:
    usable = []
    for row in records:
        target = row.get(TARGET)
        features = feature_vector(row)
        if isinstance(target, (int, float)) and features is not None:
            usable.append((features, float(target)))
    size = len(MODEL_FEATURES) + 1
    matrix = [[0.0 for _ in range(size)] for _ in range(size)]
    vector = [0.0 for _ in range(size)]
    for features, target in usable:
        for i in range(size):
            vector[i] += features[i] * target
            for j in range(size):
                matrix[i][j] += features[i] * features[j]
    coefficients = solve(matrix, vector)
    return {"coefficients": [round(item, 10) for item in coefficients], "usableRows": len(usable)}


def make_hourly_profile(records: list[dict[str, object]]) -> dict[str, dict[str, float]]:
    buckets: dict[int, dict[str, list[float]]] = defaultdict(lambda: defaultdict(list))
    for row in records:
        hour = int(row["hour"])
        for key in ("temperature", "relativeHumidity", "pressure", "heatIndex"):
            value = row.get(key)
            if isinstance(value, (int, float)):
                buckets[hour][key].append(float(value))
    return {
        str(hour): {key: round(statistics.fmean(values), 6) for key, values in fields.items() if values}
        for hour, fields in buckets.items()
    }


def predict(features: list[float], coefficients: list[float]) -> float:
    return sum(feature * coefficient for feature, coefficient in zip(features, coefficients))


def forecast_rows(start: datetime, end: datetime, model: dict[str, object], hourly_profile: dict[str, dict[str, float]]) -> list[dict[str, object]]:
    coefficients = [float(value) for value in model["coefficients"]]
    profile = {int(hour): values for hour, values in hourly_profile.items()}
    output = []
    current = start
    while current < end:
        row = {"timestamp": current.isoformat(sep=" "), "date": current.date().isoformat(), "time": current.strftime("%H:%M"), "hour": current.hour}
        values = profile.get(current.hour, {})
        for key in ("temperature", "relativeHumidity", "pressure", "heatIndex"):
            row[key] = values.get(key)
        vector = feature_vector(row, {hour: {k: float(v) for k, v in data.items()} for hour, data in profile.items()})
        row[TARGET] = round(predict(vector, coefficients), 4) if vector is not None else None
        output.append(row)
        current += timedelta(hours=1)
    return output


def metrics(actual: list[float], predicted: list[float]) -> dict[str, float | None]:
    if not actual:
        return {"mae": None, "rmse": None, "r2": None, "bias": None, "mape": None, "n": 0}
    errors = [prediction - truth for truth, prediction in zip(actual, predicted)]
    mae = statistics.fmean(abs(error) for error in errors)
    rmse = math.sqrt(statistics.fmean(error * error for error in errors))
    mean_actual = statistics.fmean(actual)
    denominator = sum((truth - mean_actual) ** 2 for truth in actual)
    r2 = 1 - sum(error * error for error in errors) / denominator if denominator else None
    mape_values = [abs(error / truth) * 100 for error, truth in zip(errors, actual) if truth]
    return {
        "mae": round(mae, 6),
        "rmse": round(rmse, 6),
        "r2": round(r2, 6) if r2 is not None else None,
        "bias": round(statistics.fmean(errors), 6),
        "mape": round(statistics.fmean(mape_values), 6) if mape_values else None,
        "n": len(actual),
    }


def xml_cell(row: int, column: int, value: object) -> str:
    letters = ""
    n = column
    while n:
        n, remainder = divmod(n - 1, 26)
        letters = chr(65 + remainder) + letters
    ref = f"{letters}{row}"
    if value is None:
        value = ""
    text = html.escape(str(value), quote=False)
    return f'<c r="{ref}" t="inlineStr"><is><t>{text}</t></is></c>'


def write_sheet(path: Path, rows: list[list[object]]) -> None:
    with path.open("w", encoding="utf-8") as handle:
        handle.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
        handle.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>')
        for row_number, row in enumerate(rows, 1):
            handle.write(f'<row r="{row_number}">')
            for column, value in enumerate(row, 1):
                handle.write(xml_cell(row_number, column, value))
            handle.write("</row>")
        handle.write("</sheetData></worksheet>")


def write_xlsx(path: Path, sheets: list[tuple[str, list[list[object]]]]) -> None:
    with TemporaryDirectory() as temp:
        temp_dir = Path(temp)
        sheet_files = []
        for index, (_name, rows) in enumerate(sheets, 1):
            sheet_path = temp_dir / f"sheet{index}.xml"
            write_sheet(sheet_path, rows)
            sheet_files.append(sheet_path)

        content_types = [
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">',
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>',
            '<Default Extension="xml" ContentType="application/xml"/>',
            '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
            '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        ]
        for index in range(1, len(sheets) + 1):
            content_types.append(f'<Override PartName="/xl/worksheets/sheet{index}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
        content_types.append("</Types>")
        workbook = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
        relationships = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">']
        for index, (name, _rows) in enumerate(sheets, 1):
            workbook += f'<sheet name="{html.escape(name)}" sheetId="{index}" r:id="rId{index}"/>'
            relationships.append(f'<Relationship Id="rId{index}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{index}.xml"/>')
        workbook += "</sheets></workbook>"
        relationships.append('<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>')
        styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="1"><font><sz val="11"/><name val="Aptos"/></font></fonts><fills count="1"><fill><patternFill patternType="none"/></fill></fills><borders count="1"><border/></borders><cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellXfs></styleSheet>'
        root_rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as archive:
            archive.writestr("[Content_Types].xml", "".join(content_types))
            archive.writestr("_rels/.rels", root_rels)
            archive.writestr("xl/workbook.xml", workbook)
            archive.writestr("xl/_rels/workbook.xml.rels", "".join(relationships))
            archive.writestr("xl/styles.xml", styles)
            for index, sheet_path in enumerate(sheet_files, 1):
                archive.write(sheet_path, f"xl/worksheets/sheet{index}.xml")


def rows_from_records(records: list[dict[str, object]]) -> list[list[object]]:
    header = ["Timestamp", "Date", "Time"] + [label for _key, label, _unit in FIELDS]
    output = [header]
    for row in records:
        output.append(
            [row["timestamp"], row["date"], row["time"]]
            + [row.get(key) for key, _label, _unit in FIELDS]
        )
    return output


def csv_bytes(rows: list[list[object]]) -> str:
    from io import StringIO

    buffer = StringIO()
    writer = csv.writer(buffer)
    writer.writerows(rows)
    return buffer.getvalue()


def write_pdf(path: Path, title: str, paragraphs: list[str]) -> None:
    lines = [title, "", *paragraphs]
    wrapped = []
    for paragraph in lines:
        wrapped.extend(textwrap.wrap(paragraph, width=92) or [""])
    content = ["BT", "/F1 10 Tf", "52 760 Td"]
    for line in wrapped:
        safe = line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        content.append(f"({safe}) Tj")
        content.append("0 -14 Td")
    content.append("ET")
    stream = "\n".join(content).encode("latin-1", errors="replace")
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream",
    ]
    output = bytearray(b"%PDF-1.4\n")
    offsets = []
    for index, obj in enumerate(objects, 1):
        offsets.append(len(output))
        output.extend(f"{index} 0 obj\n".encode())
        output.extend(obj)
        output.extend(b"\nendobj\n")
    xref = len(output)
    output.extend(f"xref\n0 {len(objects)+1}\n".encode())
    output.extend(b"0000000000 65535 f \n")
    for offset in offsets:
        output.extend(f"{offset:010d} 00000 n \n".encode())
    output.extend(f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF".encode())
    path.write_bytes(output)


def summary_rows(summary: dict[str, object]) -> list[list[object]]:
    return [["Metric", "Value"]] + [[key, value] for key, value in summary.items()]


def main() -> None:
    records, counters = parse_workbook()
    records.sort(key=lambda row: str(row["timestamp"]))
    exact_keys = [tuple(row.get(key) for key, _label, _unit in FIELDS) + (row["timestamp"],) for row in records]
    exact_counts = Counter(exact_keys)
    exact_duplicate_rows = sum(count - 1 for count in exact_counts.values() if count > 1)
    timestamp_groups: dict[str, list[dict[str, object]]] = defaultdict(list)
    for row in records:
        timestamp_groups[str(row["timestamp"])].append(row)
    duplicate_timestamps = sum(len(group) - 1 for group in timestamp_groups.values() if len(group) > 1)
    conflicting_timestamps = sum(1 for group in timestamp_groups.values() if len(group) > 1 and len({tuple(row.get(key) for key, _label, _unit in FIELDS) for row in group}) > 1)

    training = [row for row in records if TRAIN_START <= datetime.fromisoformat(str(row["timestamp"])) < CUTOFF]
    holdout = [row for row in records if datetime.fromisoformat(str(row["timestamp"])) >= CUTOFF]
    validation_train = [row for row in training if datetime.fromisoformat(str(row["timestamp"])) < VALIDATION_START]
    validation = [row for row in training if datetime.fromisoformat(str(row["timestamp"])) >= VALIDATION_START]
    model = fit_regression(validation_train or training)
    hourly_profile = make_hourly_profile(training)
    validation_predictions = []
    validation_actual = []
    coefficients = [float(item) for item in model["coefficients"]]
    for row in validation:
        vector = feature_vector(row, {int(hour): values for hour, values in hourly_profile.items()})
        target = row.get(TARGET)
        if vector is not None and isinstance(target, (int, float)):
            validation_predictions.append(predict(vector, coefficients))
            validation_actual.append(float(target))
    validation_metrics = metrics(validation_actual, validation_predictions)

    quality = quality_stats(records)
    correlations = {
        key: correlation(records, key, TARGET)
        for key in ("temperature", "relativeHumidity", "pressure", "heatIndex")
    }
    monthly = {
        key: aggregate(records, key, "month")
        for key in ("temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity")
    }
    daily = {
        key: aggregate(records, key, "day")
        for key in ("temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity")
    }
    date_values = [datetime.fromisoformat(str(row["timestamp"])) for row in records]
    april = [row for row in records if str(row["date"]).startswith("2026-04")]
    july = [row for row in records if str(row["date"]).startswith("2026-07")]
    april_july = {
        month: {
            key: round(statistics.fmean(values_for(period, key)), 4) if values_for(period, key) else None
            for key in ("temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity")
        }
        for month, period in (("April 2026", april), ("July 2026", july))
    }
    daily_forecast = forecast_rows(datetime(2026, 9, 1), datetime(2026, 9, 2), model, hourly_profile)
    monthly_forecast = []
    for month in (9, 10, 11, 12):
        start = datetime(2026, month, 1)
        end = datetime(2027, 1, 1) if month == 12 else datetime(2026, month + 1, 1)
        month_rows = forecast_rows(start, end, model, hourly_profile)
        monthly_forecast.append(
            {
                "month": start.strftime("%B %Y"),
                "key": start.strftime("%Y-%m"),
                "temperature": round(statistics.fmean([float(row["temperature"]) for row in month_rows]), 4),
                "relativeHumidity": round(statistics.fmean([float(row["relativeHumidity"]) for row in month_rows]), 4),
                "pressure": round(statistics.fmean([float(row["pressure"]) for row in month_rows]), 4),
                "heatIndex": round(statistics.fmean([float(row["heatIndex"]) for row in month_rows]), 4),
                "refractivity": round(statistics.fmean([float(row[TARGET]) for row in month_rows]), 4),
                "hours": len(month_rows),
            }
        )

    summary = {
        "sourceFile": SOURCE.name,
        "sourceRows": counters.get("sourceRows", 0),
        "observationRows": len(records),
        "metadataOrInvalidRows": counters.get("metadataOrInvalidRows", 0),
        "blankRows": counters.get("blankRows", 0),
        "invalidDateRows": counters.get("invalidDateRows", 0),
        "invalidTimeRows": counters.get("invalidTimeRows", 0),
        "exactDuplicateRows": exact_duplicate_rows,
        "duplicateTimestamps": duplicate_timestamps,
        "conflictingTimestamps": conflicting_timestamps,
        "sentinelValues": counters.get("sentinelValues", 0),
        "sentinelByField": {key.split(":", 1)[1]: value for key, value in counters.items() if key.startswith("sentinel:")},
        "dateMin": min(date_values).isoformat(sep=" "),
        "dateMax": max(date_values).isoformat(sep=" "),
        "originalYear": 2022,
        "convertedYear": 2026,
        "trainingStart": training[0]["timestamp"] if training else None,
        "trainingEnd": training[-1]["timestamp"] if training else None,
        "trainingRows": len(training),
        "holdoutRows": len(holdout),
        "validationStart": validation[0]["timestamp"] if validation else None,
        "validationEnd": validation[-1]["timestamp"] if validation else None,
        "forecastStart": CUTOFF.isoformat(sep=" "),
        "target": TARGET,
        "modelType": "Chronological multivariate linear regression",
        "modelFeatureCount": len(MODEL_FEATURES),
        "modelFitRows": model["usableRows"],
        "validationMetrics": validation_metrics,
        "dateShiftNote": "The observation dates were calendar-shifted from 2022 to 2026 for the project's forecasting timeline while preserving the original month, day and time structure.",
    }
    payload = {
        "summary": summary,
        "columns": [
            {"key": key, "label": label, "unit": unit}
            for key, label, unit in FIELDS
        ],
        "quality": quality,
        "correlations": correlations,
        "monthly": monthly,
        "daily": daily,
        "aprilJuly": april_july,
        "model": {
            **model,
            "features": MODEL_FEATURES,
            "target": TARGET,
            "validation": validation_metrics,
            "validationStart": summary["validationStart"],
            "validationEnd": summary["validationEnd"],
            "trainingStart": summary["trainingStart"],
            "trainingEnd": summary["trainingEnd"],
            "hourlyProfile": hourly_profile,
            "limitations": [
                "Future environmental predictors use training-period hour-of-day climatology because no external weather source is permitted.",
                "Longer horizons should be treated as exploratory and are not equally reliable to a one-day forecast.",
            ],
        },
        "dailyForecast": daily_forecast,
        "monthlyForecast": monthly_forecast,
        "recentObservations": [
            {key: row.get(key) for key in ["timestamp", "temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity"]}
            for row in records[-48:]
        ],
        "holdoutAvailable": bool(holdout),
        "holdoutPreview": [
            {key: row.get(key) for key in ["timestamp", "temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity"]}
            for row in holdout[:48]
        ],
    }

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    EXPORT_DIR.mkdir(parents=True, exist_ok=True)
    module = "export const auraData = " + json.dumps(payload, indent=2, ensure_ascii=False) + " as const;\n\nexport type AuraData = typeof auraData;\n"
    (DATA_DIR / "auraData.ts").write_text(module, encoding="utf-8")

    cleaned_rows = rows_from_records(records)
    training_rows = rows_from_records(training)
    holdout_rows = rows_from_records(holdout)
    summary_sheet = summary_rows(summary)
    quality_sheet = [["Variable", "Unit", "Observations", "Valid", "Missing", "Missing %", "Min", "Max", "Mean", "Median", "Std", "Q1", "Q3", "IQR", "Outliers"]]
    quality_sheet += [[item[key] for key in ("label", "unit", "observations", "valid", "missing", "missingPct", "min", "max", "mean", "median", "std", "q1", "q3", "iqr", "outliers")] for item in quality]
    write_xlsx(EXPORT_DIR / "AY_Project_Data_CLEANED_2026.xlsx", [
        ("Cleaned_Data", cleaned_rows),
        ("Cleaning_Summary", summary_sheet),
        ("Data_Quality", quality_sheet),
        ("Training_Data", training_rows),
        ("Holdout_Data", holdout_rows),
    ])
    write_xlsx(EXPORT_DIR / "MASTER_TRAINING_DATA_2026.xlsx", [("Training_Data", training_rows)])
    (EXPORT_DIR / "MASTER_TRAINING_DATA_2026.csv").write_text(csv_bytes(training_rows), encoding="utf-8")
    write_xlsx(EXPORT_DIR / "FORECAST_HOLDOUT_DATA_2026.xlsx", [
        ("Holdout_Data", [["NOT USED FOR TRAINING"]] + holdout_rows)
    ])
    write_xlsx(EXPORT_DIR / "Data_Quality_Report.xlsx", [("Data_Quality", quality_sheet), ("Cleaning_Summary", summary_sheet)])
    model_sheet = [["Metric", "Value"], ["Model", summary["modelType"]], ["Target", TARGET], ["Features", ", ".join(MODEL_FEATURES)], ["Training period", f"{summary['trainingStart']} to {summary['trainingEnd']}"], ["Validation period", f"{summary['validationStart']} to {summary['validationEnd']}"], *[[key.upper(), value] for key, value in validation_metrics.items()]]
    write_xlsx(EXPORT_DIR / "Model_Performance_Report.xlsx", [("Model_Performance", model_sheet)])
    audit_sheet = [["Audit item", "Value"], ["Exact source dataset", SOURCE.name], ["Training observations", len(training)], ["Training max timestamp", summary["trainingEnd"]], ["Holdout rows excluded", len(holdout)], ["Target", TARGET], ["Features", ", ".join(MODEL_FEATURES)], ["Preprocessing", "-9999 → missing; fit on training only"], ["Validation", "Chronological: February-July fit, August validation"], ["Leakage check", "PASS: training timestamps are strictly before 2026-09-01"], ["Date conversion", summary["dateShiftNote"]]]
    write_xlsx(EXPORT_DIR / "Training_Audit_Report.xlsx", [("Training_Audit", audit_sheet)])
    daily_sheet = [["Timestamp", "Temperature (°C)", "RH (%)", "Pressure (mbar)", "Heat Index (°C)", "Refractivity"]] + [[row["timestamp"], row["temperature"], row["relativeHumidity"], row["pressure"], row["heatIndex"], row[TARGET]] for row in daily_forecast]
    write_xlsx(EXPORT_DIR / "DAILY_FORECAST_2026-09-01.xlsx", [("Daily_Forecast", daily_sheet)])
    (EXPORT_DIR / "DAILY_FORECAST_2026-09-01.csv").write_text(csv_bytes(daily_sheet), encoding="utf-8")
    monthly_sheet = [["Month", "Temperature (°C)", "RH (%)", "Pressure (mbar)", "Heat Index (°C)", "Refractivity", "Forecast hours"]] + [[row["month"], row["temperature"], row["relativeHumidity"], row["pressure"], row["heatIndex"], row["refractivity"], row["hours"]] for row in monthly_forecast]
    write_xlsx(EXPORT_DIR / "MONTHLY_FORECAST_2026.csv.xlsx", [("Monthly_Forecast", monthly_sheet)])
    (EXPORT_DIR / "MONTHLY_FORECAST_2026.csv").write_text(csv_bytes(monthly_sheet), encoding="utf-8")

    report_paragraphs = [
        f"Dataset description: {len(records):,} valid observations were parsed from {SOURCE.name}. The workbook contains split date/time columns, repeated metadata/header rows, and missing sentinel values.",
        f"Cleaning methodology: {summary['metadataOrInvalidRows']:,} non-observation rows were excluded from the analysis frame. Exact duplicate rows: {exact_duplicate_rows:,}. Duplicate timestamps: {duplicate_timestamps:,}; conflicting timestamp groups: {conflicting_timestamps:,}. The -9999 sentinel was preserved as missing, not converted to zero.",
        summary["dateShiftNote"],
        f"Chronological split: {len(training):,} records from February-August 2026 were eligible for training; {len(holdout):,} records from September 2026 onward were held out. No holdout rows were used for model fitting, feature fitting, or validation.",
        f"Model: {summary['modelType']} targeting {TARGET}. Validation used the final training month as a chronological validation period. Metrics: MAE={validation_metrics['mae']}, RMSE={validation_metrics['rmse']}, R2={validation_metrics['r2']}, bias={validation_metrics['bias']}.",
        "Limitations: future environmental predictors are represented by training-period hour-of-day climatology because the project prohibits external data. The forecast is therefore an explainable baseline for demonstration and should not be described as a full operational weather forecast.",
        f"April vs July means: {json.dumps(april_july, ensure_ascii=False)}. Correlations are descriptive associations only and do not prove causation.",
    ]
    write_pdf(EXPORT_DIR / "Data_Quality_and_Exploratory_Analysis_Report.pdf", "AURA 2026 Data Quality & Exploratory Analysis Report", report_paragraphs)
    (EXPORT_DIR / "README.md").write_text(
        "# AURA 2026 analysis package\n\n"
        f"Generated from `{SOURCE.name}` only. {summary['dateShiftNote']}\n\n"
        f"Training rows: {len(training):,} ({summary['trainingStart']} → {summary['trainingEnd']})\n\n"
        f"Holdout rows: {len(holdout):,} (from {summary['forecastStart']})\n",
        encoding="utf-8",
    )
    (EXPORT_DIR / "DATA_PIPELINE_DOCUMENTATION.md").write_text(
        "# AURA data pipeline\n\n"
        "1. Read the single lecturer workbook sheet.\n"
        "2. Parse DD-MM-YY, DD/MM/YY, and Excel serial dates without swapping day and month.\n"
        "3. Remove metadata/header rows only when no valid date is present.\n"
        "4. Convert -9999 to missing and retain the affected record.\n"
        "5. Shift the observation year from 2022 to 2026 while preserving month/day/time.\n"
        "6. Split chronologically: February-August training; September onward holdout.\n"
        "7. Fit regression coefficients on training rows only; use a chronological August validation slice.\n"
        "8. Use training-period hour-of-day climatology for future environmental predictors.\n",
        encoding="utf-8",
    )

    zip_path = EXPORT_DIR / "AURA_2026_DATA_ANALYSIS_AND_FORECASTING.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as archive:
        for file in EXPORT_DIR.iterdir():
            if file == zip_path:
                continue
            archive.write(file, f"{file.name}")
    print(json.dumps({
        "summary": summary,
        "quality": quality[:5],
        "correlations": correlations,
        "monthlyForecast": monthly_forecast,
        "outputs": len(list(EXPORT_DIR.iterdir())),
    }, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()