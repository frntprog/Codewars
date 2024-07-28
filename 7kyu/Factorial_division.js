function factorialDivision(n, d) {
  let result = 1n;
  for (let i = BigInt(n); i > BigInt(d); i--) {
    result *= i;
  }

  return result;
}

console.log(factorialDivision(94906265, 94906263));
