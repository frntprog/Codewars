let countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((el) => el == 1).length;
};

console.log(countBits(1234));
