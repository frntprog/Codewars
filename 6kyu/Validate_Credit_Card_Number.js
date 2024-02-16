function validate(n) {
  let arr = (n + "").split("");
  let sum = 0;

  if (arr.length % 2 == 0) {
    arr = arr.map((el, i) => (i % 2 == 0 ? el * 2 : +el));
  } else {
    arr = arr.map((el, i) => (i % 2 != 0 ? el * 2 : +el));
  }

  arr = arr.map((el) => {
    if (el > 9) {
      return el - 9;
    }
    return el;
  });

  sum = arr.reduce((acc, curr) => (acc += curr), 0);

  return sum % 10 == 0 ? true : false;
}

console.log(validate(2121)); // false
