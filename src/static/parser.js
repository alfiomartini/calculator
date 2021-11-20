// context free grammar
// E -> (E) | number | E op E
// op => + | / | + | -

//  Removing left recursion from above
//  E -> (E)T | number T
// T -> op E | ''

function parseE(exprStr) {
  exprStr = skipSpaces(exprStr);
  let match = /^[+-]?((\d+(\.\d*)?)|\.\d+)/.exec(exprStr);
  if (match) {
    let exprTree = { type: "number", value: match[0] };
    exprStr = exprStr.slice(match[0].length);
    return parseT(exprTree, exprStr);
  }
  if (exprStr[0] === "(") {
    // remove left parenthesis
    exprStr = exprStr.slice(1);
    let result = parseE(exprStr);
    exprStr = skipSpaces(result.exprStr);
    if (exprStr[0] !== ")") {
      throw new SyntaxError("Closing parenthesis expected");
    }
    // remove right parenthesis
    exprStr = result.exprStr.slice(1);
    return parseT(result.exprTree, exprStr);
  }
}

function parseT(exprTree, exprStr) {
  exprStr = skipSpaces(exprStr);
  if (exprStr === "") {
    return { exprTree, exprStr };
  }
  let match = /^[-+/*/]/.exec(exprStr);
  if (!match) {
    // console.log("Operator expected.");
    return { exprTree, exprStr };
  }
  // push arg (left child)
  const arg01 = exprTree;
  // console.log("arg01, restExpr", arg01, exprStr);
  const semTree = { type: "apply", operator: match[0], args: [] };
  semTree.args.push(arg01);
  // remove op
  exprStr = exprStr.slice(1);
  let result = parseE(exprStr);
  // push arg (right child)
  const arg02 = result.exprTree;
  semTree.args.push(arg02);
  // console.log("arg02, restExpr", arg02, result.exprStr);

  return { exprTree: semTree, exprStr: result.exprStr };
}

function skipSpaces(text) {
  // return text.replace(/\s/gm, "");
  let index = text.search(/\S/);
  if (index === -1) {
    return "";
  } else {
    text = text.slice(index);
    return text;
  }
}

export function parsePrg(text) {
  try {
    const exprTree = parseE(text).exprTree;
    return exprTree;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}
