function pigIt(str) {
  return str
    .split(" ")
    .map((el) => {
      if (el == "!" || el == "?") {
        return el;
      }
      return el.slice(1) + el.slice(0, 1) + "ay";
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay  oolcay
