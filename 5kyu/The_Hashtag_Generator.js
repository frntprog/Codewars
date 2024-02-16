function generateHashtag(str) {
  let res;
  if (str.trim() == "") return false;
  res =
    "#" +
    str
      .trim()
      .split(" ")
      .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
      .join("");
  return res.length > 140 ? false : res;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata"
