function drawStairs(n) {
  // your code here
  let str = "I";
  for (let i = 1; i < n; i++) {
    let space = "";
    for (let j = 0; j < i; j++) {
      space = space + " ";
    }
    str = str + "\n" + space + "I";
  }
  return str;
}

console.log(drawStairs(5));
