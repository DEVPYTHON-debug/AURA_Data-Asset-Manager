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
    }
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
    "weekdayHourlyProfile": {
      "24": {
        "temperature": 24.707413,
        "relativeHumidity": 70.771741,
        "pressure": 970.099624,
        "heatIndex": 23.495936
      },
      "25": {
        "temperature": 24.449293,
        "relativeHumidity": 71.991273,
        "pressure": 969.343185,
        "heatIndex": 23.259301
      },
      "26": {
        "temperature": 24.210417,
        "relativeHumidity": 73.502626,
        "pressure": 968.949463,
        "heatIndex": 22.940393
      },
      "27": {
        "temperature": 24.401874,
        "relativeHumidity": 74.874234,
        "pressure": 969.158344,
        "heatIndex": 23.171106
      },
      "28": {
        "temperature": 24.237009,
        "relativeHumidity": 74.267074,
        "pressure": 969.510289,
        "heatIndex": 23.164964
      },
      "29": {
        "temperature": 24.029233,
        "relativeHumidity": 74.118768,
        "pressure": 970.075745,
        "heatIndex": 22.74643
      },
      "30": {
        "temperature": 24.154912,
        "relativeHumidity": 73.831917,
        "pressure": 970.526118,
        "heatIndex": 22.747001
      },
      "31": {
        "temperature": 24.647275,
        "relativeHumidity": 69.520525,
        "pressure": 971.114795,
        "heatIndex": 23.33741
      },
      "32": {
        "temperature": 25.595685,
        "relativeHumidity": 69.1575,
        "pressure": 971.792772,
        "heatIndex": 24.296746
      },
      "33": {
        "temperature": 26.277507,
        "relativeHumidity": 64.764636,
        "pressure": 971.718622,
        "heatIndex": 25.030172
      },
      "34": {
        "temperature": 27.080325,
        "relativeHumidity": 57.002109,
        "pressure": 970.977891,
        "heatIndex": 26.161077
      },
      "35": {
        "temperature": 28.09888,
        "relativeHumidity": 53.322216,
        "pressure": 970.275669,
        "heatIndex": 26.819623
      },
      "36": {
        "temperature": 28.925149,
        "relativeHumidity": 47.121092,
        "pressure": 969.150772,
        "heatIndex": 27.156796
      },
      "37": {
        "temperature": 30.303378,
        "relativeHumidity": 41.707615,
        "pressure": 968.273112,
        "heatIndex": 28.242852
      },
      "38": {
        "temperature": 30.817592,
        "relativeHumidity": 45.74339,
        "pressure": 968.136528,
        "heatIndex": 28.720987
      },
      "39": {
        "temperature": 29.422877,
        "relativeHumidity": 46.580774,
        "pressure": 967.719689,
        "heatIndex": 27.880798
      },
      "40": {
        "temperature": 28.773703,
        "relativeHumidity": 49.766859,
        "pressure": 967.641062,
        "heatIndex": 27.207817
      },
      "41": {
        "temperature": 27.906887,
        "relativeHumidity": 55.714137,
        "pressure": 968.3945,
        "heatIndex": 26.526403
      },
      "42": {
        "temperature": 27.196635,
        "relativeHumidity": 62.921389,
        "pressure": 969.11654,
        "heatIndex": 25.911451
      },
      "43": {
        "temperature": 26.624783,
        "relativeHumidity": 69.327201,
        "pressure": 970.09423,
        "heatIndex": 25.083106
      },
      "44": {
        "temperature": 26.283601,
        "relativeHumidity": 71.998102,
        "pressure": 970.778455,
        "heatIndex": 24.819582
      },
      "45": {
        "temperature": 25.604899,
        "relativeHumidity": 69.84602,
        "pressure": 970.925783,
        "heatIndex": 23.938245
      },
      "46": {
        "temperature": 25.184776,
        "relativeHumidity": 70.63538,
        "pressure": 970.849908,
        "heatIndex": 23.453257
      },
      "47": {
        "temperature": 25.049697,
        "relativeHumidity": 72.205043,
        "pressure": 970.383701,
        "heatIndex": 23.076122
      },
      "48": {
        "temperature": 25.031259,
        "relativeHumidity": 71.402207,
        "pressure": 969.694104,
        "heatIndex": 23.178902
      },
      "49": {
        "temperature": 24.818255,
        "relativeHumidity": 71.776867,
        "pressure": 968.915633,
        "heatIndex": 23.106919
      },
      "50": {
        "temperature": 24.617752,
        "relativeHumidity": 71.949064,
        "pressure": 968.526659,
        "heatIndex": 23.109432
      },
      "51": {
        "temperature": 24.881233,
        "relativeHumidity": 70.906835,
        "pressure": 968.652318,
        "heatIndex": 23.262523
      },
      "52": {
        "temperature": 24.543694,
        "relativeHumidity": 69.535098,
        "pressure": 968.574116,
        "heatIndex": 23.241502
      },
      "53": {
        "temperature": 24.810767,
        "relativeHumidity": 71.262673,
        "pressure": 969.278007,
        "heatIndex": 23.222706
      },
      "54": {
        "temperature": 24.769617,
        "relativeHumidity": 71.386057,
        "pressure": 969.732837,
        "heatIndex": 23.505543
      },
      "55": {
        "temperature": 24.69403,
        "relativeHumidity": 71.245116,
        "pressure": 970.384113,
        "heatIndex": 23.458392
      },
      "56": {
        "temperature": 25.382775,
        "relativeHumidity": 67.010853,
        "pressure": 971.104804,
        "heatIndex": 24.365577
      },
      "57": {
        "temperature": 26.154823,
        "relativeHumidity": 62.570415,
        "pressure": 971.023748,
        "heatIndex": 24.599234
      },
      "58": {
        "temperature": 27.239874,
        "relativeHumidity": 59.355147,
        "pressure": 970.61174,
        "heatIndex": 26.129275
      },
      "59": {
        "temperature": 27.965661,
        "relativeHumidity": 55.593262,
        "pressure": 970.030803,
        "heatIndex": 26.603024
      },
      "60": {
        "temperature": 28.565906,
        "relativeHumidity": 50.568817,
        "pressure": 969.197644,
        "heatIndex": 26.824139
      },
      "61": {
        "temperature": 29.325483,
        "relativeHumidity": 50.218427,
        "pressure": 968.384373,
        "heatIndex": 28.011059
      },
      "62": {
        "temperature": 28.790985,
        "relativeHumidity": 56.875193,
        "pressure": 968.311784,
        "heatIndex": 27.156161
      },
      "63": {
        "temperature": 28.128708,
        "relativeHumidity": 55.730174,
        "pressure": 967.74554,
        "heatIndex": 26.601233
      },
      "64": {
        "temperature": 27.829239,
        "relativeHumidity": 56.12712,
        "pressure": 967.621422,
        "heatIndex": 26.844954
      },
      "65": {
        "temperature": 27.222871,
        "relativeHumidity": 56.649286,
        "pressure": 967.938365,
        "heatIndex": 26.476143
      },
      "66": {
        "temperature": 26.402658,
        "relativeHumidity": 61.91387,
        "pressure": 968.493177,
        "heatIndex": 25.710352
      },
      "67": {
        "temperature": 25.858188,
        "relativeHumidity": 65.548566,
        "pressure": 969.05531,
        "heatIndex": 24.850106
      },
      "68": {
        "temperature": 25.349484,
        "relativeHumidity": 68.937492,
        "pressure": 969.706953,
        "heatIndex": 24.255008
      },
      "69": {
        "temperature": 25.193196,
        "relativeHumidity": 70.569132,
        "pressure": 970.211619,
        "heatIndex": 23.831635
      },
      "70": {
        "temperature": 25.26623,
        "relativeHumidity": 72.309383,
        "pressure": 970.574445,
        "heatIndex": 23.869163
      },
      "71": {
        "temperature": 24.717157,
        "relativeHumidity": 72.292923,
        "pressure": 969.888158,
        "heatIndex": 23.064449
      },
      "144": {
        "temperature": 24.986644,
        "relativeHumidity": 72.416926,
        "pressure": 969.840692,
        "heatIndex": 23.68977
      },
      "145": {
        "temperature": 24.890601,
        "relativeHumidity": 72.715419,
        "pressure": 969.453135,
        "heatIndex": 23.620029
      },
      "146": {
        "temperature": 24.707176,
        "relativeHumidity": 74.322238,
        "pressure": 969.223344,
        "heatIndex": 23.246122
      },
      "147": {
        "temperature": 25.031302,
        "relativeHumidity": 73.243398,
        "pressure": 969.351483,
        "heatIndex": 23.565475
      },
      "148": {
        "temperature": 24.762188,
        "relativeHumidity": 74.469249,
        "pressure": 969.534525,
        "heatIndex": 23.401742
      },
      "149": {
        "temperature": 24.586075,
        "relativeHumidity": 76.737973,
        "pressure": 970.030183,
        "heatIndex": 23.243815
      },
      "150": {
        "temperature": 24.721578,
        "relativeHumidity": 76.828223,
        "pressure": 970.759377,
        "heatIndex": 23.183577
      },
      "151": {
        "temperature": 25.305957,
        "relativeHumidity": 78.598439,
        "pressure": 971.594152,
        "heatIndex": 24.274924
      },
      "152": {
        "temperature": 26.208059,
        "relativeHumidity": 73.995866,
        "pressure": 971.849364,
        "heatIndex": 25.099791
      },
      "153": {
        "temperature": 26.809551,
        "relativeHumidity": 67.847089,
        "pressure": 971.952965,
        "heatIndex": 25.363
      },
      "154": {
        "temperature": 27.213712,
        "relativeHumidity": 62.028649,
        "pressure": 971.505719,
        "heatIndex": 25.620256
      },
      "155": {
        "temperature": 28.164798,
        "relativeHumidity": 58.367524,
        "pressure": 970.828325,
        "heatIndex": 26.393936
      },
      "156": {
        "temperature": 28.877887,
        "relativeHumidity": 59.448141,
        "pressure": 970.218582,
        "heatIndex": 26.293816
      },
      "157": {
        "temperature": 28.854002,
        "relativeHumidity": 54.333057,
        "pressure": 969.287027,
        "heatIndex": 27.345941
      },
      "158": {
        "temperature": 29.395904,
        "relativeHumidity": 57.314297,
        "pressure": 968.684458,
        "heatIndex": 28.26511
      },
      "159": {
        "temperature": 29.039407,
        "relativeHumidity": 58.326444,
        "pressure": 968.372333,
        "heatIndex": 28.111752
      },
      "160": {
        "temperature": 28.255836,
        "relativeHumidity": 56.024287,
        "pressure": 968.025015,
        "heatIndex": 27.571082
      },
      "161": {
        "temperature": 27.739579,
        "relativeHumidity": 58.650593,
        "pressure": 968.536243,
        "heatIndex": 26.917802
      },
      "162": {
        "temperature": 26.862684,
        "relativeHumidity": 65.885067,
        "pressure": 969.346862,
        "heatIndex": 25.569414
      },
      "163": {
        "temperature": 26.329556,
        "relativeHumidity": 70.319154,
        "pressure": 970.159948,
        "heatIndex": 24.706224
      },
      "164": {
        "temperature": 26.248802,
        "relativeHumidity": 72.743325,
        "pressure": 970.858898,
        "heatIndex": 25.396424
      },
      "165": {
        "temperature": 26.104432,
        "relativeHumidity": 73.324067,
        "pressure": 971.164556,
        "heatIndex": 25.016308
      },
      "166": {
        "temperature": 25.663838,
        "relativeHumidity": 74.471059,
        "pressure": 971.266898,
        "heatIndex": 24.163065
      },
      "167": {
        "temperature": 25.386378,
        "relativeHumidity": 73.497098,
        "pressure": 970.658584,
        "heatIndex": 24.174323
      },
      "0": {
        "temperature": 24.993228,
        "relativeHumidity": 73.396965,
        "pressure": 970.27996,
        "heatIndex": 23.933405
      },
      "1": {
        "temperature": 24.873543,
        "relativeHumidity": 73.137026,
        "pressure": 969.66617,
        "heatIndex": 23.770945
      },
      "2": {
        "temperature": 24.581286,
        "relativeHumidity": 73.013448,
        "pressure": 969.118152,
        "heatIndex": 23.490744
      },
      "3": {
        "temperature": 24.539886,
        "relativeHumidity": 74.37749,
        "pressure": 969.236281,
        "heatIndex": 23.296358
      },
      "4": {
        "temperature": 24.345008,
        "relativeHumidity": 74.311275,
        "pressure": 969.415238,
        "heatIndex": 23.140463
      },
      "5": {
        "temperature": 24.348327,
        "relativeHumidity": 75.221359,
        "pressure": 969.9792,
        "heatIndex": 23.038141
      },
      "6": {
        "temperature": 24.556502,
        "relativeHumidity": 76.863759,
        "pressure": 970.856948,
        "heatIndex": 23.231287
      },
      "7": {
        "temperature": 25.100833,
        "relativeHumidity": 76.173684,
        "pressure": 971.517212,
        "heatIndex": 23.724511
      },
      "8": {
        "temperature": 25.748743,
        "relativeHumidity": 70.948482,
        "pressure": 971.634345,
        "heatIndex": 24.534709
      },
      "9": {
        "temperature": 26.260037,
        "relativeHumidity": 68.248733,
        "pressure": 971.92345,
        "heatIndex": 24.916208
      },
      "10": {
        "temperature": 26.955173,
        "relativeHumidity": 66.087959,
        "pressure": 971.724712,
        "heatIndex": 25.834474
      },
      "11": {
        "temperature": 27.695626,
        "relativeHumidity": 63.593505,
        "pressure": 970.992411,
        "heatIndex": 26.671923
      },
      "12": {
        "temperature": 28.354206,
        "relativeHumidity": 60.855095,
        "pressure": 969.9731,
        "heatIndex": 27.419736
      },
      "13": {
        "temperature": 29.199278,
        "relativeHumidity": 52.935567,
        "pressure": 968.980806,
        "heatIndex": 28.441611
      },
      "14": {
        "temperature": 29.302464,
        "relativeHumidity": 54.075614,
        "pressure": 968.751588,
        "heatIndex": 28.46963
      },
      "15": {
        "temperature": 29.256321,
        "relativeHumidity": 51.202492,
        "pressure": 968.022309,
        "heatIndex": 28.323279
      },
      "17": {
        "temperature": 27.513483,
        "relativeHumidity": 56.883197,
        "pressure": 968.427259,
        "heatIndex": 26.918327
      },
      "18": {
        "temperature": 26.754988,
        "relativeHumidity": 60.668428,
        "pressure": 969.327893,
        "heatIndex": 26.32888
      },
      "19": {
        "temperature": 26.108457,
        "relativeHumidity": 64.417517,
        "pressure": 970.252541,
        "heatIndex": 25.3338
      },
      "20": {
        "temperature": 25.803312,
        "relativeHumidity": 67.636309,
        "pressure": 970.815702,
        "heatIndex": 24.950726
      },
      "21": {
        "temperature": 25.479715,
        "relativeHumidity": 68.558781,
        "pressure": 971.108878,
        "heatIndex": 24.69173
      },
      "22": {
        "temperature": 24.92033,
        "relativeHumidity": 70.277746,
        "pressure": 971.243045,
        "heatIndex": 23.892408
      },
      "23": {
        "temperature": 24.71928,
        "relativeHumidity": 71.556777,
        "pressure": 970.761477,
        "heatIndex": 23.689919
      },
      "111": {
        "temperature": 29.380594,
        "relativeHumidity": 48.808554,
        "pressure": 967.041255,
        "heatIndex": 28.179726
      },
      "112": {
        "temperature": 28.415587,
        "relativeHumidity": 54.642187,
        "pressure": 967.591318,
        "heatIndex": 27.724131
      },
      "113": {
        "temperature": 27.349842,
        "relativeHumidity": 58.093094,
        "pressure": 967.970108,
        "heatIndex": 26.191526
      },
      "114": {
        "temperature": 27.105666,
        "relativeHumidity": 62.676044,
        "pressure": 968.793616,
        "heatIndex": 26.028096
      },
      "115": {
        "temperature": 26.523901,
        "relativeHumidity": 66.450157,
        "pressure": 969.598325,
        "heatIndex": 25.41732
      },
      "116": {
        "temperature": 26.491052,
        "relativeHumidity": 68.584955,
        "pressure": 970.438062,
        "heatIndex": 25.146795
      },
      "117": {
        "temperature": 26.070087,
        "relativeHumidity": 70.642634,
        "pressure": 970.779913,
        "heatIndex": 24.25674
      },
      "118": {
        "temperature": 25.627985,
        "relativeHumidity": 72.75613,
        "pressure": 970.979056,
        "heatIndex": 23.473836
      },
      "119": {
        "temperature": 25.190673,
        "relativeHumidity": 72.247884,
        "pressure": 970.508367,
        "heatIndex": 23.435179
      },
      "120": {
        "temperature": 24.616947,
        "relativeHumidity": 73.177372,
        "pressure": 969.925025,
        "heatIndex": 23.422616
      },
      "121": {
        "temperature": 24.439714,
        "relativeHumidity": 72.057246,
        "pressure": 969.324145,
        "heatIndex": 23.348993
      },
      "122": {
        "temperature": 24.410871,
        "relativeHumidity": 72.032558,
        "pressure": 968.922613,
        "heatIndex": 23.342
      },
      "123": {
        "temperature": 24.309469,
        "relativeHumidity": 72.01859,
        "pressure": 968.930402,
        "heatIndex": 23.201091
      },
      "124": {
        "temperature": 24.40641,
        "relativeHumidity": 73.996842,
        "pressure": 969.466777,
        "heatIndex": 23.10702
      },
      "125": {
        "temperature": 24.243027,
        "relativeHumidity": 75.104408,
        "pressure": 970.080956,
        "heatIndex": 22.931908
      },
      "126": {
        "temperature": 24.155499,
        "relativeHumidity": 74.770273,
        "pressure": 970.477516,
        "heatIndex": 22.979427
      },
      "127": {
        "temperature": 24.462762,
        "relativeHumidity": 71.836263,
        "pressure": 971.007073,
        "heatIndex": 23.554678
      },
      "128": {
        "temperature": 25.187597,
        "relativeHumidity": 70.023785,
        "pressure": 971.555056,
        "heatIndex": 24.336457
      },
      "129": {
        "temperature": 25.837361,
        "relativeHumidity": 64.290032,
        "pressure": 971.54362,
        "heatIndex": 25.086058
      },
      "130": {
        "temperature": 26.698435,
        "relativeHumidity": 55.51973,
        "pressure": 970.969611,
        "heatIndex": 26.024807
      },
      "131": {
        "temperature": 27.51835,
        "relativeHumidity": 49.561908,
        "pressure": 970.108243,
        "heatIndex": 26.793545
      },
      "132": {
        "temperature": 28.337187,
        "relativeHumidity": 45.867754,
        "pressure": 969.108952,
        "heatIndex": 27.346237
      },
      "133": {
        "temperature": 28.933273,
        "relativeHumidity": 52.860858,
        "pressure": 968.404774,
        "heatIndex": 28.840417
      },
      "135": {
        "temperature": 29.271688,
        "relativeHumidity": 45.633132,
        "pressure": 967.047094,
        "heatIndex": 28.886829
      },
      "136": {
        "temperature": 28.242016,
        "relativeHumidity": 45.624188,
        "pressure": 967.172832,
        "heatIndex": 27.739194
      },
      "137": {
        "temperature": 27.102321,
        "relativeHumidity": 53.805671,
        "pressure": 967.819793,
        "heatIndex": 26.889459
      },
      "138": {
        "temperature": 26.239173,
        "relativeHumidity": 62.495168,
        "pressure": 968.66968,
        "heatIndex": 26.083206
      },
      "142": {
        "temperature": 24.965215,
        "relativeHumidity": 70.715164,
        "pressure": 970.723258,
        "heatIndex": 24.704862
      },
      "143": {
        "temperature": 24.787754,
        "relativeHumidity": 70.998235,
        "pressure": 970.175247,
        "heatIndex": 24.364831
      },
      "16": {
        "temperature": 28.326504,
        "relativeHumidity": 50.974359,
        "pressure": 967.543897,
        "heatIndex": 27.387353
      },
      "83": {
        "temperature": 27.864016,
        "relativeHumidity": 64.357421,
        "pressure": 971.459276,
        "heatIndex": 27.103718
      },
      "84": {
        "temperature": 27.989204,
        "relativeHumidity": 66.985673,
        "pressure": 970.59157,
        "heatIndex": 27.120571
      },
      "90": {
        "temperature": 25.902971,
        "relativeHumidity": 74.36605,
        "pressure": 969.886286,
        "heatIndex": 25.066919
      },
      "91": {
        "temperature": 26.103103,
        "relativeHumidity": 71.823492,
        "pressure": 970.477121,
        "heatIndex": 26.235105
      },
      "134": {
        "temperature": 29.529202,
        "relativeHumidity": 45.935254,
        "pressure": 967.450842,
        "heatIndex": 28.851473
      },
      "139": {
        "temperature": 25.793733,
        "relativeHumidity": 65.445353,
        "pressure": 969.156918,
        "heatIndex": 25.40665
      },
      "140": {
        "temperature": 25.407484,
        "relativeHumidity": 70.065111,
        "pressure": 969.905209,
        "heatIndex": 24.897972
      },
      "141": {
        "temperature": 25.059361,
        "relativeHumidity": 71.827796,
        "pressure": 970.634782,
        "heatIndex": 24.583462
      },
      "96": {
        "temperature": 25.133147,
        "relativeHumidity": 76.276719,
        "pressure": 970.309545,
        "heatIndex": 23.481203
      },
      "103": {
        "temperature": 25.417786,
        "relativeHumidity": 74.688989,
        "pressure": 971.261221,
        "heatIndex": 23.189312
      },
      "104": {
        "temperature": 25.825403,
        "relativeHumidity": 70.610466,
        "pressure": 971.319338,
        "heatIndex": 24.252756
      },
      "105": {
        "temperature": 26.566242,
        "relativeHumidity": 66.699227,
        "pressure": 971.338578,
        "heatIndex": 25.316829
      },
      "106": {
        "temperature": 27.385534,
        "relativeHumidity": 65.713839,
        "pressure": 971.021548,
        "heatIndex": 26.501074
      },
      "107": {
        "temperature": 27.852726,
        "relativeHumidity": 63.164725,
        "pressure": 970.379885,
        "heatIndex": 27.247592
      },
      "108": {
        "temperature": 28.555646,
        "relativeHumidity": 56.44148,
        "pressure": 969.072643,
        "heatIndex": 27.527198
      },
      "109": {
        "temperature": 29.172455,
        "relativeHumidity": 51.276437,
        "pressure": 967.949293,
        "heatIndex": 27.863808
      },
      "110": {
        "temperature": 29.173938,
        "relativeHumidity": 52.059936,
        "pressure": 967.39897,
        "heatIndex": 28.270728
      },
      "72": {
        "temperature": 24.551977,
        "relativeHumidity": 74.693356,
        "pressure": 970.12377,
        "heatIndex": 23.895536
      },
      "73": {
        "temperature": 24.024166,
        "relativeHumidity": 74.303252,
        "pressure": 969.448618,
        "heatIndex": 23.317952
      },
      "74": {
        "temperature": 23.623598,
        "relativeHumidity": 73.342134,
        "pressure": 969.01467,
        "heatIndex": 23.303574
      },
      "75": {
        "temperature": 23.928586,
        "relativeHumidity": 77.719566,
        "pressure": 969.573449,
        "heatIndex": 23.247057
      },
      "76": {
        "temperature": 24.298014,
        "relativeHumidity": 81.333115,
        "pressure": 970.209441,
        "heatIndex": 23.174177
      },
      "77": {
        "temperature": 24.216048,
        "relativeHumidity": 82.558321,
        "pressure": 970.745833,
        "heatIndex": 23.193316
      },
      "78": {
        "temperature": 24.4999,
        "relativeHumidity": 83.060613,
        "pressure": 971.399943,
        "heatIndex": 23.201953
      },
      "80": {
        "temperature": 25.541262,
        "relativeHumidity": 75.031412,
        "pressure": 972.29059,
        "heatIndex": 24.698801
      },
      "81": {
        "temperature": 26.489733,
        "relativeHumidity": 72.037406,
        "pressure": 972.359539,
        "heatIndex": 25.585385
      },
      "82": {
        "temperature": 27.231749,
        "relativeHumidity": 67.708889,
        "pressure": 972.003138,
        "heatIndex": 26.499498
      },
      "85": {
        "temperature": 28.28772,
        "relativeHumidity": 64.450901,
        "pressure": 969.640145,
        "heatIndex": 27.966763
      },
      "86": {
        "temperature": 28.411175,
        "relativeHumidity": 62.214186,
        "pressure": 968.925434,
        "heatIndex": 27.938131
      },
      "87": {
        "temperature": 28.074197,
        "relativeHumidity": 63.212383,
        "pressure": 968.719672,
        "heatIndex": 27.533925
      },
      "88": {
        "temperature": 27.333679,
        "relativeHumidity": 62.488008,
        "pressure": 968.749119,
        "heatIndex": 27.034067
      },
      "89": {
        "temperature": 26.3729,
        "relativeHumidity": 67.963109,
        "pressure": 968.995603,
        "heatIndex": 25.857198
      },
      "92": {
        "temperature": 25.469088,
        "relativeHumidity": 77.106229,
        "pressure": 971.361535,
        "heatIndex": 25.026885
      },
      "93": {
        "temperature": 25.304273,
        "relativeHumidity": 78.763972,
        "pressure": 971.827723,
        "heatIndex": 24.96597
      },
      "94": {
        "temperature": 25.007098,
        "relativeHumidity": 74.803164,
        "pressure": 971.624298,
        "heatIndex": 24.48329
      },
      "95": {
        "temperature": 24.94308,
        "relativeHumidity": 76.347515,
        "pressure": 971.473797,
        "heatIndex": 23.994765
      },
      "97": {
        "temperature": 25.241262,
        "relativeHumidity": 77.140642,
        "pressure": 969.897279,
        "heatIndex": 23.33397
      },
      "98": {
        "temperature": 24.996901,
        "relativeHumidity": 78.704197,
        "pressure": 969.682155,
        "heatIndex": 22.630446
      },
      "99": {
        "temperature": 24.82683,
        "relativeHumidity": 77.865,
        "pressure": 969.430649,
        "heatIndex": 22.291667
      },
      "100": {
        "temperature": 24.725924,
        "relativeHumidity": 77.982315,
        "pressure": 969.492805,
        "heatIndex": 21.948895
      },
      "101": {
        "temperature": 24.454689,
        "relativeHumidity": 77.052209,
        "pressure": 969.625654,
        "heatIndex": 22.340536
      },
      "102": {
        "temperature": 24.865489,
        "relativeHumidity": 75.915699,
        "pressure": 970.334247,
        "heatIndex": 22.606558
      },
      "79": {
        "temperature": 24.941833,
        "relativeHumidity": 78.846869,
        "pressure": 972.123954,
        "heatIndex": 23.811829
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
      "temperature": 24.707413,
      "relativeHumidity": 70.771741,
      "pressure": 970.099624,
      "heatIndex": 23.495936,
      "refractivity": 329.2403
    },
    {
      "timestamp": "2026-09-01 01:00:00",
      "date": "2026-09-01",
      "time": "01:00",
      "hour": 1,
      "temperature": 24.449293,
      "relativeHumidity": 71.991273,
      "pressure": 969.343185,
      "heatIndex": 23.259301,
      "refractivity": 329.9432
    },
    {
      "timestamp": "2026-09-01 02:00:00",
      "date": "2026-09-01",
      "time": "02:00",
      "hour": 2,
      "temperature": 24.210417,
      "relativeHumidity": 73.502626,
      "pressure": 968.949463,
      "heatIndex": 22.940393,
      "refractivity": 330.0819
    },
    {
      "timestamp": "2026-09-01 03:00:00",
      "date": "2026-09-01",
      "time": "03:00",
      "hour": 3,
      "temperature": 24.401874,
      "relativeHumidity": 74.874234,
      "pressure": 969.158344,
      "heatIndex": 23.171106,
      "refractivity": 332.3108
    },
    {
      "timestamp": "2026-09-01 04:00:00",
      "date": "2026-09-01",
      "time": "04:00",
      "hour": 4,
      "temperature": 24.237009,
      "relativeHumidity": 74.267074,
      "pressure": 969.510289,
      "heatIndex": 23.164964,
      "refractivity": 332.9734
    },
    {
      "timestamp": "2026-09-01 05:00:00",
      "date": "2026-09-01",
      "time": "05:00",
      "hour": 5,
      "temperature": 24.029233,
      "relativeHumidity": 74.118768,
      "pressure": 970.075745,
      "heatIndex": 22.74643,
      "refractivity": 330.4197
    },
    {
      "timestamp": "2026-09-01 06:00:00",
      "date": "2026-09-01",
      "time": "06:00",
      "hour": 6,
      "temperature": 24.154912,
      "relativeHumidity": 73.831917,
      "pressure": 970.526118,
      "heatIndex": 22.747001,
      "refractivity": 329.173
    },
    {
      "timestamp": "2026-09-01 07:00:00",
      "date": "2026-09-01",
      "time": "07:00",
      "hour": 7,
      "temperature": 24.647275,
      "relativeHumidity": 69.520525,
      "pressure": 971.114795,
      "heatIndex": 23.33741,
      "refractivity": 326.7314
    },
    {
      "timestamp": "2026-09-01 08:00:00",
      "date": "2026-09-01",
      "time": "08:00",
      "hour": 8,
      "temperature": 25.595685,
      "relativeHumidity": 69.1575,
      "pressure": 971.792772,
      "heatIndex": 24.296746,
      "refractivity": 328.4732
    },
    {
      "timestamp": "2026-09-01 09:00:00",
      "date": "2026-09-01",
      "time": "09:00",
      "hour": 9,
      "temperature": 26.277507,
      "relativeHumidity": 64.764636,
      "pressure": 971.718622,
      "heatIndex": 25.030172,
      "refractivity": 325.6191
    },
    {
      "timestamp": "2026-09-01 10:00:00",
      "date": "2026-09-01",
      "time": "10:00",
      "hour": 10,
      "temperature": 27.080325,
      "relativeHumidity": 57.002109,
      "pressure": 970.977891,
      "heatIndex": 26.161077,
      "refractivity": 322.009
    },
    {
      "timestamp": "2026-09-01 11:00:00",
      "date": "2026-09-01",
      "time": "11:00",
      "hour": 11,
      "temperature": 28.09888,
      "relativeHumidity": 53.322216,
      "pressure": 970.275669,
      "heatIndex": 26.819623,
      "refractivity": 316.2968
    },
    {
      "timestamp": "2026-09-01 12:00:00",
      "date": "2026-09-01",
      "time": "12:00",
      "hour": 12,
      "temperature": 28.925149,
      "relativeHumidity": 47.121092,
      "pressure": 969.150772,
      "heatIndex": 27.156796,
      "refractivity": 306.1734
    },
    {
      "timestamp": "2026-09-01 13:00:00",
      "date": "2026-09-01",
      "time": "13:00",
      "hour": 13,
      "temperature": 30.303378,
      "relativeHumidity": 41.707615,
      "pressure": 968.273112,
      "heatIndex": 28.242852,
      "refractivity": 300.0552
    },
    {
      "timestamp": "2026-09-01 14:00:00",
      "date": "2026-09-01",
      "time": "14:00",
      "hour": 14,
      "temperature": 30.817592,
      "relativeHumidity": 45.74339,
      "pressure": 968.136528,
      "heatIndex": 28.720987,
      "refractivity": 304.8776
    },
    {
      "timestamp": "2026-09-01 15:00:00",
      "date": "2026-09-01",
      "time": "15:00",
      "hour": 15,
      "temperature": 29.422877,
      "relativeHumidity": 46.580774,
      "pressure": 967.719689,
      "heatIndex": 27.880798,
      "refractivity": 308.3337
    },
    {
      "timestamp": "2026-09-01 16:00:00",
      "date": "2026-09-01",
      "time": "16:00",
      "hour": 16,
      "temperature": 28.773703,
      "relativeHumidity": 49.766859,
      "pressure": 967.641062,
      "heatIndex": 27.207817,
      "refractivity": 310.1588
    },
    {
      "timestamp": "2026-09-01 17:00:00",
      "date": "2026-09-01",
      "time": "17:00",
      "hour": 17,
      "temperature": 27.906887,
      "relativeHumidity": 55.714137,
      "pressure": 968.3945,
      "heatIndex": 26.526403,
      "refractivity": 316.834
    },
    {
      "timestamp": "2026-09-01 18:00:00",
      "date": "2026-09-01",
      "time": "18:00",
      "hour": 18,
      "temperature": 27.196635,
      "relativeHumidity": 62.921389,
      "pressure": 969.11654,
      "heatIndex": 25.911451,
      "refractivity": 324.2487
    },
    {
      "timestamp": "2026-09-01 19:00:00",
      "date": "2026-09-01",
      "time": "19:00",
      "hour": 19,
      "temperature": 26.624783,
      "relativeHumidity": 69.327201,
      "pressure": 970.09423,
      "heatIndex": 25.083106,
      "refractivity": 327.7341
    },
    {
      "timestamp": "2026-09-01 20:00:00",
      "date": "2026-09-01",
      "time": "20:00",
      "hour": 20,
      "temperature": 26.283601,
      "relativeHumidity": 71.998102,
      "pressure": 970.778455,
      "heatIndex": 24.819582,
      "refractivity": 331.0025
    },
    {
      "timestamp": "2026-09-01 21:00:00",
      "date": "2026-09-01",
      "time": "21:00",
      "hour": 21,
      "temperature": 25.604899,
      "relativeHumidity": 69.84602,
      "pressure": 970.925783,
      "heatIndex": 23.938245,
      "refractivity": 325.5971
    },
    {
      "timestamp": "2026-09-01 22:00:00",
      "date": "2026-09-01",
      "time": "22:00",
      "hour": 22,
      "temperature": 25.184776,
      "relativeHumidity": 70.63538,
      "pressure": 970.849908,
      "heatIndex": 23.453257,
      "refractivity": 325.0272
    },
    {
      "timestamp": "2026-09-01 23:00:00",
      "date": "2026-09-01",
      "time": "23:00",
      "hour": 23,
      "temperature": 25.049697,
      "relativeHumidity": 72.205043,
      "pressure": 970.383701,
      "heatIndex": 23.076122,
      "refractivity": 323.9097
    }
  ],
  "monthlyForecast": [
    {
      "month": "September 2026",
      "key": "2026-09",
      "temperature": 26.2418,
      "relativeHumidity": 66.5113,
      "pressure": 969.84,
      "heatIndex": 25.0688,
      "refractivity": 327.6332,
      "hours": 720
    },
    {
      "month": "October 2026",
      "key": "2026-10",
      "temperature": 26.2275,
      "relativeHumidity": 66.7922,
      "pressure": 969.8656,
      "heatIndex": 25.087,
      "refractivity": 328.2276,
      "hours": 744
    },
    {
      "month": "November 2026",
      "key": "2026-11",
      "temperature": 26.2478,
      "relativeHumidity": 66.7181,
      "pressure": 969.8753,
      "heatIndex": 25.0899,
      "refractivity": 328.0229,
      "hours": 720
    },
    {
      "month": "December 2026",
      "key": "2026-12",
      "temperature": 26.2292,
      "relativeHumidity": 66.7119,
      "pressure": 969.8627,
      "heatIndex": 25.0723,
      "refractivity": 327.9847,
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
