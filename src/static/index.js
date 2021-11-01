import { Calculator } from "./calculator.js";

// for debugging and experimenting
window.Calculator = Calculator;

const calc = new Calculator();

const header = document.querySelector(".header");
const keys = document.querySelector(".keys");
const constants = keys.querySelector(".constants");
const operators = keys.querySelector(".operators");

const clear = header.querySelector(".clear");
const input = header.querySelector("input");
input.value = "";

constants.addEventListener("click", processKeyboard);
operators.addEventListener("click", processKeyboard);
input.addEventListener("input", processInput);
clear.addEventListener("click", function () {
  input.value = "";
});

function processInput(event) {
  let { value } = event.target;
  if (value[value.length - 1] === "=") {
    // in the substring interval, the last index is excluded
    // remove the '=' sign
    value = value.substr(0, value.length - 1);
    computeValue(value);
  }
}

function processKeyboard(event) {
  const { innerText } = event.target;
  if (innerText === "=") {
    const value = input.value;
    computeValue(value);
  } else {
    let text = input.value;
    input.value = text + innerText;
  }
}

function computeValue(val) {
  const aritExp = /^\d+(\.\d*)?([+\-*/]\d+(\.\d*)?)*$/;
  if (aritExp.test(val)) {
    calc.eval(val);
    input.value = calc.display;
  } else {
    input.value = "invalid exp";
  }
  // console.log("screen", document.querySelector("#screen").value);
}
