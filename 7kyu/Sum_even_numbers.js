function sumEvenNumbers(input) {
  const even = input.filter((el) => el % 2 == 0);
  return even.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
