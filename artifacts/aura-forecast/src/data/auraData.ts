export const auraData = {
  "summary": {
    "sourceFile": "AY_Project_Data_1786812502784.xlsx",
    "sourceRows": 289817,
    "observationRows": 286696,
    "metadataOrInvalidRows": 3121,
    "blankRows": 580,
    "invalidDateRows": 2541,
    "invalidTimeRows": 0,
    "exactDuplicateRows": 0,
    "duplicateTimestamps": 0,
    "conflictingTimestamps": 0,
    "sentinelValues": 405634,
    "sentinelByField": {
      "satellitesUsed": 277649,
      "satellitesVisible": 127928,
      "accuracy": 42,
      "altitude": 15
    },
    "dateMin": "2026-01-03 00:00:26",
    "dateMax": "2026-12-09 23:57:23",
    "originalYear": 2022,
    "convertedYear": 2026,
    "trainingStart": "2026-02-03 00:00:25",
    "trainingEnd": "2026-08-31 23:57:21",
    "trainingRows": 202965,
    "holdoutRows": 74021,
    "validationStart": "2026-08-03 00:00:18",
    "validationEnd": "2026-08-31 23:57:21",
    "forecastStart": "2026-09-01 00:00:00",
    "target": "refractivity",
    "modelType": "Chronological multivariate linear regression",
    "modelFeatureCount": 6,
    "modelFitRows": 78838,
    "validationMetrics": {
      "mae": 26.136164,
      "rmse": 31.693458,
      "r2": -4.695695,
      "bias": -23.726993,
      "mape": 7.119203,
      "n": 58217
    },
    "dateShiftNote": "All records are presented in a consistent 2026 analysis frame with their within-year time structure preserved."
  },
  "columns": [
    {
      "key": "signalQuality",
      "label": "Signal Quality",
      "unit": "count"
    },
    {
      "key": "signalStrength",
      "label": "Signal Strength (dBm)",
      "unit": "dBm"
    },
    {
      "key": "satellitesVisible",
      "label": "Sat. View",
      "unit": "count"
    },
    {
      "key": "satellitesUsed",
      "label": "Sat. Used",
      "unit": "count"
    },
    {
      "key": "latitude",
      "label": "Lat. (deg.)",
      "unit": "deg."
    },
    {
      "key": "longitude",
      "label": "Long. (deg.)",
      "unit": "deg."
    },
    {
      "key": "altitude",
      "label": "Altitude (m)",
      "unit": "m"
    },
    {
      "key": "accuracy",
      "label": "Accuracy",
      "unit": "m"
    },
    {
      "key": "temperature",
      "label": "Temp. (deg. C)",
      "unit": "°C"
    },
    {
      "key": "relativeHumidity",
      "label": "RH (%)",
      "unit": "%"
    },
    {
      "key": "pressure",
      "label": "Pressure (mbar)",
      "unit": "mbar"
    },
    {
      "key": "heatIndex",
      "label": "Heat Index (deg. C)",
      "unit": "°C"
    },
    {
      "key": "refractivity",
      "label": "Refractivity",
      "unit": "N-units"
    },
    {
      "key": "batteryLevel",
      "label": "Battery level (%)",
      "unit": "%"
    }
  ],
  "quality": [
    {
      "key": "signalQuality",
      "label": "Signal Quality",
      "unit": "count",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 0.0,
      "max": 26.0,
      "mean": 11.047207,
      "median": 11.0,
      "std": 2.128739,
      "variance": 4.53153,
      "q1": 10.0,
      "q3": 12.0,
      "iqr": 2.0,
      "outliers": 10350
    },
    {
      "key": "signalStrength",
      "label": "Signal Strength (dBm)",
      "unit": "dBm",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": -115.0,
      "max": -62.0,
      "mean": -91.90551,
      "median": -92.0,
      "std": 4.257128,
      "variance": 18.123135,
      "q1": -94.0,
      "q3": -90.0,
      "iqr": 4.0,
      "outliers": 10350
    },
    {
      "key": "satellitesVisible",
      "label": "Sat. View",
      "unit": "count",
      "observations": 286696,
      "valid": 158768,
      "missing": 127928,
      "missingPct": 44.621,
      "validPct": 55.379,
      "invalid": 0,
      "min": 3.0,
      "max": 16.0,
      "mean": 8.008919,
      "median": 8.0,
      "std": 2.041418,
      "variance": 4.167386,
      "q1": 7.0,
      "q3": 9.0,
      "iqr": 2.0,
      "outliers": 2452
    },
    {
      "key": "satellitesUsed",
      "label": "Sat. Used",
      "unit": "count",
      "observations": 286696,
      "valid": 9047,
      "missing": 277649,
      "missingPct": 96.844,
      "validPct": 3.156,
      "invalid": 0,
      "min": 3.0,
      "max": 46.0,
      "mean": 7.587488,
      "median": 8.0,
      "std": 2.051797,
      "variance": 4.209872,
      "q1": 6.0,
      "q3": 9.0,
      "iqr": 3.0,
      "outliers": 2
    },
    {
      "key": "latitude",
      "label": "Lat. (deg.)",
      "unit": "deg.",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": -27.335463,
      "max": 7.376563,
      "mean": 7.298694,
      "median": 7.298822,
      "std": 0.064684,
      "variance": 0.004184,
      "q1": 7.298755,
      "q3": 7.298882,
      "iqr": 0.000127,
      "outliers": 16544
    },
    {
      "key": "longitude",
      "label": "Long. (deg.)",
      "unit": "deg.",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": -18.063744,
      "max": 5.190587,
      "mean": 5.13411,
      "median": 5.134193,
      "std": 0.043373,
      "variance": 0.001881,
      "q1": 5.134143,
      "q3": 5.134243,
      "iqr": 0.0001,
      "outliers": 15467
    },
    {
      "key": "altitude",
      "label": "Altitude (m)",
      "unit": "m",
      "observations": 286696,
      "valid": 286681,
      "missing": 15,
      "missingPct": 0.005,
      "validPct": 99.995,
      "invalid": 0,
      "min": -1045.4,
      "max": 2826.6,
      "mean": 384.407665,
      "median": 385.4,
      "std": 30.027146,
      "variance": 901.629509,
      "q1": 372.3,
      "q3": 398.5,
      "iqr": 26.2,
      "outliers": 14892
    },
    {
      "key": "accuracy",
      "label": "Accuracy",
      "unit": "m",
      "observations": 286696,
      "valid": 286654,
      "missing": 42,
      "missingPct": 0.015,
      "validPct": 99.985,
      "invalid": 0,
      "min": 0.0,
      "max": 611.1,
      "mean": 2.291839,
      "median": 1.1,
      "std": 9.257896,
      "variance": 85.708643,
      "q1": 0.9,
      "q3": 1.3,
      "iqr": 0.4,
      "outliers": 24945
    },
    {
      "key": "temperature",
      "label": "Temp. (deg. C)",
      "unit": "°C",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 20.0,
      "max": 46.0,
      "mean": 26.12947,
      "median": 25.98,
      "std": 2.476401,
      "variance": 6.132563,
      "q1": 24.11,
      "q3": 27.78,
      "iqr": 3.67,
      "outliers": 1802
    },
    {
      "key": "relativeHumidity",
      "label": "RH (%)",
      "unit": "%",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 1.0,
      "max": 99.75,
      "mean": 69.139404,
      "median": 75.94,
      "std": 20.510107,
      "variance": 420.664483,
      "q1": 60.0,
      "q3": 83.18,
      "iqr": 23.18,
      "outliers": 17185
    },
    {
      "key": "pressure",
      "label": "Pressure (mbar)",
      "unit": "mbar",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 962.27,
      "max": 975.21,
      "mean": 969.941554,
      "median": 970.15,
      "std": 2.199068,
      "variance": 4.835902,
      "q1": 968.53,
      "q3": 971.54,
      "iqr": 3.01,
      "outliers": 1633
    },
    {
      "key": "heatIndex",
      "label": "Heat Index (deg. C)",
      "unit": "°C",
      "observations": 286696,
      "valid": 99757,
      "missing": 186939,
      "missingPct": 65.205,
      "validPct": 34.795,
      "invalid": 0,
      "min": 19.65,
      "max": 39.6,
      "mean": 24.743328,
      "median": 24.26,
      "std": 2.180761,
      "variance": 4.75572,
      "q1": 23.1,
      "q3": 26.04,
      "iqr": 2.94,
      "outliers": 1139
    },
    {
      "key": "refractivity",
      "label": "Refractivity",
      "unit": "N-units",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 238.94,
      "max": 379.63,
      "mean": 348.4803,
      "median": 365.63,
      "std": 29.857886,
      "variance": 891.493359,
      "q1": 329.13,
      "q3": 368.5,
      "iqr": 39.37,
      "outliers": 12579
    },
    {
      "key": "batteryLevel",
      "label": "Battery level (%)",
      "unit": "%",
      "observations": 286696,
      "valid": 286696,
      "missing": 0,
      "missingPct": 0.0,
      "validPct": 100.0,
      "invalid": 0,
      "min": 49.0,
      "max": 61.0,
      "mean": 57.756369,
      "median": 58.0,
      "std": 0.43151,
      "variance": 0.186201,
      "q1": 58.0,
      "q3": 58.0,
      "iqr": 0.0,
      "outliers": 69676
    }
  ],
  "correlations": {
    "temperature": {
      "n": 286696,
      "pearson": -0.001822,
      "spearman": 0.257563
    },
    "relativeHumidity": {
      "n": 286696,
      "pearson": 0.94223,
      "spearman": 0.704184
    },
    "pressure": {
      "n": 286696,
      "pearson": 0.704099,
      "spearman": 0.559734
    },
    "heatIndex": {
      "n": 99757,
      "pearson": -0.720896,
      "spearman": -0.619202
    }
  },
  "monthly": {
    "temperature": [
      {
        "period": "2026-01",
        "value": 25.8839,
        "n": 9710
      },
      {
        "period": "2026-02",
        "value": 26.2227,
        "n": 25318
      },
      {
        "period": "2026-03",
        "value": 25.7595,
        "n": 39533
      },
      {
        "period": "2026-04",
        "value": 25.1325,
        "n": 26034
      },
      {
        "period": "2026-05",
        "value": 26.144,
        "n": 7574
      },
      {
        "period": "2026-06",
        "value": 26.7062,
        "n": 10269
      },
      {
        "period": "2026-07",
        "value": 26.6256,
        "n": 36020
      },
      {
        "period": "2026-08",
        "value": 26.3147,
        "n": 58217
      },
      {
        "period": "2026-09",
        "value": 26.8843,
        "n": 47295
      },
      {
        "period": "2026-10",
        "value": 25.225,
        "n": 8942
      },
      {
        "period": "2026-11",
        "value": 25.2242,
        "n": 9276
      },
      {
        "period": "2026-12",
        "value": 24.5663,
        "n": 8508
      }
    ],
    "relativeHumidity": [
      {
        "period": "2026-01",
        "value": 72.8167,
        "n": 9710
      },
      {
        "period": "2026-02",
        "value": 54.7944,
        "n": 25318
      },
      {
        "period": "2026-03",
        "value": 54.4383,
        "n": 39533
      },
      {
        "period": "2026-04",
        "value": 52.0312,
        "n": 26034
      },
      {
        "period": "2026-05",
        "value": 71.1488,
        "n": 7574
      },
      {
        "period": "2026-06",
        "value": 72.3798,
        "n": 10269
      },
      {
        "period": "2026-07",
        "value": 77.897,
        "n": 36020
      },
      {
        "period": "2026-08",
        "value": 79.5549,
        "n": 58217
      },
      {
        "period": "2026-09",
        "value": 76.9927,
        "n": 47295
      },
      {
        "period": "2026-10",
        "value": 66.4347,
        "n": 8942
      },
      {
        "period": "2026-11",
        "value": 67.2018,
        "n": 9276
      },
      {
        "period": "2026-12",
        "value": 75.544,
        "n": 8508
      }
    ],
    "pressure": [
      {
        "period": "2026-01",
        "value": 970.5157,
        "n": 9710
      },
      {
        "period": "2026-02",
        "value": 969.7214,
        "n": 25318
      },
      {
        "period": "2026-03",
        "value": 968.3531,
        "n": 39533
      },
      {
        "period": "2026-04",
        "value": 968.9413,
        "n": 26034
      },
      {
        "period": "2026-05",
        "value": 970.5389,
        "n": 7574
      },
      {
        "period": "2026-06",
        "value": 970.5051,
        "n": 10269
      },
      {
        "period": "2026-07",
        "value": 970.8459,
        "n": 36020
      },
      {
        "period": "2026-08",
        "value": 970.5663,
        "n": 58217
      },
      {
        "period": "2026-09",
        "value": 970.3976,
        "n": 47295
      },
      {
        "period": "2026-10",
        "value": 969.7671,
        "n": 8942
      },
      {
        "period": "2026-11",
        "value": 969.1397,
        "n": 9276
      },
      {
        "period": "2026-12",
        "value": 969.5897,
        "n": 8508
      }
    ],
    "heatIndex": [
      {
        "period": "2026-01",
        "value": 25.5337,
        "n": 2925
      },
      {
        "period": "2026-02",
        "value": 25.5144,
        "n": 17250
      },
      {
        "period": "2026-03",
        "value": 25.0132,
        "n": 31992
      },
      {
        "period": "2026-04",
        "value": 24.3313,
        "n": 21121
      },
      {
        "period": "2026-05",
        "value": 23.8412,
        "n": 2726
      },
      {
        "period": "2026-06",
        "value": 24.3542,
        "n": 2686
      },
      {
        "period": "2026-07",
        "value": 24.668,
        "n": 3063
      },
      {
        "period": "2026-08",
        "value": 24.4941,
        "n": 3083
      },
      {
        "period": "2026-09",
        "value": 24.1748,
        "n": 3656
      },
      {
        "period": "2026-10",
        "value": 23.833,
        "n": 3609
      },
      {
        "period": "2026-11",
        "value": 24.3499,
        "n": 4297
      },
      {
        "period": "2026-12",
        "value": 23.5535,
        "n": 3349
      }
    ],
    "refractivity": [
      {
        "period": "2026-01",
        "value": 350.545,
        "n": 9710
      },
      {
        "period": "2026-02",
        "value": 325.8604,
        "n": 25318
      },
      {
        "period": "2026-03",
        "value": 324.2508,
        "n": 39533
      },
      {
        "period": "2026-04",
        "value": 321.8232,
        "n": 26034
      },
      {
        "period": "2026-05",
        "value": 353.0505,
        "n": 7574
      },
      {
        "period": "2026-06",
        "value": 356.9128,
        "n": 10269
      },
      {
        "period": "2026-07",
        "value": 363.7233,
        "n": 36020
      },
      {
        "period": "2026-08",
        "value": 364.3197,
        "n": 58217
      },
      {
        "period": "2026-09",
        "value": 363.6572,
        "n": 47295
      },
      {
        "period": "2026-10",
        "value": 341.3848,
        "n": 8942
      },
      {
        "period": "2026-11",
        "value": 341.2958,
        "n": 9276
      },
      {
        "period": "2026-12",
        "value": 351.3496,
        "n": 8508
      }
    ]
  },
  "daily": {
    "temperature": [
      {
        "period": "2026-01-03",
        "value": 25.9599,
        "n": 2247
      },
      {
        "period": "2026-01-04",
        "value": 27.1091,
        "n": 678
      },
      {
        "period": "2026-01-08",
        "value": 26.1281,
        "n": 1695
      },
      {
        "period": "2026-01-09",
        "value": 25.2291,
        "n": 2667
      },
      {
        "period": "2026-01-10",
        "value": 26.0204,
        "n": 2423
      },
      {
        "period": "2026-02-03",
        "value": 24.3504,
        "n": 2363
      },
      {
        "period": "2026-02-04",
        "value": 24.817,
        "n": 2087
      },
      {
        "period": "2026-02-08",
        "value": 26.5251,
        "n": 2842
      },
      {
        "period": "2026-02-09",
        "value": 25.3134,
        "n": 2540
      },
      {
        "period": "2026-02-10",
        "value": 27.1227,
        "n": 2686
      },
      {
        "period": "2026-02-20",
        "value": 28.7509,
        "n": 1096
      },
      {
        "period": "2026-02-21",
        "value": 26.0299,
        "n": 2007
      },
      {
        "period": "2026-02-22",
        "value": 26.7351,
        "n": 2322
      },
      {
        "period": "2026-02-23",
        "value": 25.5369,
        "n": 1868
      },
      {
        "period": "2026-02-24",
        "value": 26.8479,
        "n": 2367
      },
      {
        "period": "2026-02-25",
        "value": 25.8037,
        "n": 1365
      },
      {
        "period": "2026-02-26",
        "value": 29.8579,
        "n": 183
      },
      {
        "period": "2026-02-27",
        "value": 24.3977,
        "n": 176
      },
      {
        "period": "2026-02-28",
        "value": 28.2331,
        "n": 1416
      },
      {
        "period": "2026-03-03",
        "value": 26.1033,
        "n": 1288
      },
      {
        "period": "2026-03-04",
        "value": 25.0172,
        "n": 2620
      },
      {
        "period": "2026-03-08",
        "value": 26.9271,
        "n": 2283
      },
      {
        "period": "2026-03-09",
        "value": 25.8907,
        "n": 2678
      },
      {
        "period": "2026-03-10",
        "value": 28.6547,
        "n": 2580
      },
      {
        "period": "2026-03-13",
        "value": 25.5853,
        "n": 1406
      },
      {
        "period": "2026-03-14",
        "value": 24.6143,
        "n": 2183
      },
      {
        "period": "2026-03-15",
        "value": 22.8226,
        "n": 1037
      },
      {
        "period": "2026-03-16",
        "value": 24.9075,
        "n": 1524
      },
      {
        "period": "2026-03-17",
        "value": 25.5896,
        "n": 2144
      },
      {
        "period": "2026-03-18",
        "value": 25.3415,
        "n": 697
      },
      {
        "period": "2026-03-19",
        "value": 24.8896,
        "n": 1649
      },
      {
        "period": "2026-03-20",
        "value": 25.3942,
        "n": 1172
      },
      {
        "period": "2026-03-21",
        "value": 28.7236,
        "n": 825
      },
      {
        "period": "2026-03-22",
        "value": 25.9125,
        "n": 1006
      },
      {
        "period": "2026-03-23",
        "value": 25.1704,
        "n": 1972
      },
      {
        "period": "2026-03-24",
        "value": 24.3628,
        "n": 962
      },
      {
        "period": "2026-03-25",
        "value": 25.3529,
        "n": 1448
      },
      {
        "period": "2026-03-26",
        "value": 25.6777,
        "n": 2001
      },
      {
        "period": "2026-03-27",
        "value": 25.2294,
        "n": 1094
      },
      {
        "period": "2026-03-28",
        "value": 26.3305,
        "n": 2442
      },
      {
        "period": "2026-03-29",
        "value": 25.5162,
        "n": 1819
      },
      {
        "period": "2026-03-30",
        "value": 26.4488,
        "n": 1640
      },
      {
        "period": "2026-03-31",
        "value": 25.5513,
        "n": 1063
      },
      {
        "period": "2026-04-03",
        "value": 24.2393,
        "n": 1843
      },
      {
        "period": "2026-04-04",
        "value": 24.5363,
        "n": 2275
      },
      {
        "period": "2026-04-09",
        "value": 25.882,
        "n": 2754
      },
      {
        "period": "2026-04-10",
        "value": 28.6606,
        "n": 2159
      },
      {
        "period": "2026-04-13",
        "value": 23.6937,
        "n": 1822
      },
      {
        "period": "2026-04-14",
        "value": 24.5484,
        "n": 1944
      },
      {
        "period": "2026-04-15",
        "value": 24.5443,
        "n": 1907
      },
      {
        "period": "2026-04-16",
        "value": 25.1485,
        "n": 1549
      },
      {
        "period": "2026-04-17",
        "value": 24.9593,
        "n": 2311
      },
      {
        "period": "2026-04-18",
        "value": 24.3802,
        "n": 2304
      },
      {
        "period": "2026-04-19",
        "value": 25.28,
        "n": 2075
      },
      {
        "period": "2026-04-20",
        "value": 25.0305,
        "n": 2394
      },
      {
        "period": "2026-04-21",
        "value": 25.4864,
        "n": 697
      },
      {
        "period": "2026-05-03",
        "value": 22.4894,
        "n": 852
      },
      {
        "period": "2026-05-04",
        "value": 24.603,
        "n": 1874
      },
      {
        "period": "2026-05-08",
        "value": 26.7712,
        "n": 459
      },
      {
        "period": "2026-05-09",
        "value": 25.9126,
        "n": 2205
      },
      {
        "period": "2026-05-10",
        "value": 28.9939,
        "n": 2184
      },
      {
        "period": "2026-06-03",
        "value": 24.0024,
        "n": 1698
      },
      {
        "period": "2026-06-04",
        "value": 24.9919,
        "n": 988
      },
      {
        "period": "2026-06-08",
        "value": 26.9799,
        "n": 2660
      },
      {
        "period": "2026-06-09",
        "value": 26.2791,
        "n": 2188
      },
      {
        "period": "2026-06-10",
        "value": 29.0797,
        "n": 2735
      },
      {
        "period": "2026-07-03",
        "value": 25.0399,
        "n": 1779
      },
      {
        "period": "2026-07-04",
        "value": 25.0631,
        "n": 1284
      },
      {
        "period": "2026-07-08",
        "value": 26.9403,
        "n": 1964
      },
      {
        "period": "2026-07-09",
        "value": 27.2749,
        "n": 1850
      },
      {
        "period": "2026-07-10",
        "value": 28.1246,
        "n": 2880
      },
      {
        "period": "2026-07-21",
        "value": 25.9686,
        "n": 1001
      },
      {
        "period": "2026-07-22",
        "value": 25.8071,
        "n": 2078
      },
      {
        "period": "2026-07-23",
        "value": 25.43,
        "n": 2868
      },
      {
        "period": "2026-07-24",
        "value": 26.8314,
        "n": 2812
      },
      {
        "period": "2026-07-25",
        "value": 27.4359,
        "n": 2802
      },
      {
        "period": "2026-07-26",
        "value": 27.6411,
        "n": 2652
      },
      {
        "period": "2026-07-27",
        "value": 26.8812,
        "n": 2439
      },
      {
        "period": "2026-07-28",
        "value": 26.416,
        "n": 2687
      },
      {
        "period": "2026-07-29",
        "value": 26.733,
        "n": 2070
      },
      {
        "period": "2026-07-30",
        "value": 26.5841,
        "n": 2406
      },
      {
        "period": "2026-07-31",
        "value": 26.1166,
        "n": 2448
      },
      {
        "period": "2026-08-03",
        "value": 25.5924,
        "n": 1612
      },
      {
        "period": "2026-08-04",
        "value": 24.1863,
        "n": 1471
      },
      {
        "period": "2026-08-08",
        "value": 25.7575,
        "n": 2630
      },
      {
        "period": "2026-08-09",
        "value": 25.9986,
        "n": 1847
      },
      {
        "period": "2026-08-10",
        "value": 29.3816,
        "n": 2503
      },
      {
        "period": "2026-08-13",
        "value": 24.8175,
        "n": 2428
      },
      {
        "period": "2026-08-14",
        "value": 25.0587,
        "n": 2641
      },
      {
        "period": "2026-08-15",
        "value": 25.24,
        "n": 3021
      },
      {
        "period": "2026-08-16",
        "value": 25.9814,
        "n": 2977
      },
      {
        "period": "2026-08-17",
        "value": 26.3136,
        "n": 1597
      },
      {
        "period": "2026-08-18",
        "value": 27.2365,
        "n": 2690
      },
      {
        "period": "2026-08-19",
        "value": 26.4687,
        "n": 1692
      },
      {
        "period": "2026-08-20",
        "value": 27.7607,
        "n": 1755
      },
      {
        "period": "2026-08-21",
        "value": 27.6041,
        "n": 2739
      },
      {
        "period": "2026-08-22",
        "value": 26.4157,
        "n": 2666
      },
      {
        "period": "2026-08-23",
        "value": 26.5596,
        "n": 1812
      },
      {
        "period": "2026-08-24",
        "value": 26.5781,
        "n": 2956
      },
      {
        "period": "2026-08-25",
        "value": 27.3659,
        "n": 3000
      },
      {
        "period": "2026-08-26",
        "value": 26.596,
        "n": 2951
      },
      {
        "period": "2026-08-27",
        "value": 26.0025,
        "n": 1556
      },
      {
        "period": "2026-08-28",
        "value": 26.679,
        "n": 2989
      },
      {
        "period": "2026-08-29",
        "value": 25.6747,
        "n": 2825
      },
      {
        "period": "2026-08-30",
        "value": 26.3686,
        "n": 2959
      },
      {
        "period": "2026-08-31",
        "value": 25.1501,
        "n": 2900
      },
      {
        "period": "2026-09-03",
        "value": 26.9412,
        "n": 1735
      },
      {
        "period": "2026-09-04",
        "value": 23.0156,
        "n": 1921
      },
      {
        "period": "2026-09-08",
        "value": 25.8132,
        "n": 2834
      },
      {
        "period": "2026-09-09",
        "value": 26.0197,
        "n": 1755
      },
      {
        "period": "2026-09-13",
        "value": 25.8852,
        "n": 1995
      },
      {
        "period": "2026-09-14",
        "value": 26.6408,
        "n": 2048
      },
      {
        "period": "2026-09-15",
        "value": 26.1128,
        "n": 1980
      },
      {
        "period": "2026-09-16",
        "value": 25.7742,
        "n": 2231
      },
      {
        "period": "2026-09-17",
        "value": 28.1052,
        "n": 2383
      },
      {
        "period": "2026-09-18",
        "value": 27.7191,
        "n": 2598
      },
      {
        "period": "2026-09-19",
        "value": 26.7833,
        "n": 1968
      },
      {
        "period": "2026-09-20",
        "value": 26.7362,
        "n": 2223
      },
      {
        "period": "2026-09-21",
        "value": 27.4633,
        "n": 2040
      },
      {
        "period": "2026-09-22",
        "value": 27.4347,
        "n": 2265
      },
      {
        "period": "2026-09-23",
        "value": 27.8443,
        "n": 2251
      },
      {
        "period": "2026-09-24",
        "value": 29.0921,
        "n": 2513
      },
      {
        "period": "2026-09-25",
        "value": 28.268,
        "n": 2325
      },
      {
        "period": "2026-09-26",
        "value": 27.4128,
        "n": 2051
      },
      {
        "period": "2026-09-27",
        "value": 27.2782,
        "n": 2544
      },
      {
        "period": "2026-09-28",
        "value": 26.8561,
        "n": 1837
      },
      {
        "period": "2026-09-29",
        "value": 27.2223,
        "n": 1652
      },
      {
        "period": "2026-09-30",
        "value": 25.8999,
        "n": 2146
      },
      {
        "period": "2026-10-03",
        "value": 25.8701,
        "n": 1578
      },
      {
        "period": "2026-10-04",
        "value": 23.2708,
        "n": 2031
      },
      {
        "period": "2026-10-08",
        "value": 25.0961,
        "n": 2818
      },
      {
        "period": "2026-10-09",
        "value": 26.5427,
        "n": 2515
      },
      {
        "period": "2026-11-03",
        "value": 24.9566,
        "n": 2326
      },
      {
        "period": "2026-11-04",
        "value": 24.5165,
        "n": 1971
      },
      {
        "period": "2026-11-08",
        "value": 25.4066,
        "n": 2633
      },
      {
        "period": "2026-11-09",
        "value": 25.8793,
        "n": 2346
      },
      {
        "period": "2026-12-03",
        "value": 23.2225,
        "n": 1452
      },
      {
        "period": "2026-12-04",
        "value": 23.786,
        "n": 1897
      },
      {
        "period": "2026-12-08",
        "value": 25.4549,
        "n": 2846
      },
      {
        "period": "2026-12-09",
        "value": 24.9567,
        "n": 2313
      }
    ],
    "relativeHumidity": [
      {
        "period": "2026-01-03",
        "value": 53.2635,
        "n": 2247
      },
      {
        "period": "2026-01-04",
        "value": 29.385,
        "n": 678
      },
      {
        "period": "2026-01-08",
        "value": 80.1743,
        "n": 1695
      },
      {
        "period": "2026-01-09",
        "value": 85.3913,
        "n": 2667
      },
      {
        "period": "2026-01-10",
        "value": 84.1146,
        "n": 2423
      },
      {
        "period": "2026-02-03",
        "value": 56.284,
        "n": 2363
      },
      {
        "period": "2026-02-04",
        "value": 37.7863,
        "n": 2087
      },
      {
        "period": "2026-02-08",
        "value": 76.801,
        "n": 2842
      },
      {
        "period": "2026-02-09",
        "value": 84.7116,
        "n": 2540
      },
      {
        "period": "2026-02-10",
        "value": 77.4023,
        "n": 2686
      },
      {
        "period": "2026-02-20",
        "value": 29.9827,
        "n": 1096
      },
      {
        "period": "2026-02-21",
        "value": 45.8974,
        "n": 2007
      },
      {
        "period": "2026-02-22",
        "value": 31.891,
        "n": 2322
      },
      {
        "period": "2026-02-23",
        "value": 50.3228,
        "n": 1868
      },
      {
        "period": "2026-02-24",
        "value": 44.7486,
        "n": 2367
      },
      {
        "period": "2026-02-25",
        "value": 52.3084,
        "n": 1365
      },
      {
        "period": "2026-02-26",
        "value": 17.0383,
        "n": 183
      },
      {
        "period": "2026-02-27",
        "value": 51.1534,
        "n": 176
      },
      {
        "period": "2026-02-28",
        "value": 36.4506,
        "n": 1416
      },
      {
        "period": "2026-03-03",
        "value": 37.7174,
        "n": 1288
      },
      {
        "period": "2026-03-04",
        "value": 45.4744,
        "n": 2620
      },
      {
        "period": "2026-03-08",
        "value": 74.9488,
        "n": 2283
      },
      {
        "period": "2026-03-09",
        "value": 83.662,
        "n": 2678
      },
      {
        "period": "2026-03-10",
        "value": 75.8063,
        "n": 2580
      },
      {
        "period": "2026-03-13",
        "value": 46.7297,
        "n": 1406
      },
      {
        "period": "2026-03-14",
        "value": 55.6134,
        "n": 2183
      },
      {
        "period": "2026-03-15",
        "value": 70.0675,
        "n": 1037
      },
      {
        "period": "2026-03-16",
        "value": 48.2283,
        "n": 1524
      },
      {
        "period": "2026-03-17",
        "value": 46.3899,
        "n": 2144
      },
      {
        "period": "2026-03-18",
        "value": 53.3458,
        "n": 697
      },
      {
        "period": "2026-03-19",
        "value": 55.1831,
        "n": 1649
      },
      {
        "period": "2026-03-20",
        "value": 48.2116,
        "n": 1172
      },
      {
        "period": "2026-03-21",
        "value": 23.1685,
        "n": 825
      },
      {
        "period": "2026-03-22",
        "value": 48.4016,
        "n": 1006
      },
      {
        "period": "2026-03-23",
        "value": 51.4797,
        "n": 1972
      },
      {
        "period": "2026-03-24",
        "value": 54.1902,
        "n": 962
      },
      {
        "period": "2026-03-25",
        "value": 51.9945,
        "n": 1448
      },
      {
        "period": "2026-03-26",
        "value": 50.5047,
        "n": 2001
      },
      {
        "period": "2026-03-27",
        "value": 54.2925,
        "n": 1094
      },
      {
        "period": "2026-03-28",
        "value": 43.102,
        "n": 2442
      },
      {
        "period": "2026-03-29",
        "value": 52.1105,
        "n": 1819
      },
      {
        "period": "2026-03-30",
        "value": 40.1244,
        "n": 1640
      },
      {
        "period": "2026-03-31",
        "value": 50.0423,
        "n": 1063
      },
      {
        "period": "2026-04-03",
        "value": 49.7325,
        "n": 1843
      },
      {
        "period": "2026-04-04",
        "value": 51.2189,
        "n": 2275
      },
      {
        "period": "2026-04-09",
        "value": 83.0187,
        "n": 2754
      },
      {
        "period": "2026-04-10",
        "value": 76.2521,
        "n": 2159
      },
      {
        "period": "2026-04-13",
        "value": 53.9901,
        "n": 1822
      },
      {
        "period": "2026-04-14",
        "value": 43.2335,
        "n": 1944
      },
      {
        "period": "2026-04-15",
        "value": 47.1505,
        "n": 1907
      },
      {
        "period": "2026-04-16",
        "value": 40.8425,
        "n": 1549
      },
      {
        "period": "2026-04-17",
        "value": 44.5197,
        "n": 2311
      },
      {
        "period": "2026-04-18",
        "value": 39.6341,
        "n": 2304
      },
      {
        "period": "2026-04-19",
        "value": 40.9108,
        "n": 2075
      },
      {
        "period": "2026-04-20",
        "value": 47.2548,
        "n": 2394
      },
      {
        "period": "2026-04-21",
        "value": 36.33,
        "n": 697
      },
      {
        "period": "2026-05-03",
        "value": 58.9214,
        "n": 852
      },
      {
        "period": "2026-05-04",
        "value": 55.1217,
        "n": 1874
      },
      {
        "period": "2026-05-08",
        "value": 78.8234,
        "n": 459
      },
      {
        "period": "2026-05-09",
        "value": 83.4067,
        "n": 2205
      },
      {
        "period": "2026-05-10",
        "value": 75.6824,
        "n": 2184
      },
      {
        "period": "2026-06-03",
        "value": 61.4305,
        "n": 1698
      },
      {
        "period": "2026-06-04",
        "value": 50.4747,
        "n": 988
      },
      {
        "period": "2026-06-08",
        "value": 76.1968,
        "n": 2660
      },
      {
        "period": "2026-06-09",
        "value": 82.1494,
        "n": 2188
      },
      {
        "period": "2026-06-10",
        "value": 75.5626,
        "n": 2735
      },
      {
        "period": "2026-07-03",
        "value": 54.0219,
        "n": 1779
      },
      {
        "period": "2026-07-04",
        "value": 46.6854,
        "n": 1284
      },
      {
        "period": "2026-07-08",
        "value": 77.7004,
        "n": 1964
      },
      {
        "period": "2026-07-09",
        "value": 78.5358,
        "n": 1850
      },
      {
        "period": "2026-07-10",
        "value": 77.777,
        "n": 2880
      },
      {
        "period": "2026-07-21",
        "value": 81.3592,
        "n": 1001
      },
      {
        "period": "2026-07-22",
        "value": 83.2661,
        "n": 2078
      },
      {
        "period": "2026-07-23",
        "value": 84.013,
        "n": 2868
      },
      {
        "period": "2026-07-24",
        "value": 80.4496,
        "n": 2812
      },
      {
        "period": "2026-07-25",
        "value": 78.7046,
        "n": 2802
      },
      {
        "period": "2026-07-26",
        "value": 78.2798,
        "n": 2652
      },
      {
        "period": "2026-07-27",
        "value": 80.6073,
        "n": 2439
      },
      {
        "period": "2026-07-28",
        "value": 81.9759,
        "n": 2687
      },
      {
        "period": "2026-07-29",
        "value": 80.8107,
        "n": 2070
      },
      {
        "period": "2026-07-30",
        "value": 81.2678,
        "n": 2406
      },
      {
        "period": "2026-07-31",
        "value": 81.0703,
        "n": 2448
      },
      {
        "period": "2026-08-03",
        "value": 53.4299,
        "n": 1612
      },
      {
        "period": "2026-08-04",
        "value": 48.9932,
        "n": 1471
      },
      {
        "period": "2026-08-08",
        "value": 81.407,
        "n": 2630
      },
      {
        "period": "2026-08-09",
        "value": 83.1348,
        "n": 1847
      },
      {
        "period": "2026-08-10",
        "value": 73.5517,
        "n": 2503
      },
      {
        "period": "2026-08-13",
        "value": 87.2413,
        "n": 2428
      },
      {
        "period": "2026-08-14",
        "value": 86.7901,
        "n": 2641
      },
      {
        "period": "2026-08-15",
        "value": 85.283,
        "n": 3021
      },
      {
        "period": "2026-08-16",
        "value": 81.1336,
        "n": 2977
      },
      {
        "period": "2026-08-17",
        "value": 80.8072,
        "n": 1597
      },
      {
        "period": "2026-08-18",
        "value": 79.4971,
        "n": 2690
      },
      {
        "period": "2026-08-19",
        "value": 79.9897,
        "n": 1692
      },
      {
        "period": "2026-08-20",
        "value": 75.6964,
        "n": 1755
      },
      {
        "period": "2026-08-21",
        "value": 76.3356,
        "n": 2739
      },
      {
        "period": "2026-08-22",
        "value": 81.225,
        "n": 2666
      },
      {
        "period": "2026-08-23",
        "value": 80.7273,
        "n": 1812
      },
      {
        "period": "2026-08-24",
        "value": 79.3588,
        "n": 2956
      },
      {
        "period": "2026-08-25",
        "value": 77.2281,
        "n": 3000
      },
      {
        "period": "2026-08-26",
        "value": 80.8442,
        "n": 2951
      },
      {
        "period": "2026-08-27",
        "value": 82.6806,
        "n": 1556
      },
      {
        "period": "2026-08-28",
        "value": 79.3075,
        "n": 2989
      },
      {
        "period": "2026-08-29",
        "value": 82.1426,
        "n": 2825
      },
      {
        "period": "2026-08-30",
        "value": 82.0825,
        "n": 2959
      },
      {
        "period": "2026-08-31",
        "value": 87.1798,
        "n": 2900
      },
      {
        "period": "2026-09-03",
        "value": 46.9464,
        "n": 1735
      },
      {
        "period": "2026-09-04",
        "value": 39.0125,
        "n": 1921
      },
      {
        "period": "2026-09-08",
        "value": 81.5649,
        "n": 2834
      },
      {
        "period": "2026-09-09",
        "value": 84.3301,
        "n": 1755
      },
      {
        "period": "2026-09-13",
        "value": 83.7274,
        "n": 1995
      },
      {
        "period": "2026-09-14",
        "value": 81.9261,
        "n": 2048
      },
      {
        "period": "2026-09-15",
        "value": 84.7559,
        "n": 1980
      },
      {
        "period": "2026-09-16",
        "value": 84.6077,
        "n": 2231
      },
      {
        "period": "2026-09-17",
        "value": 76.0438,
        "n": 2383
      },
      {
        "period": "2026-09-18",
        "value": 77.4209,
        "n": 2598
      },
      {
        "period": "2026-09-19",
        "value": 80.3345,
        "n": 1968
      },
      {
        "period": "2026-09-20",
        "value": 80.3914,
        "n": 2223
      },
      {
        "period": "2026-09-21",
        "value": 78.0065,
        "n": 2040
      },
      {
        "period": "2026-09-22",
        "value": 78.0057,
        "n": 2265
      },
      {
        "period": "2026-09-23",
        "value": 77.8275,
        "n": 2251
      },
      {
        "period": "2026-09-24",
        "value": 74.7285,
        "n": 2513
      },
      {
        "period": "2026-09-25",
        "value": 76.5365,
        "n": 2325
      },
      {
        "period": "2026-09-26",
        "value": 78.3595,
        "n": 2051
      },
      {
        "period": "2026-09-27",
        "value": 79.3182,
        "n": 2544
      },
      {
        "period": "2026-09-28",
        "value": 79.0489,
        "n": 1837
      },
      {
        "period": "2026-09-29",
        "value": 79.1093,
        "n": 1652
      },
      {
        "period": "2026-09-30",
        "value": 83.9298,
        "n": 2146
      },
      {
        "period": "2026-10-03",
        "value": 51.6096,
        "n": 1578
      },
      {
        "period": "2026-10-04",
        "value": 35.4466,
        "n": 2031
      },
      {
        "period": "2026-10-08",
        "value": 83.0473,
        "n": 2818
      },
      {
        "period": "2026-10-09",
        "value": 82.147,
        "n": 2515
      },
      {
        "period": "2026-11-03",
        "value": 49.9897,
        "n": 2326
      },
      {
        "period": "2026-11-04",
        "value": 48.0964,
        "n": 1971
      },
      {
        "period": "2026-11-08",
        "value": 81.696,
        "n": 2633
      },
      {
        "period": "2026-11-09",
        "value": 84.0512,
        "n": 2346
      },
      {
        "period": "2026-12-03",
        "value": 68.4463,
        "n": 1452
      },
      {
        "period": "2026-12-04",
        "value": 54.4507,
        "n": 1897
      },
      {
        "period": "2026-12-08",
        "value": 83.367,
        "n": 2846
      },
      {
        "period": "2026-12-09",
        "value": 87.6736,
        "n": 2313
      }
    ],
    "pressure": [
      {
        "period": "2026-01-03",
        "value": 967.6778,
        "n": 2247
      },
      {
        "period": "2026-01-04",
        "value": 967.0979,
        "n": 678
      },
      {
        "period": "2026-01-08",
        "value": 972.0363,
        "n": 1695
      },
      {
        "period": "2026-01-09",
        "value": 971.7987,
        "n": 2667
      },
      {
        "period": "2026-01-10",
        "value": 971.6279,
        "n": 2423
      },
      {
        "period": "2026-02-03",
        "value": 967.9107,
        "n": 2363
      },
      {
        "period": "2026-02-04",
        "value": 967.6658,
        "n": 2087
      },
      {
        "period": "2026-02-08",
        "value": 972.2249,
        "n": 2842
      },
      {
        "period": "2026-02-09",
        "value": 972.795,
        "n": 2540
      },
      {
        "period": "2026-02-10",
        "value": 972.1518,
        "n": 2686
      },
      {
        "period": "2026-02-20",
        "value": 968.5785,
        "n": 1096
      },
      {
        "period": "2026-02-21",
        "value": 969.166,
        "n": 2007
      },
      {
        "period": "2026-02-22",
        "value": 968.5557,
        "n": 2322
      },
      {
        "period": "2026-02-23",
        "value": 969.6527,
        "n": 1868
      },
      {
        "period": "2026-02-24",
        "value": 968.739,
        "n": 2367
      },
      {
        "period": "2026-02-25",
        "value": 968.6875,
        "n": 1365
      },
      {
        "period": "2026-02-26",
        "value": 967.3585,
        "n": 183
      },
      {
        "period": "2026-02-27",
        "value": 968.1557,
        "n": 176
      },
      {
        "period": "2026-02-28",
        "value": 967.4378,
        "n": 1416
      },
      {
        "period": "2026-03-03",
        "value": 967.7993,
        "n": 1288
      },
      {
        "period": "2026-03-04",
        "value": 967.8251,
        "n": 2620
      },
      {
        "period": "2026-03-08",
        "value": 971.2028,
        "n": 2283
      },
      {
        "period": "2026-03-09",
        "value": 972.5627,
        "n": 2678
      },
      {
        "period": "2026-03-10",
        "value": 970.7247,
        "n": 2580
      },
      {
        "period": "2026-03-13",
        "value": 967.5241,
        "n": 1406
      },
      {
        "period": "2026-03-14",
        "value": 967.3648,
        "n": 2183
      },
      {
        "period": "2026-03-15",
        "value": 968.2164,
        "n": 1037
      },
      {
        "period": "2026-03-16",
        "value": 968.1221,
        "n": 1524
      },
      {
        "period": "2026-03-17",
        "value": 967.6566,
        "n": 2144
      },
      {
        "period": "2026-03-18",
        "value": 967.1134,
        "n": 697
      },
      {
        "period": "2026-03-19",
        "value": 967.83,
        "n": 1649
      },
      {
        "period": "2026-03-20",
        "value": 967.7483,
        "n": 1172
      },
      {
        "period": "2026-03-21",
        "value": 966.9157,
        "n": 825
      },
      {
        "period": "2026-03-22",
        "value": 967.249,
        "n": 1006
      },
      {
        "period": "2026-03-23",
        "value": 968.3555,
        "n": 1972
      },
      {
        "period": "2026-03-24",
        "value": 967.7549,
        "n": 962
      },
      {
        "period": "2026-03-25",
        "value": 966.8022,
        "n": 1448
      },
      {
        "period": "2026-03-26",
        "value": 966.9572,
        "n": 2001
      },
      {
        "period": "2026-03-27",
        "value": 969.4979,
        "n": 1094
      },
      {
        "period": "2026-03-28",
        "value": 968.7287,
        "n": 2442
      },
      {
        "period": "2026-03-29",
        "value": 968.0744,
        "n": 1819
      },
      {
        "period": "2026-03-30",
        "value": 965.2643,
        "n": 1640
      },
      {
        "period": "2026-03-31",
        "value": 965.7684,
        "n": 1063
      },
      {
        "period": "2026-04-03",
        "value": 967.3604,
        "n": 1843
      },
      {
        "period": "2026-04-04",
        "value": 968.8069,
        "n": 2275
      },
      {
        "period": "2026-04-09",
        "value": 972.9533,
        "n": 2754
      },
      {
        "period": "2026-04-10",
        "value": 969.9669,
        "n": 2159
      },
      {
        "period": "2026-04-13",
        "value": 966.9731,
        "n": 1822
      },
      {
        "period": "2026-04-14",
        "value": 968.1478,
        "n": 1944
      },
      {
        "period": "2026-04-15",
        "value": 968.5402,
        "n": 1907
      },
      {
        "period": "2026-04-16",
        "value": 968.4575,
        "n": 1549
      },
      {
        "period": "2026-04-17",
        "value": 967.9025,
        "n": 2311
      },
      {
        "period": "2026-04-18",
        "value": 968.4171,
        "n": 2304
      },
      {
        "period": "2026-04-19",
        "value": 969.5484,
        "n": 2075
      },
      {
        "period": "2026-04-20",
        "value": 968.8551,
        "n": 2394
      },
      {
        "period": "2026-04-21",
        "value": 967.7275,
        "n": 697
      },
      {
        "period": "2026-05-03",
        "value": 966.6381,
        "n": 852
      },
      {
        "period": "2026-05-04",
        "value": 968.776,
        "n": 1874
      },
      {
        "period": "2026-05-08",
        "value": 973.1486,
        "n": 459
      },
      {
        "period": "2026-05-09",
        "value": 973.2788,
        "n": 2205
      },
      {
        "period": "2026-05-10",
        "value": 970.2587,
        "n": 2184
      },
      {
        "period": "2026-06-03",
        "value": 967.3301,
        "n": 1698
      },
      {
        "period": "2026-06-04",
        "value": 968.0651,
        "n": 988
      },
      {
        "period": "2026-06-08",
        "value": 972.017,
        "n": 2660
      },
      {
        "period": "2026-06-09",
        "value": 972.4423,
        "n": 2188
      },
      {
        "period": "2026-06-10",
        "value": 970.3375,
        "n": 2735
      },
      {
        "period": "2026-07-03",
        "value": 966.5384,
        "n": 1779
      },
      {
        "period": "2026-07-04",
        "value": 968.2784,
        "n": 1284
      },
      {
        "period": "2026-07-08",
        "value": 970.3543,
        "n": 1964
      },
      {
        "period": "2026-07-09",
        "value": 971.3675,
        "n": 1850
      },
      {
        "period": "2026-07-10",
        "value": 970.8315,
        "n": 2880
      },
      {
        "period": "2026-07-21",
        "value": 970.6837,
        "n": 1001
      },
      {
        "period": "2026-07-22",
        "value": 970.7816,
        "n": 2078
      },
      {
        "period": "2026-07-23",
        "value": 971.0718,
        "n": 2868
      },
      {
        "period": "2026-07-24",
        "value": 971.2846,
        "n": 2812
      },
      {
        "period": "2026-07-25",
        "value": 971.2595,
        "n": 2802
      },
      {
        "period": "2026-07-26",
        "value": 970.6927,
        "n": 2652
      },
      {
        "period": "2026-07-27",
        "value": 970.3307,
        "n": 2439
      },
      {
        "period": "2026-07-28",
        "value": 971.2201,
        "n": 2687
      },
      {
        "period": "2026-07-29",
        "value": 971.841,
        "n": 2070
      },
      {
        "period": "2026-07-30",
        "value": 972.5119,
        "n": 2406
      },
      {
        "period": "2026-07-31",
        "value": 972.0093,
        "n": 2448
      },
      {
        "period": "2026-08-03",
        "value": 965.877,
        "n": 1612
      },
      {
        "period": "2026-08-04",
        "value": 968.2116,
        "n": 1471
      },
      {
        "period": "2026-08-08",
        "value": 970.5581,
        "n": 2630
      },
      {
        "period": "2026-08-09",
        "value": 970.7281,
        "n": 1847
      },
      {
        "period": "2026-08-10",
        "value": 970.1051,
        "n": 2503
      },
      {
        "period": "2026-08-13",
        "value": 971.1239,
        "n": 2428
      },
      {
        "period": "2026-08-14",
        "value": 968.9374,
        "n": 2641
      },
      {
        "period": "2026-08-15",
        "value": 969.4605,
        "n": 3021
      },
      {
        "period": "2026-08-16",
        "value": 971.271,
        "n": 2977
      },
      {
        "period": "2026-08-17",
        "value": 971.9662,
        "n": 1597
      },
      {
        "period": "2026-08-18",
        "value": 970.6382,
        "n": 2690
      },
      {
        "period": "2026-08-19",
        "value": 971.0057,
        "n": 1692
      },
      {
        "period": "2026-08-20",
        "value": 972.4932,
        "n": 1755
      },
      {
        "period": "2026-08-21",
        "value": 971.519,
        "n": 2739
      },
      {
        "period": "2026-08-22",
        "value": 969.1618,
        "n": 2666
      },
      {
        "period": "2026-08-23",
        "value": 971.0807,
        "n": 1812
      },
      {
        "period": "2026-08-24",
        "value": 973.0783,
        "n": 2956
      },
      {
        "period": "2026-08-25",
        "value": 971.8639,
        "n": 3000
      },
      {
        "period": "2026-08-26",
        "value": 970.1811,
        "n": 2951
      },
      {
        "period": "2026-08-27",
        "value": 969.5337,
        "n": 1556
      },
      {
        "period": "2026-08-28",
        "value": 971.033,
        "n": 2989
      },
      {
        "period": "2026-08-29",
        "value": 970.9424,
        "n": 2825
      },
      {
        "period": "2026-08-30",
        "value": 969.8418,
        "n": 2959
      },
      {
        "period": "2026-08-31",
        "value": 970.8596,
        "n": 2900
      },
      {
        "period": "2026-09-03",
        "value": 965.523,
        "n": 1735
      },
      {
        "period": "2026-09-04",
        "value": 967.9986,
        "n": 1921
      },
      {
        "period": "2026-09-08",
        "value": 971.2249,
        "n": 2834
      },
      {
        "period": "2026-09-09",
        "value": 971.0166,
        "n": 1755
      },
      {
        "period": "2026-09-13",
        "value": 971.0061,
        "n": 1995
      },
      {
        "period": "2026-09-14",
        "value": 970.1969,
        "n": 2048
      },
      {
        "period": "2026-09-15",
        "value": 971.3186,
        "n": 1980
      },
      {
        "period": "2026-09-16",
        "value": 971.771,
        "n": 2231
      },
      {
        "period": "2026-09-17",
        "value": 970.4299,
        "n": 2383
      },
      {
        "period": "2026-09-18",
        "value": 969.8363,
        "n": 2598
      },
      {
        "period": "2026-09-19",
        "value": 970.7367,
        "n": 1968
      },
      {
        "period": "2026-09-20",
        "value": 970.9981,
        "n": 2223
      },
      {
        "period": "2026-09-21",
        "value": 971.1646,
        "n": 2040
      },
      {
        "period": "2026-09-22",
        "value": 970.6674,
        "n": 2265
      },
      {
        "period": "2026-09-23",
        "value": 970.8224,
        "n": 2251
      },
      {
        "period": "2026-09-24",
        "value": 970.1307,
        "n": 2513
      },
      {
        "period": "2026-09-25",
        "value": 969.5242,
        "n": 2325
      },
      {
        "period": "2026-09-26",
        "value": 970.2037,
        "n": 2051
      },
      {
        "period": "2026-09-27",
        "value": 971.3349,
        "n": 2544
      },
      {
        "period": "2026-09-28",
        "value": 971.2423,
        "n": 1837
      },
      {
        "period": "2026-09-29",
        "value": 970.3554,
        "n": 1652
      },
      {
        "period": "2026-09-30",
        "value": 970.1297,
        "n": 2146
      },
      {
        "period": "2026-10-03",
        "value": 966.0469,
        "n": 1578
      },
      {
        "period": "2026-10-04",
        "value": 967.0426,
        "n": 2031
      },
      {
        "period": "2026-10-08",
        "value": 971.3579,
        "n": 2818
      },
      {
        "period": "2026-10-09",
        "value": 972.5189,
        "n": 2515
      },
      {
        "period": "2026-11-03",
        "value": 966.9333,
        "n": 2326
      },
      {
        "period": "2026-11-04",
        "value": 967.1518,
        "n": 1971
      },
      {
        "period": "2026-11-08",
        "value": 970.6945,
        "n": 2633
      },
      {
        "period": "2026-11-09",
        "value": 971.2527,
        "n": 2346
      },
      {
        "period": "2026-12-03",
        "value": 967.5882,
        "n": 1452
      },
      {
        "period": "2026-12-04",
        "value": 967.268,
        "n": 1897
      },
      {
        "period": "2026-12-08",
        "value": 971.0106,
        "n": 2846
      },
      {
        "period": "2026-12-09",
        "value": 971.0018,
        "n": 2313
      }
    ],
    "heatIndex": [
      {
        "period": "2026-01-03",
        "value": 25.3342,
        "n": 2247
      },
      {
        "period": "2026-01-04",
        "value": 26.1948,
        "n": 678
      },
      {
        "period": "2026-02-03",
        "value": 24.0545,
        "n": 2363
      },
      {
        "period": "2026-02-04",
        "value": 24.1821,
        "n": 2087
      },
      {
        "period": "2026-02-20",
        "value": 27.8426,
        "n": 1096
      },
      {
        "period": "2026-02-21",
        "value": 25.7503,
        "n": 2007
      },
      {
        "period": "2026-02-22",
        "value": 25.806,
        "n": 2322
      },
      {
        "period": "2026-02-23",
        "value": 25.037,
        "n": 1868
      },
      {
        "period": "2026-02-24",
        "value": 26.0561,
        "n": 2367
      },
      {
        "period": "2026-02-25",
        "value": 25.458,
        "n": 1365
      },
      {
        "period": "2026-02-26",
        "value": 28.0532,
        "n": 183
      },
      {
        "period": "2026-02-27",
        "value": 24.2289,
        "n": 176
      },
      {
        "period": "2026-02-28",
        "value": 26.9105,
        "n": 1416
      },
      {
        "period": "2026-03-03",
        "value": 25.1977,
        "n": 1288
      },
      {
        "period": "2026-03-04",
        "value": 24.5397,
        "n": 2620
      },
      {
        "period": "2026-03-13",
        "value": 25.0473,
        "n": 1406
      },
      {
        "period": "2026-03-14",
        "value": 24.2879,
        "n": 2183
      },
      {
        "period": "2026-03-15",
        "value": 22.9213,
        "n": 1037
      },
      {
        "period": "2026-03-16",
        "value": 24.5061,
        "n": 1524
      },
      {
        "period": "2026-03-17",
        "value": 25.0689,
        "n": 2144
      },
      {
        "period": "2026-03-18",
        "value": 25.092,
        "n": 697
      },
      {
        "period": "2026-03-19",
        "value": 24.6528,
        "n": 1649
      },
      {
        "period": "2026-03-20",
        "value": 24.8227,
        "n": 1172
      },
      {
        "period": "2026-03-21",
        "value": 27.253,
        "n": 825
      },
      {
        "period": "2026-03-22",
        "value": 25.4595,
        "n": 1006
      },
      {
        "period": "2026-03-23",
        "value": 24.9424,
        "n": 1972
      },
      {
        "period": "2026-03-24",
        "value": 24.1406,
        "n": 962
      },
      {
        "period": "2026-03-25",
        "value": 25.111,
        "n": 1448
      },
      {
        "period": "2026-03-26",
        "value": 25.3006,
        "n": 2001
      },
      {
        "period": "2026-03-27",
        "value": 25.113,
        "n": 1094
      },
      {
        "period": "2026-03-28",
        "value": 25.7201,
        "n": 2442
      },
      {
        "period": "2026-03-29",
        "value": 25.3579,
        "n": 1819
      },
      {
        "period": "2026-03-30",
        "value": 25.8339,
        "n": 1640
      },
      {
        "period": "2026-03-31",
        "value": 25.2758,
        "n": 1063
      },
      {
        "period": "2026-04-03",
        "value": 23.8676,
        "n": 1843
      },
      {
        "period": "2026-04-04",
        "value": 24.3235,
        "n": 2275
      },
      {
        "period": "2026-04-13",
        "value": 23.5287,
        "n": 1822
      },
      {
        "period": "2026-04-14",
        "value": 24.1568,
        "n": 1944
      },
      {
        "period": "2026-04-15",
        "value": 24.2799,
        "n": 1907
      },
      {
        "period": "2026-04-16",
        "value": 24.6915,
        "n": 1549
      },
      {
        "period": "2026-04-17",
        "value": 24.5905,
        "n": 2311
      },
      {
        "period": "2026-04-18",
        "value": 23.8836,
        "n": 2304
      },
      {
        "period": "2026-04-19",
        "value": 24.8811,
        "n": 2075
      },
      {
        "period": "2026-04-20",
        "value": 24.7538,
        "n": 2394
      },
      {
        "period": "2026-04-21",
        "value": 25.0389,
        "n": 697
      },
      {
        "period": "2026-05-03",
        "value": 22.3369,
        "n": 852
      },
      {
        "period": "2026-05-04",
        "value": 24.5251,
        "n": 1874
      },
      {
        "period": "2026-06-03",
        "value": 24.0799,
        "n": 1698
      },
      {
        "period": "2026-06-04",
        "value": 24.8256,
        "n": 988
      },
      {
        "period": "2026-07-03",
        "value": 24.5952,
        "n": 1779
      },
      {
        "period": "2026-07-04",
        "value": 24.7689,
        "n": 1284
      },
      {
        "period": "2026-08-03",
        "value": 25.0304,
        "n": 1612
      },
      {
        "period": "2026-08-04",
        "value": 23.9065,
        "n": 1471
      },
      {
        "period": "2026-09-03",
        "value": 26.15,
        "n": 1735
      },
      {
        "period": "2026-09-04",
        "value": 22.3909,
        "n": 1921
      },
      {
        "period": "2026-10-03",
        "value": 25.4478,
        "n": 1578
      },
      {
        "period": "2026-10-04",
        "value": 22.5784,
        "n": 2031
      },
      {
        "period": "2026-11-03",
        "value": 24.4145,
        "n": 2326
      },
      {
        "period": "2026-11-04",
        "value": 24.2736,
        "n": 1971
      },
      {
        "period": "2026-12-03",
        "value": 23.4374,
        "n": 1452
      },
      {
        "period": "2026-12-04",
        "value": 23.6424,
        "n": 1897
      }
    ],
    "refractivity": [
      {
        "period": "2026-01-03",
        "value": 317.0441,
        "n": 2247
      },
      {
        "period": "2026-01-04",
        "value": 292.4069,
        "n": 678
      },
      {
        "period": "2026-01-08",
        "value": 364.9093,
        "n": 1695
      },
      {
        "period": "2026-01-09",
        "value": 367.1675,
        "n": 2667
      },
      {
        "period": "2026-01-10",
        "value": 369.5357,
        "n": 2423
      },
      {
        "period": "2026-02-03",
        "value": 320.6545,
        "n": 2363
      },
      {
        "period": "2026-02-04",
        "value": 299.9297,
        "n": 2087
      },
      {
        "period": "2026-02-08",
        "value": 361.99,
        "n": 2842
      },
      {
        "period": "2026-02-09",
        "value": 367.0711,
        "n": 2540
      },
      {
        "period": "2026-02-10",
        "value": 365.277,
        "n": 2686
      },
      {
        "period": "2026-02-20",
        "value": 296.0383,
        "n": 1096
      },
      {
        "period": "2026-02-21",
        "value": 314.2583,
        "n": 2007
      },
      {
        "period": "2026-02-22",
        "value": 293.6475,
        "n": 2322
      },
      {
        "period": "2026-02-23",
        "value": 315.4046,
        "n": 1868
      },
      {
        "period": "2026-02-24",
        "value": 309.5982,
        "n": 2367
      },
      {
        "period": "2026-02-25",
        "value": 319.8988,
        "n": 1365
      },
      {
        "period": "2026-02-26",
        "value": 276.2744,
        "n": 183
      },
      {
        "period": "2026-02-27",
        "value": 318.2385,
        "n": 176
      },
      {
        "period": "2026-02-28",
        "value": 297.9914,
        "n": 1416
      },
      {
        "period": "2026-03-03",
        "value": 299.6878,
        "n": 1288
      },
      {
        "period": "2026-03-04",
        "value": 309.1924,
        "n": 2620
      },
      {
        "period": "2026-03-08",
        "value": 360.8791,
        "n": 2283
      },
      {
        "period": "2026-03-09",
        "value": 368.2647,
        "n": 2678
      },
      {
        "period": "2026-03-10",
        "value": 370.4896,
        "n": 2580
      },
      {
        "period": "2026-03-13",
        "value": 311.3952,
        "n": 1406
      },
      {
        "period": "2026-03-14",
        "value": 319.7289,
        "n": 2183
      },
      {
        "period": "2026-03-15",
        "value": 335.2505,
        "n": 1037
      },
      {
        "period": "2026-03-16",
        "value": 312.5334,
        "n": 1524
      },
      {
        "period": "2026-03-17",
        "value": 311.3901,
        "n": 2144
      },
      {
        "period": "2026-03-18",
        "value": 319.6032,
        "n": 697
      },
      {
        "period": "2026-03-19",
        "value": 321.6478,
        "n": 1649
      },
      {
        "period": "2026-03-20",
        "value": 310.9883,
        "n": 1172
      },
      {
        "period": "2026-03-21",
        "value": 282.8182,
        "n": 825
      },
      {
        "period": "2026-03-22",
        "value": 314.4715,
        "n": 1006
      },
      {
        "period": "2026-03-23",
        "value": 319.1219,
        "n": 1972
      },
      {
        "period": "2026-03-24",
        "value": 320.1318,
        "n": 962
      },
      {
        "period": "2026-03-25",
        "value": 319.4241,
        "n": 1448
      },
      {
        "period": "2026-03-26",
        "value": 317.1258,
        "n": 2001
      },
      {
        "period": "2026-03-27",
        "value": 322.9619,
        "n": 1094
      },
      {
        "period": "2026-03-28",
        "value": 308.3074,
        "n": 2442
      },
      {
        "period": "2026-03-29",
        "value": 321.1331,
        "n": 1819
      },
      {
        "period": "2026-03-30",
        "value": 304.7848,
        "n": 1640
      },
      {
        "period": "2026-03-31",
        "value": 317.3172,
        "n": 1063
      },
      {
        "period": "2026-04-03",
        "value": 314.1334,
        "n": 1843
      },
      {
        "period": "2026-04-04",
        "value": 317.2696,
        "n": 2275
      },
      {
        "period": "2026-04-09",
        "value": 367.2436,
        "n": 2754
      },
      {
        "period": "2026-04-10",
        "value": 371.7023,
        "n": 2159
      },
      {
        "period": "2026-04-13",
        "value": 319.4675,
        "n": 1822
      },
      {
        "period": "2026-04-14",
        "value": 307.2291,
        "n": 1944
      },
      {
        "period": "2026-04-15",
        "value": 313.3076,
        "n": 1907
      },
      {
        "period": "2026-04-16",
        "value": 305.6069,
        "n": 1549
      },
      {
        "period": "2026-04-17",
        "value": 310.2415,
        "n": 2311
      },
      {
        "period": "2026-04-18",
        "value": 302.6903,
        "n": 2304
      },
      {
        "period": "2026-04-19",
        "value": 306.8494,
        "n": 2075
      },
      {
        "period": "2026-04-20",
        "value": 314.4371,
        "n": 2394
      },
      {
        "period": "2026-04-21",
        "value": 300.8437,
        "n": 697
      },
      {
        "period": "2026-05-03",
        "value": 321.2343,
        "n": 852
      },
      {
        "period": "2026-05-04",
        "value": 323.503,
        "n": 1874
      },
      {
        "period": "2026-05-08",
        "value": 366.5751,
        "n": 459
      },
      {
        "period": "2026-05-09",
        "value": 368.2635,
        "n": 2205
      },
      {
        "period": "2026-05-10",
        "value": 372.614,
        "n": 2184
      },
      {
        "period": "2026-06-03",
        "value": 328.8162,
        "n": 1698
      },
      {
        "period": "2026-06-04",
        "value": 318.3989,
        "n": 988
      },
      {
        "period": "2026-06-08",
        "value": 363.4058,
        "n": 2660
      },
      {
        "period": "2026-06-09",
        "value": 368.335,
        "n": 2188
      },
      {
        "period": "2026-06-10",
        "value": 372.8164,
        "n": 2735
      },
      {
        "period": "2026-07-03",
        "value": 317.3629,
        "n": 1779
      },
      {
        "period": "2026-07-04",
        "value": 312.968,
        "n": 1284
      },
      {
        "period": "2026-07-08",
        "value": 364.928,
        "n": 1964
      },
      {
        "period": "2026-07-09",
        "value": 368.1298,
        "n": 1850
      },
      {
        "period": "2026-07-10",
        "value": 371.3926,
        "n": 2880
      },
      {
        "period": "2026-07-21",
        "value": 365.2786,
        "n": 1001
      },
      {
        "period": "2026-07-22",
        "value": 367.0725,
        "n": 2078
      },
      {
        "period": "2026-07-23",
        "value": 366.1271,
        "n": 2868
      },
      {
        "period": "2026-07-24",
        "value": 368.4521,
        "n": 2812
      },
      {
        "period": "2026-07-25",
        "value": 369.3503,
        "n": 2802
      },
      {
        "period": "2026-07-26",
        "value": 369.5876,
        "n": 2652
      },
      {
        "period": "2026-07-27",
        "value": 368.9965,
        "n": 2439
      },
      {
        "period": "2026-07-28",
        "value": 368.7058,
        "n": 2687
      },
      {
        "period": "2026-07-29",
        "value": 368.8124,
        "n": 2070
      },
      {
        "period": "2026-07-30",
        "value": 368.9196,
        "n": 2406
      },
      {
        "period": "2026-07-31",
        "value": 366.0631,
        "n": 2448
      },
      {
        "period": "2026-08-03",
        "value": 316.6767,
        "n": 1612
      },
      {
        "period": "2026-08-04",
        "value": 314.053,
        "n": 1471
      },
      {
        "period": "2026-08-08",
        "value": 364.2574,
        "n": 2630
      },
      {
        "period": "2026-08-09",
        "value": 367.8497,
        "n": 1847
      },
      {
        "period": "2026-08-10",
        "value": 371.0174,
        "n": 2503
      },
      {
        "period": "2026-08-13",
        "value": 367.5681,
        "n": 2428
      },
      {
        "period": "2026-08-14",
        "value": 367.6312,
        "n": 2641
      },
      {
        "period": "2026-08-15",
        "value": 366.6578,
        "n": 3021
      },
      {
        "period": "2026-08-16",
        "value": 364.9513,
        "n": 2977
      },
      {
        "period": "2026-08-17",
        "value": 366.7638,
        "n": 1597
      },
      {
        "period": "2026-08-18",
        "value": 369.2184,
        "n": 2690
      },
      {
        "period": "2026-08-19",
        "value": 366.0327,
        "n": 1692
      },
      {
        "period": "2026-08-20",
        "value": 366.6547,
        "n": 1755
      },
      {
        "period": "2026-08-21",
        "value": 366.6612,
        "n": 2739
      },
      {
        "period": "2026-08-22",
        "value": 367.038,
        "n": 2666
      },
      {
        "period": "2026-08-23",
        "value": 367.5522,
        "n": 1812
      },
      {
        "period": "2026-08-24",
        "value": 366.1742,
        "n": 2956
      },
      {
        "period": "2026-08-25",
        "value": 366.7589,
        "n": 3000
      },
      {
        "period": "2026-08-26",
        "value": 367.6859,
        "n": 2951
      },
      {
        "period": "2026-08-27",
        "value": 367.0767,
        "n": 1556
      },
      {
        "period": "2026-08-28",
        "value": 366.0021,
        "n": 2989
      },
      {
        "period": "2026-08-29",
        "value": 364.8827,
        "n": 2825
      },
      {
        "period": "2026-08-30",
        "value": 368.0012,
        "n": 2959
      },
      {
        "period": "2026-08-31",
        "value": 369.1193,
        "n": 2900
      },
      {
        "period": "2026-09-03",
        "value": 310.8123,
        "n": 1735
      },
      {
        "period": "2026-09-04",
        "value": 300.0613,
        "n": 1921
      },
      {
        "period": "2026-09-08",
        "value": 364.8072,
        "n": 2834
      },
      {
        "period": "2026-09-09",
        "value": 369.5907,
        "n": 1755
      },
      {
        "period": "2026-09-13",
        "value": 368.0672,
        "n": 1995
      },
      {
        "period": "2026-09-14",
        "value": 369.0444,
        "n": 2048
      },
      {
        "period": "2026-09-15",
        "value": 370.7514,
        "n": 1980
      },
      {
        "period": "2026-09-16",
        "value": 368.8583,
        "n": 2231
      },
      {
        "period": "2026-09-17",
        "value": 368.3577,
        "n": 2383
      },
      {
        "period": "2026-09-18",
        "value": 367.9956,
        "n": 2598
      },
      {
        "period": "2026-09-19",
        "value": 368.1056,
        "n": 1968
      },
      {
        "period": "2026-09-20",
        "value": 367.89,
        "n": 2223
      },
      {
        "period": "2026-09-21",
        "value": 368.2974,
        "n": 2040
      },
      {
        "period": "2026-09-22",
        "value": 368.0583,
        "n": 2265
      },
      {
        "period": "2026-09-23",
        "value": 369.8757,
        "n": 2251
      },
      {
        "period": "2026-09-24",
        "value": 371.3411,
        "n": 2513
      },
      {
        "period": "2026-09-25",
        "value": 369.9246,
        "n": 2325
      },
      {
        "period": "2026-09-26",
        "value": 368.3137,
        "n": 2051
      },
      {
        "period": "2026-09-27",
        "value": 369.43,
        "n": 2544
      },
      {
        "period": "2026-09-28",
        "value": 366.7937,
        "n": 1837
      },
      {
        "period": "2026-09-29",
        "value": 367.9762,
        "n": 1652
      },
      {
        "period": "2026-09-30",
        "value": 368.1378,
        "n": 2146
      },
      {
        "period": "2026-10-03",
        "value": 317.2591,
        "n": 1578
      },
      {
        "period": "2026-10-04",
        "value": 294.7514,
        "n": 2031
      },
      {
        "period": "2026-10-08",
        "value": 363.3506,
        "n": 2818
      },
      {
        "period": "2026-10-09",
        "value": 369.5689,
        "n": 2515
      },
      {
        "period": "2026-11-03",
        "value": 312.5975,
        "n": 2326
      },
      {
        "period": "2026-11-04",
        "value": 313.9311,
        "n": 1971
      },
      {
        "period": "2026-11-08",
        "value": 362.8181,
        "n": 2633
      },
      {
        "period": "2026-11-09",
        "value": 368.5846,
        "n": 2346
      },
      {
        "period": "2026-12-03",
        "value": 335.8075,
        "n": 1452
      },
      {
        "period": "2026-12-04",
        "value": 320.6833,
        "n": 1897
      },
      {
        "period": "2026-12-08",
        "value": 365.5659,
        "n": 2846
      },
      {
        "period": "2026-12-09",
        "value": 368.7647,
        "n": 2313
      }
    ]
  },
  "aprilJuly": {
    "April 2026": {
      "temperature": 25.1325,
      "relativeHumidity": 52.0312,
      "pressure": 968.9413,
      "heatIndex": 24.3313,
      "refractivity": 321.8232
    },
    "July 2026": {
      "temperature": 26.6256,
      "relativeHumidity": 77.897,
      "pressure": 970.8459,
      "heatIndex": 24.668,
      "refractivity": 363.7233
    }
  },
  "model": {
    "coefficients": [
      -152.0290908426,
      -7.9003106551,
      1.038632366,
      0.3811135969,
      9.9039830323,
      0.182571476,
      0.5383422893
    ],
    "usableRows": 78838,
    "features": [
      "temperature",
      "relativeHumidity",
      "pressure",
      "heatIndex",
      "hourSin",
      "hourCos"
    ],
    "target": "refractivity",
    "validation": {
      "mae": 26.136164,
      "rmse": 31.693458,
      "r2": -4.695695,
      "bias": -23.726993,
      "mape": 7.119203,
      "n": 58217
    },
    "validationStart": "2026-08-03 00:00:18",
    "validationEnd": "2026-08-31 23:57:21",
    "trainingStart": "2026-02-03 00:00:25",
    "trainingEnd": "2026-08-31 23:57:21",
    "hourlyProfile": {
      "0": {
        "temperature": 24.881431,
        "relativeHumidity": 73.080246,
        "pressure": 970.042216,
        "heatIndex": 23.588545
      },
      "1": {
        "temperature": 24.710004,
        "relativeHumidity": 73.20397,
        "pressure": 969.444974,
        "heatIndex": 23.414437
      },
      "2": {
        "temperature": 24.482862,
        "relativeHumidity": 73.712959,
        "pressure": 969.059331,
        "heatIndex": 23.206653
      },
      "3": {
        "temperature": 24.582908,
        "relativeHumidity": 74.238497,
        "pressure": 969.180407,
        "heatIndex": 23.204286
      },
      "4": {
        "temperature": 24.470863,
        "relativeHumidity": 74.89093,
        "pressure": 969.445453,
        "heatIndex": 23.085693
      },
      "5": {
        "temperature": 24.366099,
        "relativeHumidity": 75.841067,
        "pressure": 969.96548,
        "heatIndex": 22.920364
      },
      "6": {
        "temperature": 24.51034,
        "relativeHumidity": 75.788316,
        "pressure": 970.573631,
        "heatIndex": 23.041569
      },
      "7": {
        "temperature": 24.911694,
        "relativeHumidity": 73.962036,
        "pressure": 971.226553,
        "heatIndex": 23.531957
      },
      "8": {
        "temperature": 25.641859,
        "relativeHumidity": 70.784953,
        "pressure": 971.628974,
        "heatIndex": 24.439237
      },
      "9": {
        "temperature": 26.333294,
        "relativeHumidity": 66.591797,
        "pressure": 971.698276,
        "heatIndex": 25.076853
      },
      "10": {
        "temperature": 27.107713,
        "relativeHumidity": 61.722927,
        "pressure": 971.250674,
        "heatIndex": 26.093355
      },
      "11": {
        "temperature": 27.885193,
        "relativeHumidity": 58.171655,
        "pressure": 970.577295,
        "heatIndex": 26.788487
      },
      "12": {
        "temperature": 28.535922,
        "relativeHumidity": 54.65175,
        "pressure": 969.566332,
        "heatIndex": 27.170978
      },
      "13": {
        "temperature": 29.194265,
        "relativeHumidity": 52.151046,
        "pressure": 968.683527,
        "heatIndex": 28.125784
      },
      "14": {
        "temperature": 29.377491,
        "relativeHumidity": 53.230873,
        "pressure": 968.246109,
        "heatIndex": 28.36664
      },
      "15": {
        "temperature": 28.98218,
        "relativeHumidity": 52.435851,
        "pressure": 967.784203,
        "heatIndex": 28.041109
      },
      "16": {
        "temperature": 28.199278,
        "relativeHumidity": 53.082569,
        "pressure": 967.718595,
        "heatIndex": 27.389637
      },
      "17": {
        "temperature": 27.34475,
        "relativeHumidity": 57.724685,
        "pressure": 968.246527,
        "heatIndex": 26.590898
      },
      "18": {
        "temperature": 26.674012,
        "relativeHumidity": 64.07608,
        "pressure": 969.069649,
        "heatIndex": 25.91429
      },
      "19": {
        "temperature": 26.196524,
        "relativeHumidity": 67.423792,
        "pressure": 969.807284,
        "heatIndex": 25.282803
      },
      "20": {
        "temperature": 25.890578,
        "relativeHumidity": 70.660564,
        "pressure": 970.515662,
        "heatIndex": 24.869598
      },
      "21": {
        "temperature": 25.551221,
        "relativeHumidity": 71.566683,
        "pressure": 970.929014,
        "heatIndex": 24.394734
      },
      "22": {
        "temperature": 25.227838,
        "relativeHumidity": 72.143637,
        "pressure": 971.033641,
        "heatIndex": 23.98776
      },
      "23": {
        "temperature": 24.972018,
        "relativeHumidity": 72.601228,
        "pressure": 970.545686,
        "heatIndex": 23.700834
      }
    },
    "limitations": [
      "Future environmental predictors use training-period hour-of-day climatology because no external weather source is permitted.",
      "Longer horizons should be treated as exploratory and are not equally reliable to a one-day forecast."
    ]
  },
  "dailyForecast": [
    {
      "timestamp": "2026-09-01 00:00:00",
      "date": "2026-09-01",
      "time": "00:00",
      "hour": 0,
      "temperature": 24.881431,
      "relativeHumidity": 73.080246,
      "pressure": 970.042216,
      "heatIndex": 23.588545,
      "refractivity": 331.1586
    },
    {
      "timestamp": "2026-09-01 01:00:00",
      "date": "2026-09-01",
      "time": "01:00",
      "hour": 1,
      "temperature": 24.710004,
      "relativeHumidity": 73.20397,
      "pressure": 969.444974,
      "heatIndex": 23.414437,
      "refractivity": 330.7183
    },
    {
      "timestamp": "2026-09-01 02:00:00",
      "date": "2026-09-01",
      "time": "02:00",
      "hour": 2,
      "temperature": 24.482862,
      "relativeHumidity": 73.712959,
      "pressure": 969.059331,
      "heatIndex": 23.206653,
      "refractivity": 330.8268
    },
    {
      "timestamp": "2026-09-01 03:00:00",
      "date": "2026-09-01",
      "time": "03:00",
      "hour": 3,
      "temperature": 24.582908,
      "relativeHumidity": 74.238497,
      "pressure": 969.180407,
      "heatIndex": 23.204286,
      "refractivity": 330.5573
    },
    {
      "timestamp": "2026-09-01 04:00:00",
      "date": "2026-09-01",
      "time": "04:00",
      "hour": 4,
      "temperature": 24.470863,
      "relativeHumidity": 74.89093,
      "pressure": 969.445453,
      "heatIndex": 23.085693,
      "refractivity": 330.9641
    },
    {
      "timestamp": "2026-09-01 05:00:00",
      "date": "2026-09-01",
      "time": "05:00",
      "hour": 5,
      "temperature": 24.366099,
      "relativeHumidity": 75.841067,
      "pressure": 969.96548,
      "heatIndex": 22.920364,
      "refractivity": 331.2278
    },
    {
      "timestamp": "2026-09-01 06:00:00",
      "date": "2026-09-01",
      "time": "06:00",
      "hour": 6,
      "temperature": 24.51034,
      "relativeHumidity": 75.788316,
      "pressure": 970.573631,
      "heatIndex": 23.041569,
      "refractivity": 331.3325
    },
    {
      "timestamp": "2026-09-01 07:00:00",
      "date": "2026-09-01",
      "time": "07:00",
      "hour": 7,
      "temperature": 24.911694,
      "relativeHumidity": 73.962036,
      "pressure": 971.226553,
      "heatIndex": 23.531957,
      "refractivity": 331.2249
    },
    {
      "timestamp": "2026-09-01 08:00:00",
      "date": "2026-09-01",
      "time": "08:00",
      "hour": 8,
      "temperature": 25.641859,
      "relativeHumidity": 70.784953,
      "pressure": 971.628974,
      "heatIndex": 24.439237,
      "refractivity": 331.1475
    },
    {
      "timestamp": "2026-09-01 09:00:00",
      "date": "2026-09-01",
      "time": "09:00",
      "hour": 9,
      "temperature": 26.333294,
      "relativeHumidity": 66.591797,
      "pressure": 971.698276,
      "heatIndex": 25.076853,
      "refractivity": 327.5307
    },
    {
      "timestamp": "2026-09-01 10:00:00",
      "date": "2026-09-01",
      "time": "10:00",
      "hour": 10,
      "temperature": 27.107713,
      "relativeHumidity": 61.722927,
      "pressure": 971.250674,
      "heatIndex": 26.093355,
      "refractivity": 326.129
    },
    {
      "timestamp": "2026-09-01 11:00:00",
      "date": "2026-09-01",
      "time": "11:00",
      "hour": 11,
      "temperature": 27.885193,
      "relativeHumidity": 58.171655,
      "pressure": 970.577295,
      "heatIndex": 26.788487,
      "refractivity": 322.8284
    },
    {
      "timestamp": "2026-09-01 12:00:00",
      "date": "2026-09-01",
      "time": "12:00",
      "hour": 12,
      "temperature": 28.535922,
      "relativeHumidity": 54.65175,
      "pressure": 969.566332,
      "heatIndex": 27.170978,
      "refractivity": 317.3688
    },
    {
      "timestamp": "2026-09-01 13:00:00",
      "date": "2026-09-01",
      "time": "13:00",
      "hour": 13,
      "temperature": 29.194265,
      "relativeHumidity": 52.151046,
      "pressure": 968.683527,
      "heatIndex": 28.125784,
      "refractivity": 318.6614
    },
    {
      "timestamp": "2026-09-01 14:00:00",
      "date": "2026-09-01",
      "time": "14:00",
      "hour": 14,
      "temperature": 29.377491,
      "relativeHumidity": 53.230873,
      "pressure": 968.246109,
      "heatIndex": 28.36664,
      "refractivity": 320.5639
    },
    {
      "timestamp": "2026-09-01 15:00:00",
      "date": "2026-09-01",
      "time": "15:00",
      "hour": 15,
      "temperature": 28.98218,
      "relativeHumidity": 52.435851,
      "pressure": 967.784203,
      "heatIndex": 28.041109,
      "refractivity": 319.5089
    },
    {
      "timestamp": "2026-09-01 16:00:00",
      "date": "2026-09-01",
      "time": "16:00",
      "hour": 16,
      "temperature": 28.199278,
      "relativeHumidity": 53.082569,
      "pressure": 967.718595,
      "heatIndex": 27.389637,
      "refractivity": 319.9711
    },
    {
      "timestamp": "2026-09-01 17:00:00",
      "date": "2026-09-01",
      "time": "17:00",
      "hour": 17,
      "temperature": 27.34475,
      "relativeHumidity": 57.724685,
      "pressure": 968.246527,
      "heatIndex": 26.590898,
      "refractivity": 323.9457
    },
    {
      "timestamp": "2026-09-01 18:00:00",
      "date": "2026-09-01",
      "time": "18:00",
      "hour": 18,
      "temperature": 26.674012,
      "relativeHumidity": 64.07608,
      "pressure": 969.069649,
      "heatIndex": 25.91429,
      "refractivity": 329.5872
    },
    {
      "timestamp": "2026-09-01 19:00:00",
      "date": "2026-09-01",
      "time": "19:00",
      "hour": 19,
      "temperature": 26.196524,
      "relativeHumidity": 67.423792,
      "pressure": 969.807284,
      "heatIndex": 25.282803,
      "refractivity": 331.0089
    },
    {
      "timestamp": "2026-09-01 20:00:00",
      "date": "2026-09-01",
      "time": "20:00",
      "hour": 20,
      "temperature": 25.890578,
      "relativeHumidity": 70.660564,
      "pressure": 970.515662,
      "heatIndex": 24.869598,
      "refractivity": 333.1135
    },
    {
      "timestamp": "2026-09-01 21:00:00",
      "date": "2026-09-01",
      "time": "21:00",
      "hour": 21,
      "temperature": 25.551221,
      "relativeHumidity": 71.566683,
      "pressure": 970.929014,
      "heatIndex": 24.394734,
      "refractivity": 332.3306
    },
    {
      "timestamp": "2026-09-01 22:00:00",
      "date": "2026-09-01",
      "time": "22:00",
      "hour": 22,
      "temperature": 25.227838,
      "relativeHumidity": 72.143637,
      "pressure": 971.033641,
      "heatIndex": 23.98776,
      "refractivity": 331.6173
    },
    {
      "timestamp": "2026-09-01 23:00:00",
      "date": "2026-09-01",
      "time": "23:00",
      "hour": 23,
      "temperature": 24.972018,
      "relativeHumidity": 72.601228,
      "pressure": 970.545686,
      "heatIndex": 23.700834,
      "refractivity": 331.1838
    }
  ],
  "monthlyForecast": [
    {
      "month": "September 2026",
      "key": "2026-09",
      "temperature": 26.2513,
      "relativeHumidity": 66.4058,
      "pressure": 969.8433,
      "heatIndex": 25.0928,
      "refractivity": 327.6878,
      "hours": 720
    },
    {
      "month": "October 2026",
      "key": "2026-10",
      "temperature": 26.2513,
      "relativeHumidity": 66.4058,
      "pressure": 969.8433,
      "heatIndex": 25.0928,
      "refractivity": 327.6878,
      "hours": 744
    },
    {
      "month": "November 2026",
      "key": "2026-11",
      "temperature": 26.2513,
      "relativeHumidity": 66.4058,
      "pressure": 969.8433,
      "heatIndex": 25.0928,
      "refractivity": 327.6878,
      "hours": 720
    },
    {
      "month": "December 2026",
      "key": "2026-12",
      "temperature": 26.2513,
      "relativeHumidity": 66.4058,
      "pressure": 969.8433,
      "heatIndex": 25.0928,
      "refractivity": 327.6878,
      "hours": 744
    }
  ],
  "recentObservations": [
    {
      "timestamp": "2026-12-09 23:31:57",
      "temperature": 25.5,
      "relativeHumidity": 84.77,
      "pressure": 971.57,
      "heatIndex": null,
      "refractivity": 368.13
    },
    {
      "timestamp": "2026-12-09 23:32:56",
      "temperature": 22.98,
      "relativeHumidity": 94.98,
      "pressure": 971.64,
      "heatIndex": null,
      "refractivity": 367.97
    },
    {
      "timestamp": "2026-12-09 23:33:23",
      "temperature": 25.34,
      "relativeHumidity": 85.15,
      "pressure": 971.55,
      "heatIndex": null,
      "refractivity": 367.81
    },
    {
      "timestamp": "2026-12-09 23:35:11",
      "temperature": 22.92,
      "relativeHumidity": 95.7,
      "pressure": 971.57,
      "heatIndex": null,
      "refractivity": 368.5
    },
    {
      "timestamp": "2026-12-09 23:35:37",
      "temperature": 25.3,
      "relativeHumidity": 85.75,
      "pressure": 971.52,
      "heatIndex": null,
      "refractivity": 368.39
    },
    {
      "timestamp": "2026-12-09 23:36:03",
      "temperature": 23.17,
      "relativeHumidity": 94.13,
      "pressure": 971.54,
      "heatIndex": null,
      "refractivity": 367.88
    },
    {
      "timestamp": "2026-12-09 23:37:34",
      "temperature": 25.78,
      "relativeHumidity": 83.15,
      "pressure": 971.5,
      "heatIndex": null,
      "refractivity": 367.37
    },
    {
      "timestamp": "2026-12-09 23:38:02",
      "temperature": 23.47,
      "relativeHumidity": 92.83,
      "pressure": 971.51,
      "heatIndex": null,
      "refractivity": 367.88
    },
    {
      "timestamp": "2026-12-09 23:38:29",
      "temperature": 25.7,
      "relativeHumidity": 84.16,
      "pressure": 971.41,
      "heatIndex": null,
      "refractivity": 368.31
    },
    {
      "timestamp": "2026-12-09 23:38:55",
      "temperature": 23.29,
      "relativeHumidity": 93.16,
      "pressure": 971.53,
      "heatIndex": null,
      "refractivity": 367.33
    },
    {
      "timestamp": "2026-12-09 23:39:22",
      "temperature": 25.5,
      "relativeHumidity": 84.32,
      "pressure": 971.51,
      "heatIndex": null,
      "refractivity": 367.5
    },
    {
      "timestamp": "2026-12-09 23:39:48",
      "temperature": 23.35,
      "relativeHumidity": 93.33,
      "pressure": 971.4,
      "heatIndex": null,
      "refractivity": 367.82
    },
    {
      "timestamp": "2026-12-09 23:40:14",
      "temperature": 25.54,
      "relativeHumidity": 84.41,
      "pressure": 971.4,
      "heatIndex": null,
      "refractivity": 367.81
    },
    {
      "timestamp": "2026-12-09 23:40:40",
      "temperature": 23.29,
      "relativeHumidity": 93.5,
      "pressure": 971.41,
      "heatIndex": null,
      "refractivity": 367.71
    },
    {
      "timestamp": "2026-12-09 23:41:07",
      "temperature": 25.4,
      "relativeHumidity": 84.39,
      "pressure": 971.46,
      "heatIndex": null,
      "refractivity": 367.06
    },
    {
      "timestamp": "2026-12-09 23:41:33",
      "temperature": 23.25,
      "relativeHumidity": 93.74,
      "pressure": 971.34,
      "heatIndex": null,
      "refractivity": 367.77
    },
    {
      "timestamp": "2026-12-09 23:41:59",
      "temperature": 25.48,
      "relativeHumidity": 84.63,
      "pressure": 971.36,
      "heatIndex": null,
      "refractivity": 367.79
    },
    {
      "timestamp": "2026-12-09 23:42:26",
      "temperature": 23.25,
      "relativeHumidity": 93.84,
      "pressure": 971.33,
      "heatIndex": null,
      "refractivity": 367.89
    },
    {
      "timestamp": "2026-12-09 23:42:53",
      "temperature": 25.38,
      "relativeHumidity": 84.72,
      "pressure": 971.36,
      "heatIndex": null,
      "refractivity": 367.38
    },
    {
      "timestamp": "2026-12-09 23:43:19",
      "temperature": 23.19,
      "relativeHumidity": 93.71,
      "pressure": 971.31,
      "heatIndex": null,
      "refractivity": 367.41
    },
    {
      "timestamp": "2026-12-09 23:43:45",
      "temperature": 25.44,
      "relativeHumidity": 84.81,
      "pressure": 971.3,
      "heatIndex": null,
      "refractivity": 367.8
    },
    {
      "timestamp": "2026-12-09 23:44:11",
      "temperature": 23.17,
      "relativeHumidity": 93.9,
      "pressure": 971.36,
      "heatIndex": null,
      "refractivity": 367.55
    },
    {
      "timestamp": "2026-12-09 23:44:38",
      "temperature": 25.38,
      "relativeHumidity": 84.88,
      "pressure": 971.33,
      "heatIndex": null,
      "refractivity": 367.59
    },
    {
      "timestamp": "2026-12-09 23:45:04",
      "temperature": 23.19,
      "relativeHumidity": 93.96,
      "pressure": 971.23,
      "heatIndex": null,
      "refractivity": 367.7
    },
    {
      "timestamp": "2026-12-09 23:45:30",
      "temperature": 25.32,
      "relativeHumidity": 84.89,
      "pressure": 971.29,
      "heatIndex": null,
      "refractivity": 367.28
    },
    {
      "timestamp": "2026-12-09 23:45:57",
      "temperature": 23.08,
      "relativeHumidity": 94.01,
      "pressure": 971.28,
      "heatIndex": null,
      "refractivity": 367.25
    },
    {
      "timestamp": "2026-12-09 23:46:24",
      "temperature": 25.28,
      "relativeHumidity": 84.83,
      "pressure": 971.33,
      "heatIndex": null,
      "refractivity": 367.0
    },
    {
      "timestamp": "2026-12-09 23:46:50",
      "temperature": 23.21,
      "relativeHumidity": 94.0,
      "pressure": 971.27,
      "heatIndex": null,
      "refractivity": 367.86
    },
    {
      "timestamp": "2026-12-09 23:47:16",
      "temperature": 25.38,
      "relativeHumidity": 85.04,
      "pressure": 971.25,
      "heatIndex": null,
      "refractivity": 367.78
    },
    {
      "timestamp": "2026-12-09 23:47:43",
      "temperature": 23.14,
      "relativeHumidity": 93.92,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 367.44
    },
    {
      "timestamp": "2026-12-09 23:48:21",
      "temperature": 25.48,
      "relativeHumidity": 84.31,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 367.32
    },
    {
      "timestamp": "2026-12-09 23:48:51",
      "temperature": 23.25,
      "relativeHumidity": 93.75,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 367.76
    },
    {
      "timestamp": "2026-12-09 23:49:29",
      "temperature": 25.46,
      "relativeHumidity": 84.2,
      "pressure": 971.3,
      "heatIndex": null,
      "refractivity": 367.08
    },
    {
      "timestamp": "2026-12-09 23:50:09",
      "temperature": 23.19,
      "relativeHumidity": 94.32,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 368.13
    },
    {
      "timestamp": "2026-12-09 23:50:36",
      "temperature": 25.32,
      "relativeHumidity": 85.06,
      "pressure": 971.28,
      "heatIndex": null,
      "refractivity": 367.51
    },
    {
      "timestamp": "2026-12-09 23:51:14",
      "temperature": 23.17,
      "relativeHumidity": 94.41,
      "pressure": 971.3,
      "heatIndex": null,
      "refractivity": 368.16
    },
    {
      "timestamp": "2026-12-09 23:51:52",
      "temperature": 25.52,
      "relativeHumidity": 84.48,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 367.76
    },
    {
      "timestamp": "2026-12-09 23:52:29",
      "temperature": 23.06,
      "relativeHumidity": 94.08,
      "pressure": 971.17,
      "heatIndex": null,
      "refractivity": 367.2
    },
    {
      "timestamp": "2026-12-09 23:52:56",
      "temperature": 25.3,
      "relativeHumidity": 84.83,
      "pressure": 971.3,
      "heatIndex": null,
      "refractivity": 367.09
    },
    {
      "timestamp": "2026-12-09 23:53:23",
      "temperature": 23.12,
      "relativeHumidity": 93.77,
      "pressure": 971.25,
      "heatIndex": null,
      "refractivity": 367.16
    },
    {
      "timestamp": "2026-12-09 23:53:52",
      "temperature": 25.42,
      "relativeHumidity": 84.48,
      "pressure": 971.29,
      "heatIndex": null,
      "refractivity": 367.24
    },
    {
      "timestamp": "2026-12-09 23:54:30",
      "temperature": 23.04,
      "relativeHumidity": 94.17,
      "pressure": 971.3,
      "heatIndex": null,
      "refractivity": 367.23
    },
    {
      "timestamp": "2026-12-09 23:54:57",
      "temperature": 25.4,
      "relativeHumidity": 84.88,
      "pressure": 971.18,
      "heatIndex": null,
      "refractivity": 367.65
    },
    {
      "timestamp": "2026-12-09 23:55:26",
      "temperature": 23.19,
      "relativeHumidity": 93.9,
      "pressure": 971.24,
      "heatIndex": null,
      "refractivity": 367.63
    },
    {
      "timestamp": "2026-12-09 23:55:54",
      "temperature": 25.42,
      "relativeHumidity": 84.59,
      "pressure": 971.25,
      "heatIndex": null,
      "refractivity": 367.38
    },
    {
      "timestamp": "2026-12-09 23:56:25",
      "temperature": 23.19,
      "relativeHumidity": 93.85,
      "pressure": 971.18,
      "heatIndex": null,
      "refractivity": 367.55
    },
    {
      "timestamp": "2026-12-09 23:56:54",
      "temperature": 25.44,
      "relativeHumidity": 84.68,
      "pressure": 971.19,
      "heatIndex": null,
      "refractivity": 367.59
    },
    {
      "timestamp": "2026-12-09 23:57:23",
      "temperature": 23.17,
      "relativeHumidity": 93.68,
      "pressure": 971.2,
      "heatIndex": null,
      "refractivity": 367.25
    }
  ],
  "holdoutAvailable": true,
  "holdoutPreview": [
    {
      "timestamp": "2026-09-03 01:40:12",
      "temperature": 23.0,
      "relativeHumidity": 75.0,
      "pressure": 966.21,
      "heatIndex": 23.31,
      "refractivity": 342.76
    },
    {
      "timestamp": "2026-09-03 01:40:39",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.18,
      "heatIndex": 23.39,
      "refractivity": 346.08
    },
    {
      "timestamp": "2026-09-03 01:41:05",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.26,
      "heatIndex": 23.39,
      "refractivity": 346.1
    },
    {
      "timestamp": "2026-09-03 01:41:31",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.24,
      "heatIndex": 23.39,
      "refractivity": 346.09
    },
    {
      "timestamp": "2026-09-03 01:41:58",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.18,
      "heatIndex": 23.39,
      "refractivity": 346.08
    },
    {
      "timestamp": "2026-09-03 01:42:24",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.25,
      "heatIndex": 23.39,
      "refractivity": 346.09
    },
    {
      "timestamp": "2026-09-03 01:42:50",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.2,
      "heatIndex": 23.39,
      "refractivity": 346.08
    },
    {
      "timestamp": "2026-09-03 01:43:17",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.17,
      "heatIndex": 23.39,
      "refractivity": 346.07
    },
    {
      "timestamp": "2026-09-03 01:43:43",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.2,
      "heatIndex": 23.39,
      "refractivity": 346.08
    },
    {
      "timestamp": "2026-09-03 01:44:10",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.2,
      "heatIndex": 23.39,
      "refractivity": 346.08
    },
    {
      "timestamp": "2026-09-03 01:44:36",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.11,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:45:02",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.14,
      "heatIndex": 23.39,
      "refractivity": 346.07
    },
    {
      "timestamp": "2026-09-03 01:45:29",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.15,
      "heatIndex": 23.39,
      "refractivity": 346.07
    },
    {
      "timestamp": "2026-09-03 01:45:55",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.1,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:46:22",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.1,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:46:48",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.12,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:47:14",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.12,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:47:41",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.12,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:48:19",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.14,
      "heatIndex": 23.39,
      "refractivity": 346.07
    },
    {
      "timestamp": "2026-09-03 01:48:44",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.07,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:49:12",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.06,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:49:39",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.13,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:50:05",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.06,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:50:30",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.08,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:50:53",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.07,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:51:19",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.04,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:51:45",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.14,
      "heatIndex": 23.39,
      "refractivity": 346.07
    },
    {
      "timestamp": "2026-09-03 01:52:12",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.02,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:52:39",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.04,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:53:05",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.04,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:53:31",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.09,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:53:57",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.05,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:54:24",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.01,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:54:51",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.1,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:55:16",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 964.99,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:55:43",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.06,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:56:09",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.03,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:56:36",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.01,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:57:08",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 964.99,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:57:36",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 964.99,
      "heatIndex": 23.39,
      "refractivity": 346.03
    },
    {
      "timestamp": "2026-09-03 01:58:03",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.09,
      "heatIndex": 23.39,
      "refractivity": 346.05
    },
    {
      "timestamp": "2026-09-03 01:58:28",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.04,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:58:51",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.03,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 01:59:18",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.13,
      "heatIndex": 23.39,
      "refractivity": 346.06
    },
    {
      "timestamp": "2026-09-03 01:59:44",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.05,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 02:00:10",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.03,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 02:01:32",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.06,
      "heatIndex": 23.39,
      "refractivity": 346.04
    },
    {
      "timestamp": "2026-09-03 02:02:03",
      "temperature": 23.0,
      "relativeHumidity": 78.0,
      "pressure": 965.08,
      "heatIndex": 23.39,
      "refractivity": 346.05
    }
  ]
} as const;

export type AuraData = typeof auraData;
