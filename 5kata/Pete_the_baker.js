function cakes(recipe, available) {
  let res = [];

  for (const key in recipe) {
    if (available[key]) {
      res.push(available[key] / recipe[key]);
    } else {
      return 0;
    }
  }

  return Math.trunc(Math.min(...res));
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // 2
