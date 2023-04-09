function keepOrder(arr, val) {
  const prevEls = arr.filter((el) => el < val);
  const index = arr.lastIndexOf(prevEls.pop()) + 1;
  return index;
}
