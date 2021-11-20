const topScope = Object.create(null);

const ops = "-+/*";
ops.split("").forEach((op) => {
  topScope[op] = new Function("x", "y", `return x ${op} y`);
});

export function evalExp(expTree) {
  switch (expTree.type) {
    case "number":
      return parseFloat(expTree.value);
    case "apply": {
      const op = topScope[expTree.operator];
      const args = [];
      expTree.args.forEach((arg) => {
        args.push(evalExp(arg));
      });
      return op(...args);
    }
  }
}
