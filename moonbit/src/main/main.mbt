///|
trait IData {
  getString(Self) -> String
}

///|
struct OneInt {
  value : Int
}

///|
impl IData for OneInt with getString(self : OneInt) -> String {
  return self.value.to_string()
}

///|
struct TwoInt {
  v0 : Int
  v1 : Int
}

///|
impl IData for TwoInt with getString(self : TwoInt) -> String {
  return self.v0.to_string() + "," + self.v1.to_string()
}

///|
struct OneStr {
  value : String
}

///|
impl IData for OneStr with getString(self : OneStr) -> String {
  return self.value
}

///|
struct DataContainer {
  data : Array[&IData]
}

///|
let container : DataContainer = DataContainer::{ data: [] }

///|
fn foo() -> String {
  for i = 0; i < 1000; i = i + 1 {
    container.data.push(OneInt::{ value: i } as &IData)
    container.data.push(TwoInt::{ v0: i, v1: i + 1 } as &IData)
    container.data.push(OneStr::{ value: "Hello" } as &IData)
  }
  let s = container.data.map(fn(idata) { idata.getString() }).join(",")
  return s
}

///|
fn main {
  // This will be optimized out by the compiler
  // log(foo());
  let v = foo() + foo() + foo()
  log(v)
}
