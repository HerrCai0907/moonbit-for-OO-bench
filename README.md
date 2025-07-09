# How to Run

```bash
./init.sh
./run.sh
```

# Result

## Case 1

- hardware: apple mac air m1
- cpu arch: aarch64
- operating system: Sequoia
- node version: v22.14.0
- benchmark target:
  - moonbit: moon 0.1.20250704 (608fa55 2025-07-04)
  - as: assemblyscript@0.28.2

```
PerformanceMeasure {
  name: 'moonbit-wasm-1.0',
  entryType: 'measure',
  startTime: 11.003584,
  duration: 870.699,
  detail: null
}
PerformanceMeasure {
  name: 'moonbit-wasm-gc',
  entryType: 'measure',
  startTime: 889.963667,
  duration: 225.48904199999993,
  detail: null
}
PerformanceMeasure {
  name: 'assemblyscript',
  entryType: 'measure',
  startTime: 1116.251625,
  duration: 246.43720899999994,
  detail: null
}
```

## Case 2
