function expandedForm(num) {
  let str = String(num).split("");
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] > 0) {
      let num = str[i] + "0".repeat(str.length - (i + 1));
      res.push(num);
    }
  }

  return res.join(" + ");
}

console.log(expandedForm(42)); // '10 + 2'
