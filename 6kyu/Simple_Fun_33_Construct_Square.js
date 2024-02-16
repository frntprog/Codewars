// function constructSquare(s) {
//   let n = s.length;
//   let poss = Math.pow(Math.ceil(Math.sqrt(Math.pow(10, n))) - 1, 2);
//   //   let diff = Math.abs(new Set(s).size - s.length);
//   let diff = s.length - new Set(s).size + 1;
//   console.log(diff);
//   if (diff && diff == s.length) return -1;
//   if (diff && diff > 1) {
//     poss = Math.pow(Math.ceil(Math.sqrt(Math.pow(10, n))) - diff, 2);
//   }

//   return poss;
// }

// function nDigitPerfectSquares(n) {
//   // Smallest n-digit perfect square
//   console.log(Math.pow(Math.ceil(Math.sqrt(Math.pow(10, n - 1))), 2) + " ");

//   // Largest n-digit perfect square
//   console.log(Math.pow(Math.ceil(Math.sqrt(Math.pow(10, n))) - 1, 2)); // -1 is a key
// }

function largestSquare(s) {
  const charCounts = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  const sortedChars = Object.keys(charCounts).sort(
    (a, b) => charCounts[b] - charCounts[a]
  );

  if (sortedChars.length > 10) {
    return -1;
  }

  const usedDigits = new Set();
  let currentDigit = 9;
  let num = 0;

  for (const char of sortedChars) {
    const count = charCounts[char];
    while (count > usedDigits.size) {
      usedDigits.add(currentDigit);
      currentDigit--;
    }

    if (usedDigits.size > 1 && usedDigits.has(0)) {
      usedDigits.delete(0);
      usedDigits.add(currentDigit);
      currentDigit--;
    }

    num += Math.pow([...usedDigits][0], count);
  }

  return num;
}

console.log(largestSquare("ab")); // Output: 81
console.log(largestSquare("zzz")); // Output: -1
console.log(largestSquare("aba")); // Output: 900
