function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let num = A.filter((el) => el === A[i]);
    if (num.length % 2 !== 0) return num[0];
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
