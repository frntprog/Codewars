function duplicateCount(text) {
  if (text.length == 0) return 0;

  let map = new Map();
  let str = text.split("").map((el) => el.toLowerCase());
  let result;

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  result = [...map.values()].filter((el) => el > 1);

  return result.length;
}

console.log(duplicateCount("aabbcde"));
