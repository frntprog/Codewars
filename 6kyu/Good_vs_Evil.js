function goodVsEvil(good, evil) {
  const gForce = [1, 2, 3, 3, 4, 10];
  const eForce = [1, 2, 2, 2, 3, 5, 10];

  let gPoints = good
    .split(" ")
    .map((el, i) => gForce[i] * el)
    .reduce((acc, curr) => (acc += curr));
  let ePoints = evil
    .split(" ")
    .map((el, i) => eForce[i] * el)
    .reduce((acc, curr) => (acc += curr));

  const result = gPoints - ePoints;

  switch (true) {
    case result > 0:
      return "Battle Result: Good triumphs over Evil";

    case result < 0:
      return "Battle Result: Evil eradicates all trace of Good";

    case result == 0:
      return "Battle Result: No victor on this battle field";

    default:
      return "";
  }
}

console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
