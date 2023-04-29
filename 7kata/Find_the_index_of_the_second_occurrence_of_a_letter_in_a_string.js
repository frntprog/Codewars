function secondSymbol(s, symbol) {
  let counter = 0;
  let index = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == symbol) {
      counter++;
    }
    if (counter == 2) {
      index = i;
      break;
    }
  }
  return index;
}
