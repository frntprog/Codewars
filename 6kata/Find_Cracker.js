function findHack(arr) {
  const hacked = [];
  const scores = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  let points;
  const bonus = 20;

  arr.forEach((el) => {
    if (el[1] > 200) {
      hacked.push(el[0]);
      return;
    }
    const applyBonus = el[2].find((el) => el != "A" && el != "B");
    points = el[2].reduce((prev, curr) => {
      if (scores[curr]) {
        prev += scores[curr];
      }
      return prev;
    }, 0);

    if (!applyBonus && el[2].length >= 5) {
      points += bonus;
    }
    if (points > 200 || points !== el[1]) {
      hacked.push(el[0]);
      return;
    }
  });
  return hacked;
}
