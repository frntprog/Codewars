function deleteNth(arr, n) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = [];
    }
    hash[arr[i]].push(i);
  }

  const filteredHash = {};

  for (const key in hash) {
    if (hash[key].length > n) {
      filteredHash[key] = hash[key].slice(n);
    }
  }

  let res = arr.map((el, i) => {
    let indexes = filteredHash[arr[i]];

    if (indexes && indexes.includes(i)) {
      return "";
    }
    return el;
  });

  return res.filter((el) => el !== "");
}
console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3));

// expected [ 1, 2, 3, 1, 1, 2, 2, 3, 3, 2, 5, 3, 1 ] x=3 to have the same ordered members as [ 1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5 ] x=3
// deleteNth([20,37,20,21], 1), [20,37,21]

// [0,2,4] 2 slice(2) filter
const myHash = {
  1: [0, 3, 4, 6, 14],
  2: [1, 5, 7, 10],
  3: [2, 8, 9, 13],
  4: [11],
  5: [12],
};

const n = 3;
const filteredHash = {};

for (const key in myHash) {
  if (myHash[key].length > n) {
    filteredHash[key] = myHash[key].slice(n);
  }
}

console.log(filteredHash);
