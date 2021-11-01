class Calculator {
  constructor() {
    this._optors = [];
    this._opnds = [];
    this._value = 0;
    this._display = "";
  }

  eval(value) {
    const numberRex = /[\+\-\*\/]/;
    this.operands = value.split(numberRex);
    const opsList = ["+", "-", "*", "/"];
    this.operators = value.split("").filter((char) => opsList.includes(char));
    let opnds = this.operands.slice(1);
    const init = parseFloat(this.operands[0]);
    let optors = this.operators;
    const result = opnds.reduce((acc, str) => {
      const currOp = optors[0];
      let value = parseFloat(str);
      optors = optors.slice(1);
      if (currOp === "+") acc += value;
      if (currOp === "*") acc *= value;
      if (currOp === "-") acc -= value;
      if (currOp === "/") acc /= value;
      // console.log("val, acc", value, acc);
      return acc;
    }, init);
    this.value = result;
    this.display = result.toString();
    return result;
  }

  set operators(val) {
    this._optors = val;
  }

  get operators() {
    return this._optors;
  }

  get operands() {
    return this._opnds;
  }

  set operands(val) {
    this._opnds = val;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  set display(val) {
    this._display = val;
  }

  get display() {
    return this._display;
  }
}

export { Calculator };
