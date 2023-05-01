function lastDigit(n, d) {
  let str = n + "";
  if (d > str.length) {
    return str.split("").map((el) => +el);
  }
  if (d <= 0) return [];
  str = str.slice(-d);
  return str.split("").map((el) => +el);
}
