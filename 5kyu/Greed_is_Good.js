function score(dice) {
  const points = {
    3: 1000,
    6: 200,
    9: 300,
    12: 400,
    15: 500,
    18: 600,
    1: 100,
    5: 50,
  };

  const hash = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  let score = 0;

  for (const iterator of dice) {
    hash[iterator] += 1;

    if (hash[iterator] == 3) {
      score += points[iterator * 3];
      hash[iterator] = 0;
    }
  }

  for (const iterator of dice) {
    if (
      (iterator == 1 && hash[iterator] > 0) ||
      (iterator == 5 && hash[iterator] > 0)
    ) {
      score += points[iterator];
      hash[iterator] -= 1;
    }
  }

  return score;
}
