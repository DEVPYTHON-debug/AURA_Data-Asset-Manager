# AURA 2026 — Vercel deployment

## Import settings

Import the repository at its root. The checked-in `vercel.json` already defines:

- Framework: Vite
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm --filter @workspace/aura-forecast run build`
- Output directory: `artifacts/aura-forecast/dist/public`
- SPA rewrites for the Wouter routes

No environment variables are required for the static dashboard build. The Vite configuration defaults to the root path and local port when Vercel does not provide Replit runtime variables.

## Local production check

```bash
pnpm --filter @workspace/aura-forecast run typecheck
pnpm --filter @workspace/aura-forecast run build
```

The generated site is written to `artifacts/aura-forecast/dist/public`.

## Large export assets

The dashboard includes the full research package under `artifacts/aura-forecast/public/exports/`, including multi-megabyte XLSX/CSV files and the ZIP archive. If a Vercel project rejects the deployment because of static asset size limits, keep the dashboard deployment unchanged and move only the large download files to a durable object/file host. Then replace the corresponding `href` values in `src/App.tsx` with those hosted URLs. Do not remove the files from the research package without updating the report center.