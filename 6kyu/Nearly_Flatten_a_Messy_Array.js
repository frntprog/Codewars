function nearFlatten(array) {
  const result = [];

  function findLowestLevelArrays(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        if (item.every(Number.isInteger)) {
          result.push(item);
        } else {
          findLowestLevelArrays(item);
        }
      }
    }
  }

  findLowestLevelArrays(array);

  result.sort((a, b) => Math.min(...a) - Math.min(...b));

  return result;
}

console.log(
  nearFlatten([
    [
      [1, 2, 3],
      [4, 5],
    ],
    [6, 7],
  ])
);

console.log(
  nearFlatten([
    [
      [1, 2, 3],
      [9, 10],
    ],
    [
      [4, 5],
      [6, 7, 8],
    ],
  ])
);
