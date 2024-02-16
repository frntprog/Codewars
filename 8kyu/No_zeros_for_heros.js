function noBoringZeros(n) {
  if (n == 0) return 0;
  const str = String(n).split("");
  while (+str.at(-1) == 0) {
    str.pop();
  }
  return parseInt(str.join(""));
}

console.log(noBoringZeros(0));
