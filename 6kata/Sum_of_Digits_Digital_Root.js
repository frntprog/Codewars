function digitalRoot(n) {
  let num = (n + "").split("");
  if (num.length === 1) {
    return +num[0];
  }

  let res = num.reduce((acc, curr) => (acc += +curr), 0);
  return digitalRoot(res);
}

console.log(digitalRoot(942));

// const factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };
