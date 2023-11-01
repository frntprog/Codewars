var uniqueInOrder = function (val) {
  let res = [];

  let arr = typeof val == "string" ? val.split("") : val;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      res.push(arr[i]);
    }
  }
  console.log(res);
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
