function scramble(str1, str2) {
  let hash = {};
  let hash2 = {};
  let search = str1.split("");
  let res = str2.split("");

  for (let i = 0; i < res.length; i++) {
    if (res[i] in hash) {
      hash[res[i]] += 1;
      continue;
    }
    hash[res[i]] = str1.includes(res[i]) ? 1 : 0;
  }

  for (const key in hash) {
    if (hash[key] == 0) return false;
  }

  for (let i = 0; i < search.length; i++) {
    if (search[i] in hash2) {
      hash2[search[i]] += 1;
      continue;
    }
    hash2[search[i]] = str2.includes(search[i]) ? 1 : 0;
  }

  for (const key in hash) {
    if (hash[key] > hash2[key]) return false;
  }

  return true;
}

console.log(scramble("katas", "steak")); // true
