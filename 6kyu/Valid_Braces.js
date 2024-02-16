function validBraces(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stk = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stk.push(s[i]);
    } else if (stk[stk.length - 1] === map[s[i]]) {
      stk.pop();
    } else return false;
  }
  return stk.length ? false : true;
}

// console.log(validBraces("(){}[]")); //true
// console.log(validBraces("([{}])")); //true
console.log(validBraces("[(])")); //false
console.log(validBraces("()))")); //false
