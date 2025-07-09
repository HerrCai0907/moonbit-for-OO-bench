set -e

# AS
cd as && npm run asbuild:release && ls -l build/*.wasm && cd -

# Moonbit WASM
cd moonbit && moon build --target=wasm --release && cd -
wasm-opt -O3 moonbit/target/wasm/release/build/main/main.wasm -o moonbit/target/wasm/release/build/main/main.opt.wasm --all-features

# Moonbit WASM-GC
cd moonbit && moon build --target=wasm-gc --release && cd -
wasm-opt -O3 moonbit/target/wasm-gc/release/build/main/main.wasm -o moonbit/target/wasm-gc/release/build/main/main.opt.wasm --all-features


ls -l moonbit/target/wasm*/release/build/main/*.wasm

node index.js

cd cpp && c++ -O3 bench.cpp impl.cpp -o bench.out && ./bench.out && time ./bench.out && cd -
