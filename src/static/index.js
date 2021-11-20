import { Calculator } from "./calculator.js";

// for debugging and experimenting
window.Calculator = Calculator;

const calc = new Calculator();

const keys = document.querySelector(".keys");

const clear = document.getElementById("clear");
const input = document.getElementById("screen");
clearInput();

keys.addEventListener("click", processKeyboard);
input.addEventListener("input", processInput);
clear.addEventListener("click", clearInput);

let state = {
  memory: 0,
};

function setState(payload) {
  state = { ...state, ...payload };
}

function clearInput() {
  input.value = "";
  input.focus();
}

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
  const { id, innerText } = event.target;
  if (id === "equals") {
    const value = input.value;
    computeValue(value);
    return;
  }
  if (id === "clear") {
    clearInput();
    return;
  }
  if (id === "bsp") {
    let value = input.value;
    if (value.length > 0) {
      input.value = value.slice(0, value.length - 1);
      input.focus();
    }
    input.focus();
    return;
  }
  let text = input.value;
  input.value = text + innerText;
  input.focus();
}

function computeValue(val) {
  let result = calc.eval(val);
  console.log("result", result);
  input.value = calc.display;
  input.focus();
}
