function isDivisible(...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[0] % args[i] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isDivisible(3, 3, 4));
