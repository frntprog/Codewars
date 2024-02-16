function cookingTime(eggs) {
  let time = 0;
  for (let i = eggs / 8; i > 0; i--) {
    time += 5;
  }

  return time;
}
