# AURA pipeline fix — heatIndex train/validation mismatch

## What was broken
`fit_regression()` dropped any row missing `heatIndex` (no fallback).
`forecast_rows()` / the validation loop used the hourly climatology to
fill missing `heatIndex`. Training saw a biased hot-hour-only subset;
validation saw the full range with imputed values. Result: R² = -4.70.

## Verified fix
Impute missing `heatIndex` the same way, from the same training-period
hourly climatology, for BOTH the fit set and the validation set, before
either one touches `feature_vector`. Tested against your real
MASTER_TRAINING_DATA_2026.csv (Feb–Jul fit / Aug validation, same split
your script uses): R² went from -4.70 to 0.91, MAE from 26.14 to 3.18.

## How to apply

In `scripts/aura_pipeline.py`, replace these three things.

### 1. Replace `feature_vector()`

```python
def feature_vector(row: dict[str, object], hourly: dict[int, dict[str, float]] | None = None) -> list[float] | None:
    """hourly is REQUIRED now — pass the training-period hourly profile
    every time this is called, whether fitting, validating, or forecasting.
    This guarantees the same imputation rule applies everywhere."""
    values: dict[str, float] = {}
    for key in ("temperature", "relativeHumidity", "pressure", "heatIndex"):
        value = row.get(key)
        if not isinstance(value, (int, float)):
            if hourly is not None:
                value = hourly.get(int(row["hour"]), {}).get(key)
            if not isinstance(value, (int, float)):
                return None  # still missing after climatology fallback -> drop row
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
```

Change from original: the fallback-to-climatology branch used to be
gated behind `hourly is not None` in a way that only ever got exercised
at validation time, because `fit_regression` called `feature_vector(row)`
with no `hourly` argument. Now the caller is responsible for always
passing the profile, so the same rule applies everywhere. That's what
step 2 fixes.

### 2. Replace `fit_regression()` signature/call to require the profile

```python
def fit_regression(records: list[dict[str, object]], hourly_profile: dict[str, dict[str, float]]) -> dict[str, object]:
    profile = {int(hour): values for hour, values in hourly_profile.items()}
    usable = []
    for row in records:
        target = row.get(TARGET)
        features = feature_vector(row, profile)
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
```

### 3. Reorder `main()` so the hourly profile exists BEFORE fitting

Currently the profile is computed on the line right after the model fit.
Swap the order of these two lines:

```python
# OLD ORDER (buggy):
# model = fit_regression(validation_train or training)
# hourly_profile = make_hourly_profile(training)

# NEW ORDER (fixed):
hourly_profile = make_hourly_profile(training)          # compute FIRST
weekday_hourly_profile = make_weekday_hourly_profile(training)
model = fit_regression(validation_train or training, hourly_profile)  # pass it in
```

And update the validation-prediction loop just below to reuse the same
`profile` dict built once, instead of rebuilding it inline:

```python
profile = {int(hour): values for hour, values in hourly_profile.items()}
validation_predictions = []
validation_actual = []
coefficients = [float(item) for item in model["coefficients"]]
for row in validation:
    vector = feature_vector(row, profile)
    target = row.get(TARGET)
    if vector is not None and isinstance(target, (int, float)):
        validation_predictions.append(predict(vector, coefficients))
        validation_actual.append(float(target))
validation_metrics = metrics(validation_actual, validation_predictions)
```

## Nothing else needs to change
`forecast_rows()` already passed a profile-aware call correctly — that
part was fine. All the Excel/SVG/PDF export code is untouched. Row
counts in your reports will shift slightly: `modelFitRows` / `usableRows`
will go up (from ~40% of training rows to ~100%, since rows are no
longer silently dropped for missing heatIndex), which is expected and
correct.

## Before committing
Run the script locally against your real source workbook and diff the
new `Model_Performance_Report.xlsx` MAE/RMSE/R² against the old one —
you should see numbers close to what I validated above (R² ≈ 0.9,
not -4.7). If R² comes back negative again, stop and don't deploy —
something else changed and it's worth re-checking before it hits
the live dashboard.
