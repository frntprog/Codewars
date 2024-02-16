function isPowerOfTwo(n) {
  return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(8));
