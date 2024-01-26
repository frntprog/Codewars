function firstNonRepeatingLetter(s) {
  let hash = {};
  let str = s.split("").map((el) => el.toLowerCase());

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) hash[str[i]] = 1;
    else hash[str[i]] = hash[str[i]] + 1;
  }

  for (const key in hash) {
    if (hash.hasOwnProperty(key) && hash[key] === 1) {
      return s.split("")[
        s.split("").findIndex((el) => el.toLowerCase() == key)
      ];
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTreSS")); // 't'
