# How to Run

```bash
./init.sh
./run.sh
```

# Result

## TL;DR;

execution time (ms)

| cpu arch | moonbit with wasm GC | moonbit without wasm GC | assemblyscript | native (baseline) |
| -------- | -------------------- | ----------------------- | -------------- | ----------------- |
| aarch64  | 225                  | 870                     | 246            | 64                |
| x86_64   | 182                  | 681                     | 146            |

## Case 1

- hardware: apple mac air m1 + 8G RAM
- cpu arch: aarch64
- operating system: Sequoia
- node version: v22.14.0
- benchmark target:
  - moonbit: moon 0.1.20250704 (608fa55 2025-07-04)
  - as: assemblyscript@0.28.2

```
-rw-r--r--  1 caicongcong  staff  7812 Jul  9 22:20 build/release.wasm
/Users/caicongcong/dev/wasm-bench-set
Finished. moon: no work to do
-rw-r--r--  1 caicongcong  staff  7207 Jul  9 22:09 target/wasm/release/build/main/main.wasm
/Users/caicongcong/dev/wasm-bench-set
Finished. moon: no work to do
-rw-r--r--  1 caicongcong  staff  3328 Jul  9 22:09 target/wasm-gc/release/build/main/main.wasm
/Users/caicongcong/dev/wasm-bench-set
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

- hardware: 13th Gen Intel(R) Core(TM) i7-13700KF + 64 GB RAM
- cpu arch: x86_64
- operating system: Ubuntu 24.04.2 LTS
- node version: v22.14.0
- benchmark target:
  - moonbit: moon 0.1.20250704 (608fa55 2025-07-04)
  - as: assemblyscript@0.28.2

```
-rw-rw-r-- 1 ccc ccc 7812 Jul  9 22:20 build/release.wasm
/home/ccc/moonbit-for-OO-bench
Finished. moon: ran 2 tasks, now up to date
-rw-rw-r-- 1 ccc ccc 7207 Jul  9 22:20 target/wasm/release/build/main/main.wasm
/home/ccc/moonbit-for-OO-bench
Finished. moon: ran 2 tasks, now up to date
-rw-rw-r-- 1 ccc ccc 3329 Jul  9 22:20 target/wasm-gc/release/build/main/main.wasm
/home/ccc/moonbit-for-OO-bench
PerformanceMeasure {
  name: 'moonbit-wasm-1.0',
  entryType: 'measure',
  startTime: 8.700226,
  duration: 681.6101209999999,
  detail: null
}
PerformanceMeasure {
  name: 'moonbit-wasm-gc',
  entryType: 'measure',
  startTime: 693.982351,
  duration: 182.57686999999999,
  detail: null
}
PerformanceMeasure {
  name: 'assemblyscript',
  entryType: 'measure',
  startTime: 877.101537,
  duration: 146.04383099999995,
  detail: null
}
```
