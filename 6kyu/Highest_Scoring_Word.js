function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetObject = {};

  for (let i = 0; i < alphabet.length; i++) {
    alphabetObject[alphabet[i]] = i + 1;
  }

  let res = x
    .split(" ")
    .map((el) => {
      return {
        word: el,
        score: el
          .split("")
          .reduce((acc, curr) => (acc += alphabetObject[curr]), 0),
      };
    })
    .sort((a, b) => b.score - a.score);
  return res[0].word;
}

console.log(high("man i need a taxi up to ubud"));
