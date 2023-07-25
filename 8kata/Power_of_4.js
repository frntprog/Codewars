function powerOf4(n) {
  if (typeof n != "number" || n <= 0) return false;
  if (n == 1) return true;
  return Math.sqrt(n, 4) % 2 == 0 ? true : false;
}
console.log(powerOf4(1));
