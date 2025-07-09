///|
fn log_ffi(s : String) -> Unit = "env" "log"

///|
fn log(s : String) -> Unit {
  log_ffi(s)
}
