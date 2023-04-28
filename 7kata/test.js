function maxSumBetweenTwoNegatives(a) {
  let sums = [];
  let sum = -1;
  let adding = false;

  for (let el of a) {
    if (el < 0) {
      adding = false;
      sums.push(sum);
      sum = 0;
      adding = true;
    } else {
      if (adding) {
        sum += el;
      }
    }
  }
  return sums.length > 0 ? Math.max(...sums) : -1;
}

console.log(maxSumBetweenTwoNegatives([]));
