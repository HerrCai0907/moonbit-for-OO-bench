cd as && npm run asbuild:release && ls -l build/*.wasm && cd -
cd moonbit && moon build --target=wasm --release && ls -l target/wasm/release/build/main/*.wasm && cd -
cd moonbit && moon build --target=wasm-gc --release && ls -l target/wasm-gc/release/build/main/*.wasm && cd -

node index.js

cd cpp && c++ -O3 bench.cpp impl.cpp -o bench.out && ./bench.out && time ./bench.out && cd -
