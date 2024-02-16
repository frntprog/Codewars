function toCamelCase(str) {
  if (str.length === 0) return "";
  let words = str.split(/_|-/);
  let res = words.map((el) => el.charAt(0).toUpperCase() + el.slice(1));

  if (words[0].charAt(0) !== words[0].charAt(0).toUpperCase()) {
    res[0] = res[0].toLowerCase();
  }
  return res.join("");
}

console.log(toCamelCase("the_Stealth-Warrior"));
