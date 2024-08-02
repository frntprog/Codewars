function findMissingNumbers(arr) {
  let range = [Math.min(...arr), Math.max(...arr)];

  let fullArr = [];

  for (let i = range[0]; i <= range[1]; i++) {
    fullArr.push(i);
  }

  let res = [];

  for (let i = 0; i < fullArr.length; i++) {
    if (!arr.includes(fullArr[i])) {
      res.push(fullArr[i]);
    }
  }

  return res;
}

console.log(findMissingNumbers([-3, -2, 1, 5]));
