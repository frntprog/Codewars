function partsSums(ls) {
  let res = [];

  while (ls.length > 0) {
    res.push(ls.slice().reduce((acc, curr) => (acc += curr), 0));
    ls.shift();
  }
  res.push(0);
  return res;
}

// better perfomance

function partsSums(ls) {
  let result = [0];
  for (const n in ls.reverse()) {
    result.push(ls[n] + result[n]);
  }
  return result.reverse();
}

console.log(partsSums([1, 2, 3, 4, 5, 6])); // [20, 20, 19, 16, 10, 0]
