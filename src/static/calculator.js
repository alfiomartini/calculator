import { parsePrg } from "./parser.js";
import { evalExp } from "./evaluator.js";

class Calculator {
  constructor() {
    this._value = 0;
    this._display = "";
  }

  eval(exp) {
    const exprTree = parsePrg(exp);
    let result;
    if (exprTree.error) {
      result = exprTree.error;
    } else {
      result = evalExp(exprTree);
    }
    this.value = result;
    this.display = result.toString();
    return result;
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
