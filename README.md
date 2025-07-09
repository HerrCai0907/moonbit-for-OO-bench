# How to Run

```bash
./init.sh
./run.sh
```

# Result

## TL;DR;

execution time (ms)

| cpu arch | moonbit: wasm GC          | moonbit + binaryen: wasm GC | moonbit: wasm 1.0         | moonbit + binaryen: wasm 1.0 | assemblyscript            | native (baseline) |
| -------- | ------------------------- | --------------------------- | ------------------------- | ---------------------------- | ------------------------- | ----------------- |
| aarch64  | 224.28529099999992 (x3.6) | 187.44037500000013 (x2.9)   | 837.791875 (x13.1)        | 569.9898329999999 (x8.9)     | 236.86737500000004 (x3.7) | 64                |
| x86_64   | 188.39486199999988 (x5.0) | 154.09983899999997 (x4.1)   | 671.8876130000001 (x17.7) | 426.6315259999999 (x11.2)    | 149.26084000000014 (x3.9) | 38                |

## Case 1

- hardware: apple mac air m1 + 8G RAM
- cpu arch: aarch64
- operating system: Sequoia
- node version: v22.14.0
- benchmark target:
  - moonbit: moon 0.1.20250704 (608fa55 2025-07-04)
  - as: assemblyscript@0.28.2

```

-rw-r--r--  1 caicongcong  staff  7774 Jul  9 23:54 build/release.wasm
/Users/caicongcong/dev/wasm-bench-set
-rw-r--r--  1 caicongcong  staff  7207 Jul  9 22:09 target/wasm/release/build/main/main.wasm
/Users/caicongcong/dev/wasm-bench-set
-rw-r--r--  1 caicongcong  staff  3328 Jul  9 22:09 target/wasm-gc/release/build/main/main.wasm
/Users/caicongcong/dev/wasm-bench-set
PerformanceMeasure {
  name: 'moonbit-wasm-1.0',
  entryType: 'measure',
  startTime: 10.010292,
  duration: 846.999833,
  detail: null
}
PerformanceMeasure {
  name: 'assemblyscript',
  entryType: 'measure',
  startTime: 863.230917,
  duration: 237.52579200000002,
  detail: null
}
PerformanceMeasure {
  name: 'moonbit-wasm-gc',
  entryType: 'measure',
  startTime: 1101.926542,
  duration: 222.88133300000004,
  detail: null
}
real    0m0.063s
user    0m0.060s
sys     0m0.003s
/Users/caicongcong/dev/wasm-bench-set
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
-rw-rw-r-- 1 ccc ccc 7774 Jul  9 23:53 build/release.wasm
/home/ccc/moonbit-for-OO-bench
Finished. moon: no work to do
-rw-rw-r-- 1 ccc ccc 7207 Jul  9 22:20 target/wasm/release/build/main/main.wasm
/home/ccc/moonbit-for-OO-bench
Finished. moon: no work to do
-rw-rw-r-- 1 ccc ccc 3329 Jul  9 22:20 target/wasm-gc/release/build/main/main.wasm
/home/ccc/moonbit-for-OO-bench
PerformanceMeasure {
  name: 'moonbit-wasm-1.0',
  entryType: 'measure',
  startTime: 21.306938,
  duration: 670.778983,
  detail: null
}
PerformanceMeasure {
  name: 'assemblyscript',
  entryType: 'measure',
  startTime: 695.800525,
  duration: 150.47774100000004,
  detail: null
}
PerformanceMeasure {
  name: 'moonbit-wasm-gc',
  entryType: 'measure',
  startTime: 847.122578,
  duration: 206.24795300000005,
  detail: null
}

real	0m0.039s
user	0m0.032s
sys	0m0.007s
/home/ccc/moonbit-for-OO-bench
```
