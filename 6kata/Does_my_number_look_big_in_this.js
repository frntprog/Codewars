function narcissistic(n) {
  let sum = 0;

  n.toString()
    .split("")
    .forEach((el) => {
      sum += parseInt(el) ** n.toString().length;
    });

  return sum == n;
}

console.log(narcissistic(153));
