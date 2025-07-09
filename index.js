async function run(target, path) {
  performance.clearMarks();
  performance.clearMeasures();

  let buf = require("fs").readFileSync(path);

  let m = await WebAssembly.instantiate(buf, {
    env: {
      log: (v) => {},
    },
  });
  performance.mark("start");
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  m.instance.exports._start();
  performance.mark("end");
  console.log(performance.measure(target, "start", "end"));
}

(async () => {
  await run("moonbit-wasm-1.0", "moonbit/target/wasm/release/build/main/main.wasm");
  await run("moonbit-wasm-gc", "moonbit/target/wasm-gc/release/build/main/main.wasm");
  await run("assemblyscript", "as/build/release.wasm");
})();
