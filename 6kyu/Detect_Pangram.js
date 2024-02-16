function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = string.toLowerCase().split("");
  let set = {};

  alphabet.forEach((el) => {
    set[el] = 0;
  });

  str.forEach((el) => {
    if (set.hasOwnProperty(el)) {
      set[el] += 1;
    }
  });

  for (const key in set) {
    if (set[key] === 0) return false;
  }

  return true;
}

console.log(isPangram("Pack my box with five dozen liquor jugs."));
