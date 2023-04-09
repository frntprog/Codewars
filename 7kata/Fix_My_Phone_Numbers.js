function isItANum(str) {
  const num = str
    .split("")
    .filter((el) => Number.isInteger(+el) && el !== " ")
    .join("");
  if (num[0] === "0" && num.length == 11) return num;
  return "Not a phone number";
}

console.log(isItANum("0f £ M X H   Z U u C276549545")); // "02078834982"
console.log("b ob".trim());
