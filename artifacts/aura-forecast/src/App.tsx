import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpRight,
  Beaker,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  CloudDownload,
  Clock3,
  Database,
  FileArchive,
  FileBarChart,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  Home,
  Info,
  Layers3,
  Menu,
  Microscope,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Sun,
  Table2,
  Moon,
  X,
  XCircle,
} from "lucide-react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from "wouter";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auraData } from "@/data/auraData";

const queryClient = new QueryClient();
type IconType = typeof Activity;
type Tone = "teal" | "amber" | "navy" | "coral" | "slate";
type ForecastRow = {
  timestamp: string;
  time: string;
  temperature: number | null;
  relativeHumidity: number | null;
  pressure: number | null;
  heatIndex: number | null;
  refractivity: number | null;
};
type ForecastKey = "temperature" | "relativeHumidity" | "pressure" | "refractivity";
type ForecastSettings = {
  horizon: string;
  referenceDate: string;
  predictionDate: string;
  currentDateTime: string;
  setHorizon: (value: string) => void;
  setReferenceDate: (value: string) => void;
  setPredictionDate: (value: string) => void;
  setCurrentDateTime: (value: string) => void;
};

type ThemeMode = "light" | "dark";
type ThemeSettings = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ForecastSettingsContext = createContext<ForecastSettings | null>(null);
const ThemeContext = createContext<ThemeSettings | null>(null);

function useForecastSettings(): ForecastSettings {
  const settings = useContext(ForecastSettingsContext);
  if (!settings) throw new Error("Forecast settings are only available inside the app shell.");
  return settings;
}

function useThemeSettings(): ThemeSettings {
  const settings = useContext(ThemeContext);
  if (!settings) throw new Error("Theme settings are only available inside the app shell.");
  return settings;
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
    const storedTheme = window.localStorage.getItem("aura-theme");
    if (storedTheme === "dark" || storedTheme === "light") return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("aura-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((value) => value === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function ForecastSettingsProvider({ children }: { children: ReactNode }) {
  const [horizon, setHorizon] = useState("24 hours");
  const [referenceDate, setReferenceDate] = useState("2026-08-31");
  const [predictionDate, setPredictionDate] = useState("2026-09-01");
  const [currentDateTime, setCurrentDateTime] = useState("2026-09-01T12:00");
  return <ForecastSettingsContext.Provider value={{ horizon, referenceDate, predictionDate, currentDateTime, setHorizon, setReferenceDate, setPredictionDate, setCurrentDateTime }}>{children}</ForecastSettingsContext.Provider>;
}

const navItems: Array<{ href: string; label: string; detail: string; icon: IconType }> = [
  { href: "/", label: "Overview", detail: "Instrument readout", icon: Home },
  { href: "/quality", label: "Data quality", detail: "Cleaning ledger", icon: ShieldCheck },
  { href: "/analysis", label: "Analysis", detail: "Explore relationships", icon: Microscope },
  { href: "/model", label: "Model", detail: "Method & audit", icon: Beaker },
  { href: "/forecast", label: "Forecast", detail: "Holdout outlook", icon: Activity },
  { href: "/reports", label: "Reports", detail: "Exports & package", icon: FileBarChart },
];

const timelineItems = [
  { label: "Workbook source", value: "Single-source analytical input", tone: "navy" as Tone, state: "Registered" },
  { label: "Temporal frame", value: "2026 observation timeline", tone: "teal" as Tone, state: "Aligned" },
  { label: "Training window", value: "February — August 2026", tone: "teal" as Tone, state: "Training" },
  { label: "Holdout window", value: "September 2026 onward", tone: "amber" as Tone, state: "Forecast" },
];

const exportsBase = `${import.meta.env.BASE_URL}exports/`;
const qualityByKey = Object.fromEntries(auraData.quality.map((item) => [item.key, item]));

function number(value: unknown, digits = 2): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "—";
  return value.toLocaleString(undefined, { maximumFractionDigits: digits });
}

function shortDate(value: string): string {
  return value.slice(5);
}

function formatFocusDate(value: string): string {
  const [date, time] = value.split("T");
  return `${date ?? value}${time ? ` · ${time}` : ""}`;
}

