function digPow(n, p) {
  let str = n.toString().split("");
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += str[i] ** p;
    p++;
  }

  res = res / n;
  return Number.isInteger(res) ? res : -1;
}

console.log(digPow(89, 1));
