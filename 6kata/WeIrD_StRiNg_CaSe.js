function toWeirdCase(string) {
  return string
    .split(" ")
    .map((el) => {
      return el
        .split("")
        .map((el, i) => (i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("");
    })
    .join(" ");
}

console.log(toWeirdCase("Weird string case")); // => "WeIrD StRiNg CaSe"