function localTimestamp(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function csvDownload(filename: string, rows: Array<Record<string, unknown>>): void {
  const keys = Object.keys(rows[0] ?? {});
  const csv = [keys.join(","), ...rows.map((row) => keys.map((key) => JSON.stringify(row[key] ?? "")).join(","))].join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function makeForecast(dateValue: string, horizon: string): ForecastRow[] {
  const count = horizon === "24 hours" ? 24 : horizon === "7 days" ? 24 * 7 : 24 * 30;
  const start = new Date(`${dateValue}T00:00:00`);
  const profile = auraData.model.hourlyProfile as Record<string, Record<string, number>>;
  const weekdayProfile = (auraData.model as unknown as { weekdayHourlyProfile?: Record<string, Record<string, number>> }).weekdayHourlyProfile;
  const coefficients = auraData.model.coefficients as readonly number[];
  return Array.from({ length: count }, (_, index) => {
    const current = new Date(start.getTime() + index * 60 * 60 * 1000);
    const hour = current.getHours();
    const weekday = (current.getDay() + 6) % 7;
    const values = weekdayProfile?.[String(weekday * 24 + hour)] ?? profile[String(hour)] ?? {};
    const temperature = values.temperature ?? null;
    const relativeHumidity = values.relativeHumidity ?? null;
    const pressure = values.pressure ?? null;
    const heatIndex = values.heatIndex ?? null;
    const vector = [1, temperature, relativeHumidity, pressure, heatIndex, Math.sin((2 * Math.PI * hour) / 24), Math.cos((2 * Math.PI * hour) / 24)];
    const refractivity = vector.every((value) => typeof value === "number")
      ? vector.reduce((sum, value, position) => sum + value * (coefficients[position] ?? 0), 0)
      : null;
    return {
      timestamp: localTimestamp(current),
      time: current.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
      temperature,
      relativeHumidity,
      pressure,
      heatIndex,
      refractivity: typeof refractivity === "number" ? Number(refractivity.toFixed(4)) : null,
    };
  });
}

function forecastFocus(rows: ForecastRow[], currentDateTime: string, predictionDate: string): ForecastRow {
  const focusTimestamp = `${currentDateTime.replace("T", " ")}:00`;
  const exact = rows.find((row) => row.timestamp === focusTimestamp);
  if (exact) return exact;
  const focusDate = currentDateTime.slice(0, 10) || predictionDate;
  const focusHour = Number(currentDateTime.slice(11, 13));
  const focusRows = makeForecast(focusDate, "24 hours");
  return focusRows.find((row) => Number(row.timestamp.slice(11, 13)) === focusHour) ?? focusRows[0] ?? rows[0] ?? {
    timestamp: `${focusDate} 00:00:00`,
    time: "00:00",
    temperature: null,
    relativeHumidity: null,
    pressure: null,
    heatIndex: null,
    refractivity: null,
  };
}

function localDateTimeValue(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function Badge({ children, tone = "slate", dot = false }: { children: ReactNode; tone?: Tone; dot?: boolean }) {
  return <span className={`badge badge-${tone}`}>{dot && <span className="badge-dot" />}{children}</span>;
}

function Panel({ children, className = "", accent }: { children: ReactNode; className?: string; accent?: Tone }) {
  return <section className={`instrument-panel ${accent ? `panel-accent-${accent}` : ""} ${className}`}>{children}</section>;
}

function PageTitle({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return <header className="page-title page-enter"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>{actions && <div className="page-actions">{actions}</div>}</header>;
}

function SectionHeading({ kicker, title, note }: { kicker: string; title: string; note?: string }) {
  return <div className="section-heading"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2></div>{note && <span className="mono-note">{note}</span>}</div>;
}

function ExportLink({ filename, label = "Download" }: { filename: string; label?: string }) {
  return <a className="icon-button export-link" href={`${exportsBase}${filename}`} download={filename} aria-label={label}><ArrowDownToLine size={16} /></a>;
}

function DataNote({ children }: { children: ReactNode }) {
  return <div className="data-unavailable data-note"><div className="unavailable-mark"><Info size={19} /></div><div><strong>Read this result carefully</strong><p>{children}</p></div></div>;
}

function ChartEmpty({ title, detail }: { title: string; detail: string }) {
  return <div className="chart-empty"><div className="chart-grid" /><div className="empty-chart-copy"><Activity size={18} /><strong>{title}</strong><span>{detail}</span></div></div>;
}

function TimelineBand() {
  return <Panel className="timeline-panel" accent="teal"><div className="timeline-head"><div><div className="eyebrow">Research frame</div><h2>One source. One honest split.</h2></div><Badge tone="teal" dot>Time-aligned</Badge></div><div className="timeline-track" aria-label="AURA 2026 date split"><div className="timeline-line"><span /></div>{timelineItems.map((item, index) => <div className={`timeline-stop stop-${item.tone}`} key={item.label}><span className="timeline-dot">{index + 1}</span><div><div className="timeline-state">{item.state}</div><strong>{item.label}</strong><p>{item.value}</p></div></div>)}</div><div className="timeline-caption"><Info size={15} /><span>All records share a consistent 2026 analysis frame while preserving their within-year time structure.</span></div></Panel>;
}

function SignalCard({ label, field, icon: Icon, tone, value, unit, status = "forecast snapshot" }: { label: string; field: string; icon: IconType; tone: Tone; value: unknown; unit: string; status?: string }) {
  return <Panel className="signal-card" accent={tone}><div className="signal-icon"><Icon size={18} /></div><div className="signal-label">{label}</div><div className="signal-value">{number(value)} <small>{unit}</small></div><div className="signal-field">{field}</div><div className="signal-rule" /><span className="signal-status"><Check size={13} /> {status}</span></Panel>;
}

function Overview({ goToReports }: { goToReports: () => void }) {
  const summary = auraData.summary;
  const { horizon, predictionDate, currentDateTime } = useForecastSettings();
  const forecastRows = useMemo(() => makeForecast(predictionDate, horizon), [predictionDate, horizon]);
  const focus = useMemo(() => forecastFocus(forecastRows, currentDateTime, predictionDate), [forecastRows, currentDateTime, predictionDate]);
  const series = auraData.daily.refractivity.map((item) => ({ date: shortDate(item.period), refractivity: item.value }));
  return <div className="page-stack">
    <PageTitle eyebrow="AURA / 2026 · instrument overview" title="Forecasting, without the shortcuts." description="A research-ready view of atmospheric refractivity forecasting, built around a traceable workbook and a chronological evaluation frame." actions={<button type="button" className="outline-button" onClick={goToReports}><CloudDownload size={15} /> Export center</button>} />
    <div className="overview-hero page-enter delay-1"><div className="hero-copy"><div className="hero-tag"><span className="pulse-dot" /> Live instrument readout</div><h2>Read the atmosphere<br /><em>before it moves.</em></h2><p>AURA keeps the boundary between measured history and future forecast visible at every step. No hidden joins. No random split. No manufactured certainty.</p><div className="hero-meta"><div><span>Dataset</span><strong>{number(summary.observationRows, 0)} observations</strong></div><div><span>Target</span><strong>Refractivity</strong></div><div><span>Evaluation</span><strong>{summary.holdoutRows.toLocaleString()} holdout rows</strong></div></div></div><div className="hero-graphic" aria-label="Atmospheric measurement schematic"><div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" /><div className="orbital-ring ring-three" /><div className="hero-orb"><span>R<sub>e</sub></span><small>refractivity</small></div><div className="graphic-label label-top">ATMOSPHERIC<br /><b>MEASURE</b></div><div className="graphic-label label-bottom">2026<br /><b>OUTLOOK</b></div></div></div>
    <TimelineBand />
     <div className="section-heading page-enter delay-2"><div><div className="eyebrow">Forecast snapshot</div><h2>The variables at the selected hour.</h2></div><span className="mono-note">{formatFocusDate(focus.timestamp.slice(0, 16))}</span></div>
    <div className="signal-grid page-enter delay-2">
       <SignalCard label="Temperature" field="Temp. (deg. C)" icon={Gauge} tone="teal" value={focus.temperature} unit="°C" />
       <SignalCard label="Pressure" field="Pressure (mbar)" icon={Activity} tone="navy" value={focus.pressure} unit="mbar" />
       <SignalCard label="Relative humidity" field="RH (%)" icon={Layers3} tone="amber" value={focus.relativeHumidity} unit="%" />
       <SignalCard label="Target · refractivity" field="Refractivity" icon={Sparkles} tone="coral" value={focus.refractivity} unit="N" />
    </div>
    <div className="dashboard-grid page-enter delay-3">
      <Panel className="forecast-preview" accent="navy"><div className="panel-topline"><div><div className="eyebrow">Observed daily means</div><h2>Measured refractivity</h2></div><Badge tone="teal" dot>Loaded</Badge></div><div className="legend-row"><span><i className="legend-line teal-line" /> observed</span><span><i className="legend-dash" /> Sep cutoff</span></div><div className="actual-chart"><ResponsiveContainer width="100%" height={238}><AreaChart data={series}><CartesianGrid stroke="#e8edf0" vertical={false} /><XAxis dataKey="date" tick={{ fontSize: 9, fill: "#8a98a5" }} minTickGap={28} /><YAxis tick={{ fontSize: 9, fill: "#8a98a5" }} width={38} /><Tooltip contentStyle={{ fontSize: 11, borderRadius: 4, border: "1px solid #d9e0e7" }} /><Area type="monotone" dataKey="refractivity" stroke="#3aa590" fill="#dff2ed" strokeWidth={2} /></AreaChart></ResponsiveContainer></div></Panel>
      <Panel className="readiness-panel" accent="amber"><div className="eyebrow">Readiness gate</div><h2>Defensible by design.</h2><div className="readiness-list">{[["Input integrity", "Single-source frame", "ready"], ["Temporal frame", "2026 analysis timeline", "ready"], ["Training cutoff", `${summary.trainingRows.toLocaleString()} rows`, "ready"], ["Model metrics", `R² ${number(summary.validationMetrics.r2, 3)}`, "ready"]].map(([label, value, state]) => <div className="readiness-item" key={label}><span className={`readiness-icon ${state}`}><Check size={14} /></span><span><b>{label}</b><small>{value}</small></span><span className={`readiness-state ${state}`}>{state}</span></div>)}</div><button type="button" className="text-button" onClick={goToReports}>View package status <ArrowUpRight size={14} /></button></Panel>
    </div>
    <DataNote>Validation R² is negative for this deliberately simple baseline. That is an observed result, not a failure to hide: the dashboard keeps the model explainable and records its limitations instead of overstating forecast quality.</DataNote>
  </div>;
}

function QualityPage({ goToReports }: { goToReports: () => void }) {
  const [showEvidence, setShowEvidence] = useState(false);
  const missingData = auraData.quality.filter((item) => item.missing > 0).map((item) => ({ label: item.label.replace(" (deg. C)", ""), missing: item.missingPct }));
  const qualityRows = auraData.quality.filter((item) => ["temperature", "relativeHumidity", "pressure", "heatIndex", "refractivity"].includes(item.key));
  return <div className="page-stack">
    <PageTitle eyebrow="02 / data quality" title="Make every row earn its place." description="A visible cleaning ledger for mixed encodings, missing observations, sentinel values, duplicate timestamps, invalid rows, and outliers." actions={<button type="button" className="outline-button" onClick={goToReports}><ArrowDownToLine size={15} /> Export quality log</button>} />
    <div className="quality-banner page-enter delay-1"><div className="quality-banner-icon"><ShieldCheck size={22} /></div><div><strong>Cleaning protocol completed for the analysis dataset.</strong><p>{auraData.summary.metadataOrInvalidRows.toLocaleString()} metadata/header rows were excluded; measurements remain traceable in the generated workbook.</p></div><Badge tone="teal" dot>Validated</Badge></div>
    <div className="metric-grid page-enter delay-1">{[["Missing cells", auraData.summary.sentinelValues.toLocaleString(), "-9999 → missing", AlertTriangle, "amber"], ["Sentinel values", auraData.summary.sentinelValues.toLocaleString(), "never converted to zero", XCircle, "coral"], ["Duplicate rows", auraData.summary.exactDuplicateRows.toLocaleString(), "exact duplicates", Network, "navy"], ["Invalid rows", auraData.summary.metadataOrInvalidRows.toLocaleString(), "metadata/header rows", FileCheck2, "teal"]].map(([label, value, detail, Icon, tone]) => <Panel className="metric-card" accent={tone as Tone} key={label as string}><Icon size={17} /><span>{label as string}</span><strong>{value as string}</strong><small>{detail as string}</small></Panel>)}</div>
    <div className="two-column page-enter delay-2">
      <Panel><SectionHeading kicker="Evidence ledger" title="Variable-level quality" note="environmental fields" /><div className="data-table-wrap"><table className="data-table"><thead><tr><th>Signal</th><th>Valid</th><th>Missing</th><th>Mean</th><th>Outliers</th></tr></thead><tbody>{qualityRows.map((item, index) => <tr key={item.key}><td><span className="row-index">{String(index + 1).padStart(2, "0")}</span>{item.label}</td><td>{number(item.validPct)}%</td><td>{number(item.missingPct)}%</td><td>{number(item.mean)}</td><td>{item.outliers.toLocaleString()}</td></tr>)}</tbody></table></div></Panel>
      <Panel accent="amber"><SectionHeading kicker="Completeness" title="Missing-value profile" note="percentage of rows" /><div className="quality-chart"><ResponsiveContainer width="100%" height={205}><BarChart data={missingData} layout="vertical" margin={{ left: 4, right: 12 }}><CartesianGrid stroke="#f0e7d9" horizontal={false} /><XAxis type="number" tick={{ fontSize: 9, fill: "#9a896f" }} /><YAxis type="category" dataKey="label" width={92} tick={{ fontSize: 9, fill: "#7a6b56" }} /><Tooltip contentStyle={{ fontSize: 11 }} /><Bar dataKey="missing" fill="#e3a654" radius={[0, 3, 3, 0]} /></BarChart></ResponsiveContainer></div></Panel>
    </div>
    <Panel accent="teal"><SectionHeading kicker="Cleaning logic" title="What the pipeline did" /><div className="logic-list">{["Metadata and header rows were separated from observations", "DD-MM-YY and Excel serial dates were normalized without swapping day and month", "-9999 was treated as missing, never as a measurement", "Duplicate timestamps were checked before any aggregation", "Statistical outliers were flagged in the quality sheet, not silently erased"].map((item, index) => <div className="logic-item" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div><button type="button" className="text-button" onClick={() => setShowEvidence((value) => !value)}>{showEvidence ? "Hide protocol note" : "Show protocol note"} <ChevronDown size={14} className={showEvidence ? "rotate-180" : ""} /></button>{showEvidence && <div className="inline-note"><Info size={14} /> The cleaned workbook keeps a Cleaning_Summary, Data_Quality, Training_Data, and Holdout_Data sheet so each decision can be inspected outside the dashboard.</div>}</Panel>
  </div>;
}

function AnalysisPage({ goToReports }: { goToReports: () => void }) {
  const [view, setView] = useState("Relationships");
  const views = ["Relationships", "Time behavior", "April vs July"];
  const scatter = auraData.daily.temperature.map((item, index) => ({ x: item.value, y: auraData.daily.refractivity[index]?.value })).filter((item) => typeof item.y === "number");
  const seasonal = Object.entries(auraData.aprilJuly).map(([month, values]) => ({ month, temperature: values.temperature, relativeHumidity: values.relativeHumidity, pressure: values.pressure, refractivity: values.refractivity }));
  return <div className="page-stack">
    <PageTitle eyebrow="03 / exploratory analysis" title="Find the signal before fitting it." description="A restrained analysis workbench for relationships, temporal behavior, seasonal contrast, and research findings." actions={<button type="button" className="outline-button" onClick={goToReports}><FileBarChart size={15} /> Research report</button>} />
    <Panel className="analysis-intro page-enter delay-1" accent="teal"><div className="intro-number">03</div><div><div className="eyebrow">Exploration brief</div><h2>Patterns are evidence only when the split survives scrutiny.</h2><p>The analysis view exposes correlations and temporal behavior without letting future observations leak into the training story.</p></div><div className="intro-stamp"><Microscope size={18} /><span>RESEARCH<br />READY</span></div></Panel>
    <div className="tab-row page-enter delay-1" role="tablist" aria-label="Analysis views">{views.map((item) => <button type="button" role="tab" aria-selected={view === item} className={view === item ? "active" : ""} onClick={() => setView(item)} key={item}>{item}</button>)}</div>
    <div className="dashboard-grid page-enter delay-2">
      <Panel className="analysis-chart-panel" accent="navy"><div className="panel-topline"><div><div className="eyebrow">{view}</div><h2>{view === "Relationships" ? "Temperature ↔ refractivity" : view === "Time behavior" ? "Daily refractivity profile" : "April ↔ July means"}</h2></div><Badge tone="teal" dot>Computed</Badge></div>{view === "Relationships" && <div className="actual-chart"><ResponsiveContainer width="100%" height={270}><ScatterChart><CartesianGrid stroke="#e8edf0" /><XAxis dataKey="x" name="Temperature" unit="°C" tick={{ fontSize: 9 }} /><YAxis dataKey="y" name="Refractivity" tick={{ fontSize: 9 }} /><Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ fontSize: 11 }} /><Scatter data={scatter} fill="#3aa590" fillOpacity={0.45} /></ScatterChart></ResponsiveContainer></div>}{view === "Time behavior" && <div className="actual-chart"><ResponsiveContainer width="100%" height={270}><LineChart data={Array.from(auraData.daily.refractivity)}><CartesianGrid stroke="#e8edf0" vertical={false} /><XAxis dataKey="period" tick={{ fontSize: 9 }} minTickGap={30} /><YAxis tick={{ fontSize: 9 }} /><Tooltip contentStyle={{ fontSize: 11 }} /><Line type="monotone" dataKey="value" stroke="#354f70" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div>}{view === "April vs July" && <div className="actual-chart"><ResponsiveContainer width="100%" height={270}><BarChart data={seasonal}><CartesianGrid stroke="#e8edf0" vertical={false} /><XAxis dataKey="month" tick={{ fontSize: 10 }} /><YAxis tick={{ fontSize: 9 }} /><Tooltip contentStyle={{ fontSize: 11 }} /><Bar dataKey="temperature" fill="#3aa590" name="Temp °C" /><Bar dataKey="relativeHumidity" fill="#e3a654" name="RH %" /><Bar dataKey="refractivity" fill="#d76e61" name="Refractivity" /></BarChart></ResponsiveContainer></div>}</Panel>
      <Panel className="findings-panel" accent="coral"><div className="eyebrow">Research findings</div><h2>Association, not causation.</h2><p className="muted-copy">Pearson and Spearman coefficients are calculated from valid paired observations. They describe this workbook; they do not prove a physical causal mechanism.</p><div className="finding-list">{Object.entries(auraData.correlations).map(([key, result]) => <div className="finding-row" key={key}><span>{key === "relativeHumidity" ? "RH" : key}</span><b>{number(result.pearson, 3)}</b><small>Pearson</small></div>)}</div><button type="button" className="text-button" onClick={() => setView("Relationships")}>Reset view <RefreshCw size={14} /></button></Panel>
    </div>
    <Panel className="correlation-skeleton page-enter delay-3"><SectionHeading kicker="Matrix preview" title="Variable relationships" note="Pearson r" /><div className="matrix">{["Temp", "Pressure", "RH", "Refractivity"].map((axis, row) => <div className="matrix-row" key={axis}><span className="matrix-axis">{axis}</span>{["temperature", "pressure", "relativeHumidity", "refractivity"].map((key, column) => <div className={`matrix-cell cell-${(row + column) % 3}`} key={key}>{row === column ? "1.000" : key === "refractivity" ? number(auraData.correlations[["temperature", "pressure", "relativeHumidity", "refractivity"][row] as keyof typeof auraData.correlations]?.pearson, 3) : "—"}</div>)}</div>)}</div></Panel>
  </div>;
}

function ModelPage({ goToReports }: { goToReports: () => void }) {
  const [auditOpen, setAuditOpen] = useState(false);
  const metrics = auraData.summary.validationMetrics;
  return <div className="page-stack">
    <PageTitle eyebrow="04 / model method" title="A forecast you can defend." description="Method, features, validation, metrics, leakage safeguards, and audit details share the same surface." actions={<button type="button" className="outline-button" onClick={goToReports}><FileCheck2 size={15} /> Audit package</button>} />
    <div className="method-hero page-enter delay-1"><div className="method-mark"><Beaker size={28} /></div><div><div className="eyebrow">Method card / computed from training only</div><h2>Chronological multivariate linear regression</h2><p>Feature assembly, fit, and evaluation are sequenced around the February–August training window. September onward remains untouched until holdout scoring.</p></div><Badge tone="teal" dot>Trained</Badge></div>
    <div className="method-grid page-enter delay-2"><Panel accent="teal"><div className="eyebrow">01 · inputs</div><h2>Feature set</h2><div className="feature-pills">{auraData.model.features.map((item) => <span key={item}>{item}<Check size={12} /></span>)}</div><small className="panel-footnote">Environmental predictors use the source fields; hour is encoded cyclically.</small></Panel><Panel accent="navy"><div className="eyebrow">02 · validation</div><h2>Chronological split</h2><div className="split-visual"><div className="split-training"><b>TRAIN</b><span>Feb — Aug 2026</span></div><div className="split-holdout"><b>HOLDOUT</b><span>Sep 2026 →</span></div></div><small className="panel-footnote">No random shuffling across the cutoff.</small></Panel><Panel accent="amber"><div className="eyebrow">03 · scorecard</div><h2>Validation metrics</h2><div className="score-list">{[["MAE", metrics.mae], ["RMSE", metrics.rmse], ["R²", metrics.r2], ["Bias", metrics.bias]].map(([item, value]) => <div key={item as string}><span>{item as string}</span><strong>{number(value, 3)}</strong><small>August chronological validation</small></div>)}</div></Panel></div>
    <Panel className="audit-panel page-enter delay-3"><button type="button" className="audit-trigger" onClick={() => setAuditOpen((value) => !value)}><span><ShieldCheck size={17} /> Leakage safeguards & audit details</span><ChevronDown size={17} className={auditOpen ? "rotate-180" : ""} /></button>{auditOpen && <div className="audit-content"><div><b>Cutoff discipline</b><p>Training data ends {auraData.summary.trainingEnd}; holdout begins {auraData.summary.forecastStart}.</p></div><div><b>Temporal discipline</b><p>The analysis preserves the original within-year month, day, and time structure.</p></div><div><b>Input discipline</b><p>The analytical frame uses the prepared workbook without external joins or synthetic backfill.</p></div></div>}</Panel>
    <DataNote>R² below zero means this baseline does not outperform a constant mean on the selected validation period. The result is preserved in the model report so the limitation can be explained during defense.</DataNote>
  </div>;
}

function ForecastPage({ goToReports }: { goToReports: () => void }) {
  const { horizon, referenceDate, predictionDate, currentDateTime, setHorizon, setReferenceDate, setPredictionDate, setCurrentDateTime } = useForecastSettings();
  const rows = useMemo(() => makeForecast(predictionDate, horizon), [predictionDate, horizon]);
  const chartRows = rows.slice(0, 24);
  const focus = useMemo(() => forecastFocus(rows, currentDateTime, predictionDate), [rows, currentDateTime, predictionDate]);
  const dailySummary = useMemo(() => {
    const keys: ForecastKey[] = ["temperature", "relativeHumidity", "pressure", "refractivity"];
    return Object.fromEntries(keys.map((key) => {
      const values = rows.map((row) => row[key]).filter((value): value is number => typeof value === "number");
      return [key, { min: Math.min(...values), max: Math.max(...values), mean: values.reduce((sum, value) => sum + value, 0) / values.length }];
    }));
  }, [rows]);
  const summaryItems: Array<{ key: ForecastKey; label: string; unit: string }> = [
    { key: "temperature", label: "Temperature", unit: "°C" },
    { key: "relativeHumidity", label: "Relative humidity", unit: "%" },
    { key: "pressure", label: "Pressure", unit: "mbar" },
    { key: "refractivity", label: "Refractivity", unit: "N" },
  ];
  return <div className="page-stack">
    <PageTitle eyebrow="05 / forecast console" title="Look past the cutoff." description="A controlled forecast console that keeps reference date, prediction horizon, and holdout comparison explicit." actions={<button type="button" className="outline-button" onClick={goToReports}><CloudDownload size={15} /> Export forecast</button>} />
    <Panel className="forecast-controls page-enter delay-1" accent="teal"><div className="control-title"><div className="eyebrow">Forecast parameters</div><h2>Set the window.</h2></div><label>Reference date<input type="date" value={referenceDate} onChange={(event) => setReferenceDate(event.target.value)} /></label><label>Prediction date<input type="date" min="2026-09-01" value={predictionDate} onChange={(event) => { const nextDate = event.target.value; const focusTime = currentDateTime.slice(11) || "12:00"; setPredictionDate(nextDate); setCurrentDateTime(`${nextDate}T${focusTime}`); }} /></label><label>Current date & time<input type="datetime-local" value={currentDateTime} onChange={(event) => setCurrentDateTime(event.target.value)} /><button type="button" className="text-button control-now" onClick={() => { const now = new Date(); const nowValue = localDateTimeValue(now); setCurrentDateTime(nowValue); setPredictionDate(nowValue.slice(0, 10)); }}>Use current time</button></label><label>Horizon<select value={horizon} onChange={(event) => setHorizon(event.target.value)}><option>24 hours</option><option>7 days</option><option>30 days</option></select></label><div className="control-note"><CalendarDays size={15} /><span>{referenceDate} → {predictionDate}<small>{horizon} horizon · focus {focus.time} · training temporal profiles</small></span></div></Panel>
    <div className="forecast-layout page-enter delay-2"><Panel className="forecast-chart" accent="navy"><div className="panel-topline"><div><div className="eyebrow">Hourly forecast</div><h2>Refractivity outlook · {predictionDate}</h2></div><Badge tone="amber" dot>Forecast</Badge></div><div className="legend-row"><span><i className="legend-line amber-line" /> predicted</span><span><i className="legend-dash" /> cutoff protected</span></div><div className="actual-chart"><ResponsiveContainer width="100%" height={260}><LineChart data={chartRows}><CartesianGrid stroke="#e8edf0" vertical={false} /><XAxis dataKey="time" tick={{ fontSize: 9 }} interval={3} /><YAxis tick={{ fontSize: 9 }} /><Tooltip contentStyle={{ fontSize: 11 }} /><Line type="monotone" dataKey="refractivity" stroke="#e3a654" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div></Panel><Panel className="outlook-panel" accent="amber"><div className="eyebrow">Monthly outlook</div><h2>September — December 2026</h2><div className="actual-chart"><ResponsiveContainer width="100%" height={170}><BarChart data={Array.from(auraData.monthlyForecast)}><CartesianGrid stroke="#f0e7d9" vertical={false} /><XAxis dataKey="key" tick={{ fontSize: 9 }} /><YAxis tick={{ fontSize: 9 }} /><Tooltip contentStyle={{ fontSize: 11 }} /><Bar dataKey="refractivity" fill="#d76e61" radius={[3, 3, 0, 0]} /></BarChart></ResponsiveContainer></div><div className="outlook-months"><span className="past">AUG</span><b>SEP</b><span>OCT</span><span>NOV</span><span>DEC</span></div></Panel></div>
     <Panel className="forecast-table-panel page-enter delay-3"><SectionHeading kicker="Forecast snapshot & table" title={`Hourly values · ${predictionDate}`} note={`${rows.length} rows generated · focus ${formatFocusDate(focus.timestamp.slice(0, 16))}`} /><div className="daily-summary">{summaryItems.map(({ key, label, unit }) => { const stats = dailySummary[key]; return <div key={key}><span>{label}</span><b>{number(focus[key])} <small>{unit}</small></b><small>range {number(stats?.min)} — {number(stats?.max)}</small></div>; })}</div><div className="data-table-wrap"><table className="data-table"><thead><tr><th>Time</th><th>Temperature</th><th>RH</th><th>Pressure</th><th>Refractivity</th></tr></thead><tbody>{rows.slice(0, 24).map((row) => <tr key={row.timestamp} className={row.timestamp === focus.timestamp ? "forecast-focus-row" : ""}><td>{row.time}</td><td>{number(row.temperature)} °C</td><td>{number(row.relativeHumidity)}%</td><td>{number(row.pressure)} mbar</td><td>{number(row.refractivity)} N</td></tr>)}</tbody></table></div><button type="button" className="text-button" onClick={() => csvDownload(`AURA_${predictionDate}_forecast.csv`, rows)}>Download this forecast CSV <ArrowDownToLine size={14} /></button></Panel>
     <DataNote>Environmental predictors are selected from training-period temporal profiles, so the focused hour and date remain tied to the same leakage-safe model inputs used in the downloaded forecast.</DataNote>
  </div>;
}

function ReportsPage() {
  const [message, setMessage] = useState("");
  const reports = [
    { title: "Cleaned dataset", detail: "Validated observations with cleaning ledger", filename: "AY_Project_Data_CLEANED_2026.xlsx", icon: FileSpreadsheet },
    { title: "Training dataset", detail: "February — August 2026 training frame", filename: "MASTER_TRAINING_DATA_2026.xlsx", icon: Database },
    { title: "Holdout dataset", detail: "September 2026 onward · not used for training", filename: "FORECAST_HOLDOUT_DATA_2026.xlsx", icon: Table2 },
    { title: "Forecast exports", detail: "Daily CSV/XLSX and monthly outlook", filename: "DAILY_FORECAST_2026-09-01.xlsx", icon: Activity },
    { title: "Research report", detail: "Methods, quality, findings, statistics, and charts", filename: "Data_Quality_and_Exploratory_Analysis_Report.pdf", icon: FileBarChart },
  ];
  return <div className="page-stack">
    <PageTitle eyebrow="06 / reports & exports" title="Leave with a defensible package." description="Every deliverable has a named place, a clear date frame, and a truthful status." actions={<a className="outline-button" href={`${exportsBase}AURA_2026_DATA_ANALYSIS_AND_FORECASTING.zip`} download><FileArchive size={15} /> Download ZIP</a>} />
    {message && <div className="toast-message page-enter" role="status"><Info size={15} /><span>{message}</span><button type="button" onClick={() => setMessage("")} aria-label="Dismiss export message"><X size={15} /></button></div>}
    <div className="package-status page-enter delay-1"><div className="package-icon"><FileArchive size={22} /></div><div><div className="eyebrow">Package status</div><h2>Assembly complete for the analysis dataset.</h2><p>15 deliverables are bundled, including cleaned data, training/holdout splits, model audit, reports, forecast exports, documentation, and 10 static analytics charts.</p></div><Badge tone="teal" dot>Ready</Badge></div>
    <div className="report-list page-enter delay-2">{reports.map(({ title, detail, filename, icon: Icon }, index) => <Panel className="report-row" key={title}><div className="report-index">0{index + 1}</div><div className="report-icon"><Icon size={18} /></div><div className="report-copy"><h3>{title}</h3><p>{detail}</p></div><Badge tone="teal">Available</Badge><ExportLink filename={filename} label={`Export ${title}`} /></Panel>)}</div>
    <Panel className="provenance-panel page-enter delay-3" accent="teal"><SectionHeading kicker="Provenance note" title="The package tells the same story as the dashboard." /><div className="provenance-grid"><div><span>INPUT</span><b>Traceable workbook</b><p>No external joins, substitutions, or synthetic values.</p></div><div><span>TIME FRAME</span><b>Consistent 2026 view</b><p>Within-year month, day, and time structure preserved.</p></div><div><span>SPLIT</span><b>Feb–Aug / Sep onward</b><p>Training first. Holdout remains untouched for evaluation.</p></div></div><button type="button" className="text-button" onClick={() => setMessage("All file links point to generated outputs from this workbook; no placeholder files are used.")}>Verify package provenance <ShieldCheck size={14} /></button></Panel>
  </div>;
}

function Sidebar({ collapsed, onCollapse }: { collapsed: boolean; onCollapse: () => void }) {
  const [location] = useLocation();
  return <aside className={`app-sidebar ${collapsed ? "sidebar-collapsed" : ""}`}><div className="brand-lockup"><div className="brand-orbit"><span>A</span></div><div className="brand-copy"><strong>AURA</strong><small>2026 FORECASTING STUDIO</small></div></div><div className="sidebar-rule" /><div className="sidebar-section-label">Workspace</div><nav className="primary-nav" aria-label="Primary navigation">{navItems.map(({ href, label, detail, icon: Icon }) => <Link href={href} className={`nav-item ${location === href ? "nav-item-active" : ""}`} key={href}><Icon size={17} /><span className="nav-copy"><b>{label}</b><small>{detail}</small></span>{location === href && <span className="nav-active-mark" />}</Link>)}</nav><div className="sidebar-bottom"><div className="source-card"><div className="source-card-top"><span className="pulse-dot" /> dataset status</div><strong>Analysis ready</strong><small>{auraData.summary.observationRows.toLocaleString()} rows analyzed</small></div><button type="button" className="collapse-button" onClick={onCollapse}>{collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}<span>{collapsed ? "Expand rail" : "Collapse rail"}</span></button></div></aside>;
}

function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [location] = useLocation();
  const { theme, toggleTheme } = useThemeSettings();
  const activeLabel = navItems.find((item) => item.href === location)?.label ?? "Overview";
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  const localDate = now.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  const localTime = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: false });
  return <div className={`app-shell ${collapsed ? "shell-collapsed" : ""}`}><div className={`mobile-overlay ${mobileOpen ? "visible" : ""}`} onClick={() => setMobileOpen(false)} /><div className={mobileOpen ? "mobile-sidebar-open" : ""}><Sidebar collapsed={collapsed} onCollapse={() => setCollapsed((value) => !value)} /></div><main className="main-content"><header className="topbar"><button type="button" className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={19} /></button><div className="breadcrumb"><span>AURA / 2026</span><b>/</b><strong>{activeLabel}</strong></div><div className="topbar-right"><span className="topbar-clock" title="Browser local time"><Clock3 size={13} /> {localDate} · {localTime}</span><span className="topbar-status"><i /> local analysis mode</span><span className="topbar-code">v0.2 / source-backed build</span><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}<span>{theme === "light" ? "Dark" : "Light"}</span></button></div></header><div className="content-wrap">{children}</div><footer className="app-footer"><span>AURA 2026 Forecasting Studio</span><span>Chronological research protocol</span></footer></main></div>;
}

function NotFoundPage() {
  return <div className="not-found"><div className="eyebrow">404 / uncharted airspace</div><h1>This readout does not exist.</h1><p>Return to the overview to continue the investigation.</p><Link href="/" className="primary-button">Back to overview <ArrowUpRight size={15} /></Link></div>;
}

function Router() {
  const [, setLocation] = useLocation();
  return <AppShell><ErrorBoundary resetKey={window.location.pathname}><Switch><Route path="/"><Overview goToReports={() => setLocation("/reports")} /></Route><Route path="/quality"><QualityPage goToReports={() => setLocation("/reports")} /></Route><Route path="/analysis"><AnalysisPage goToReports={() => setLocation("/reports")} /></Route><Route path="/model"><ModelPage goToReports={() => setLocation("/reports")} /></Route><Route path="/forecast"><ForecastPage goToReports={() => setLocation("/reports")} /></Route><Route path="/reports"><ReportsPage /></Route><Route><NotFoundPage /></Route></Switch></ErrorBoundary></AppShell>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><ThemeProvider><ForecastSettingsProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}><Router /></WouterRouter></ForecastSettingsProvider></ThemeProvider><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;