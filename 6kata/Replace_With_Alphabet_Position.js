function alphabetPosition(text) {
  const hash = {};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    hash[letter] = i + 1; // Adding 1 to make positions start from 1
  }

  let res = [];
  text
    .toLowerCase()
    .split("")
    .forEach((el) => (el.match(/[a-z]/i) ? res.push(hash[el]) : null));

  console.log(res);

  return res.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
