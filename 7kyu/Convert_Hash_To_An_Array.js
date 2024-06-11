function convertHashToArray(hash) {
  let res = [];
  for (const key in hash) {
    res.push([key, hash[key]]);
  }
  return res;
}

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
