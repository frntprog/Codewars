String.prototype.camelCase = function () {
  if (this == "") return "";
  return this.split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join("");
};

console.log("".camelCase());
