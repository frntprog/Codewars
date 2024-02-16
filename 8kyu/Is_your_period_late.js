function periodIsLate(last, today, cycleLength) {
  let period = (today.getTime() - last.getTime()) / (1000 * 3600 * 24);
  return period > cycleLength;
}
