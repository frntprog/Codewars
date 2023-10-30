function narcissistic(n) {
  let sum = 0;
  n.toString()
    .split("")
    .forEach((i) => {
      sum += parseInt(i) ** n.toString().length;
    });
  return sum == n;
}
