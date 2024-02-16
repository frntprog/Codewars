function rot13(message) {
  let alph = "abcdefghijklmnopqrstuvwxyz".split("");
  return message
    .split("")
    .map((el) => {
      if (el == " ") return " ";
      if (alph[alph.indexOf(el.toLowerCase())] === undefined) return el;
      return el == el.toLowerCase()
        ? alph[(alph.indexOf(el.toLowerCase()) + 13) % 26]
        : alph[(alph.indexOf(el.toLowerCase()) + 13) % 26].toUpperCase();
    })
    .join("");
}

console.log(rot13("Test")); // 'grfg'

let myVariable; // No value assigned

if (myVariable === undefined) {
  console.log("The variable is undefined");
}
