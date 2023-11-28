function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// function isPrime(num) {
//   let res = [];
//   for (let i = 2; i <= num; i++) {
//     if (num % i == 0) {
//       res.push(i);
//     }
//   }

//   return res[0] == num ? true : false;
// }

console.log(isPrime(73));
