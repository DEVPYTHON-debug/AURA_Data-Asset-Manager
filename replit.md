# AURA 2026 Forecasting Studio

A research-ready environmental data analysis and refractivity forecasting dashboard with cleaning, chronological model evaluation, forecasts, reports, and downloadable research outputs.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/aura-forecast run dev` — run the AURA dashboard
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/aura-forecast run typecheck` — typecheck the AURA dashboard
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/aura-forecast run build` — build the AURA static bundle
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string for the shared API

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- AURA frontend: React, Vite, Recharts, Wouter, and static generated analysis data

## Where things live

- `artifacts/aura-forecast/src/App.tsx` — AURA routes, dashboard states, charts, forecast controls, and export center
- `artifacts/aura-forecast/src/index.css` — AURA visual system and responsive layout
- `artifacts/aura-forecast/src/data/auraData.ts` — generated analysis module used by the frontend
- `scripts/aura_pipeline.py` — reproducible workbook parsing, cleaning, model, forecast, and report pipeline
- `artifacts/aura-forecast/public/exports/` — generated research outputs
- `vercel.json` — Vercel build/output/SPA configuration

## Architecture decisions

- The supplied workbook is the only analytical input; no external weather feed or synthetic training data is used.
- Observation records are normalized into a consistent 2026 analysis frame while preserving within-year time structure.
- February–August 2026 is used for training, with September 2026 onward preserved as holdout data.
- The baseline is chronological multivariate linear regression with hour-of-day climatology for future environmental predictors.
- The frontend is static and bundles the generated analysis module and research exports; no database or runtime API is required.

## Product

- Overview of observations, target signal, readiness, and daily measured refractivity
- Data-quality ledger for invalid rows, sentinel values, missingness, duplicates, and outliers
- Exploratory relationship, temporal, and seasonal analysis
- Model method, feature, validation, and leakage-audit views
- Interactive daily, seven-day, and 30-day refractivity forecast controls
- Report center with Excel, CSV, PDF, and ZIP exports

## User preferences

- Keep the visual language polished, restrained, and research-oriented.
- Avoid exposing unnecessary provenance or calendar transformation details in prominent UI copy.

## Gotchas

- Vite defaults `PORT` and `BASE_PATH` for external static builds, while Replit injects them for the managed workflow.
- Vercel imports should run from the repository root using `vercel.json`.
- The research export package is large; if Vercel asset limits reject deployment, move only large downloads to object storage and update the report links.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
- See `VERCEL_DEPLOYMENT.md` for the external deployment settings and asset caveat.