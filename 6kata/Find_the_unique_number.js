function findUniq(arr) {
  let set = new Set(arr);
  let vals = [...set]
    .map((el) => {
      return {
        num: el,
        count: arr.filter((unit) => el == unit),
      };
    })
    .sort((a, b) => a.count.length - b.count.length);

  return vals[0].num;
}

console.log(findUniq([3, 3, 3, 3, 11]));
