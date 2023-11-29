function queueTime(customers, n) {
  let hash = {};
  for (let i = 1; i <= n; i++) {
    hash[i] = [];
  }
  let turn = 1;
  for (let i = 0; i < customers.length; i++) {
    hash[turn].push(customers[i]);
    turn += 1;
    if (turn > n) {
      turn = 1;
    }
  }
  console.log(hash);
  const res = Math.max(
    ...Object.values(hash).map((value) =>
      value.reduce((acc, curr) => acc + curr, 0)
    )
  );

  return res;
}

console.log(queueTime([10, 2, 3, 3], 2));
