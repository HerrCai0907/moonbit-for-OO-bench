import { log } from "./env";

interface IData {
  getString(): string;
}

class OneInt implements IData {
  constructor(public value: i32) {}
  getString(): string {
    return this.value.toString();
  }
}

class TwoInt implements IData {
  constructor(
    public x: i32,
    public y: i32
  ) {}
  getString(): string {
    return this.x.toString() + "," + this.y.toString();
  }
}

class OneStr implements IData {
  constructor(public value: string) {}
  getString(): string {
    return this.value;
  }
}

class DataContainer {
  public data: IData[] = new Array();
}

let container = new DataContainer();

function foo(): string {
  const data = container.data;
  for (let i = 0; i < 1000; i = i + 1) {
    data.push(new OneInt(i));
    data.push(new TwoInt(i, i + 1));
    data.push(new OneStr("Hello"));
  }
  let s = new Array<string>(data.length);
  for (let i = 0; i < container.data.length; i++) {
    s[i] = data[i].getString();
  }
  return s.join(",");
}

export function _start(): void {
  log(foo() + foo() + foo());
}
