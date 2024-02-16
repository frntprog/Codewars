function numberOfPairs(gloves) {
  let res = {};

  function countToAddToTargetNumber(startingNumber, targetNumber) {
    if (targetNumber <= 0) {
      return 0;
    }

    return Math.floor(targetNumber / startingNumber);
  }

  for (let i = 0; i < gloves.length; i++) {
    if (gloves[i] in res) {
      res[gloves[i]] += 1;
    } else res[gloves[i]] = 1;
  }

  for (const [key, value] of Object.entries(res)) {
    res[key] = countToAddToTargetNumber(2, value);
  }

  return Object.values(res).reduce((acc, curr) => (acc += curr), 0);
}

console.log(
  numberOfPairs([
    "Red",
    "Aqua",
    "Gray",
    "Green",
    "Green",
    "Teal",
    "Gray",
    "Black",
    "Black",
    "Aqua",
    "Purple",
    "Teal",
    "Yellow",
    "Black",
    "Aqua",
    "Silver",
    "Olive",
    "Yellow",
    "Maroon",
    "Red",
    "Fuchsia",
    "Aqua",
  ])
);
