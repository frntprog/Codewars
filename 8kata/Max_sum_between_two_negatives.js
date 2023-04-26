function maxSumBetweenTwoNegatives(a) {
  let sums = [];
  let sum = -1;
  let adding = false;

  for (elem of a) {
    if (elem < 0) {
      adding = false;
      sums.push(sum);
      sum = 0;
      adding = true;
    } else {
      if (adding) {
        sum += elem;
      }
    }
  }

  return sums.length > 0 ? Math.max(...sums) : -1;
}
