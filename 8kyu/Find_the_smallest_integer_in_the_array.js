function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
