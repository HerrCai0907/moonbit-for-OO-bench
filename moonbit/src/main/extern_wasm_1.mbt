///|
fn log_ffi(s : Int) -> Unit = "env" "log"

///|
extern "wasm" fn string_to_i32(v : String) -> Int =
  #|(func (param i32) (result i32) (local.get 0))
  #|

///|
fn log(s : String) -> Unit {
  log_ffi(string_to_i32(s))
}
