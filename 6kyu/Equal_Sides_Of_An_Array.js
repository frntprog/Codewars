function findEvenIndex(arr) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    left = arr.slice(0, i + 1).reduce((acc, curr) => (acc += curr));
    right = arr.slice(i).reduce((acc, curr) => (acc += curr));

    if (left === right) return i;
  }

  return -1;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
