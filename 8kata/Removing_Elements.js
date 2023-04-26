function removeEveryOther(arr) {
  return arr.filter((el, index) => {
    return index % 2 == 0 ? el : null;
  });
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
