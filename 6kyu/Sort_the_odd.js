function sortArray(arr) {
  let odds = arr.filter((el) => el % 2 !== 0).sort((a, b) => a - b);

  let oddIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = odds[oddIndex];
      oddIndex++;
    }
  }
  return arr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
