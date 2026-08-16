# AURA data pipeline

1. Read the supplied workbook sheet.
2. Parse DD-MM-YY, DD/MM/YY, and Excel serial dates without swapping day and month.
3. Remove metadata/header rows only when no valid date is present.
4. Convert -9999 to missing and retain the affected record.
5. Present the observation timeline in the 2026 analysis frame while preserving month/day/time.
6. Split chronologically: February-August training; September onward holdout.
7. Fit regression coefficients on training rows only; use a chronological August validation slice.
8. Use training-period hour-of-day climatology for future environmental predictors.
