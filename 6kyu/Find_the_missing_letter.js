function findMissingLetter(arr) {
  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let range = alph.slice(
    alph.indexOf(arr[0].toLowerCase()),
    alph.indexOf(arr.at(-1).toLowerCase()) + 1
  );

  for (let i = 0; i < range.length; i++) {
    if (arr[i].toLowerCase() !== range[i]) {
      return arr[0] == range[0].toUpperCase()
        ? range[i].toUpperCase()
        : range[i];
    }
  }
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
