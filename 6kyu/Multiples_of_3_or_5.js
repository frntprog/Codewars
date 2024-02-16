function solution(number) {
  let res = new Set();
  for (let i = 1; i < number; i++) {
    if (Number.isInteger(i / 3)) {
      res.add(i);
    }
    if (Number.isInteger(i / 5)) {
      res.add(i);
    }
  }

  return [...res].reduce((acc, curr) => (acc += curr), 0);
}

console.log(solution(10));
