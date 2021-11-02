class Calculator {
  constructor() {
    this._optors = [];
    this._opnds = [];
    this._value = 0;
    this._display = "";
  }

  eval(value) {
    const numberRex = /[+\-*/]/;
    this.operands = value.split(numberRex);
    const opsList = ["+", "-", "*", "/"];
    this.operators = value.split("").filter((char) => opsList.includes(char));
    const init = parseFloat(this.operands[0]);
    let opnds = this.operands.slice(1);
    let optors = [...this.operators];
    let result = init;
    for (let k = 0; k < opnds.length; k++) {
      const currOp = optors[0];
      let value = parseFloat(opnds[k]);
      optors = optors.slice(1);
      if (currOp === "+") result += value;
      if (currOp === "*") result *= value;
      if (currOp === "-") result -= value;
      if (currOp === "/") {
        if (value === 0) {
          result = null;
          this.value = result;
          this.display = "division by zero";
          return result;
        } else {
          result /= value;
        }
      }
    }
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
