function solution(string) {
  let str = string.split("");

  for (let i = 0; i < str.length; i++) {
    if (Boolean(str[i].match(/[A-Z]/))) {
      str.splice(i, 0, " ");
      i++;
    }
  }

  return str.join("");
}

// Example usage
console.log(solution("yourStringHere"));

// Example usage
console.log(solution("yourStringHere"));

console.log(solution("camelCasingMe"));
