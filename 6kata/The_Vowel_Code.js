function encode(string) {
  let codes = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return string
    .split("")
    .map((el) => (codes[el] ? codes[el] : el))
    .join("");
}

function decode(string) {
  let codes = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  return string
    .split("")
    .map((el) => (codes[el] ? codes[el] : el))
    .join("");
}

console.log(encode("hello")); // 'h2ll4'

console.log(decode("h2ll4")); // 'h2ll4'
