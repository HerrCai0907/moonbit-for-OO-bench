function as_print_log(ptr, m) {
  const buffer = m.instance.exports.memory.buffer;
  const id = new Uint32Array(buffer)[(ptr - 8) >>> 2];
  if (id !== 2) throw Error(`not a string: ${ptr}`);
  let len = new Uint32Array(buffer)[(ptr - 4) >>> 2] >>> 1;
  const wtf16 = new Uint16Array(buffer, ptr, len);
  console.log(new TextDecoder("utf-16le", { fatal: true }).decode(wtf16));
}

async function run(target, path) {
  performance.clearMarks();
  performance.clearMeasures();

  let buf = require("fs").readFileSync(path);

  let m = await WebAssembly.instantiate(buf, {
    env: {
      log: (ptr) => {},
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
  await run("assemblyscript", "as/build/release.wasm");
  await run("moonbit-wasm-gc", "moonbit/target/wasm-gc/release/build/main/main.wasm");
})();
