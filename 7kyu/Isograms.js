function isIsogram(str) {
  return (
    new Set(...[str.split("").map((el) => el.toLowerCase())]).size == str.length
  );
}

console.log(isIsogram("Dermatoglyphics"));
