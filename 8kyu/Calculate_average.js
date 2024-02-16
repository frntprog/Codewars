function findAverage(array) {
  // your code here
  return array.length
    ? array.reduce((acc, curr) => (acc += curr), 0) / array.length
    : 0;
}
