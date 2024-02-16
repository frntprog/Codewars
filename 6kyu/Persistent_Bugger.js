function persistence(num, c = 0) {
  let str = num + "";

  if (str.length == 1) return c;
  c++;
  str = str.split("");
  str = str.reduce((acc, curr) => (acc *= curr));

  return persistence(str, c);
}

console.log(persistence(39));
