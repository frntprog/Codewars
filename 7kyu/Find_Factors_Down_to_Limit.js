function factors(integer, limit) {
  let res = [];

  for (let i = integer; i >= limit; i--) {
    if (Number.isInteger(integer / i)) res.push(i);
  }

  return res.reverse();
}
