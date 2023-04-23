function sumFactorial(arr) {
  let factorials = [];
  for (let i = 0; i < arr.length; i++) {
    let res = 1;
    for (let j = arr[i]; j > 0; j--) {
      res *= j;
    }
    factorials.push(res);
  }
  return factorials.reduce((acc, curr) => (acc += curr));
}

console.log(sumFactorial([4, 6]));
