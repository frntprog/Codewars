function highestRank(arr) {
  const coll = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (coll.has(arr[i])) {
      coll.set(arr[i], coll.get(arr[i]) + 1);
    } else {
      coll.set(arr[i], 1);
    }
  }

  return [...coll.entries()]
    .sort((a, b) => {
      if (a[1] == b[1]) return a[0] - b[0];
      return a[1] - b[1];
    })
    .at(-1)[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10]));
