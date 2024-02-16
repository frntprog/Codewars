function lookAndSay(data, len, arr = []) {
  if (len == 0) return arr;
  res = splitString(data)
    .map((el) => el.length + el[0])
    .reduce((acc, curr) => (acc += curr));
  arr.push(res);
  return lookAndSay(res, len - 1, arr);
}

function splitString(inputString) {
  if (inputString.length === 0) {
    return [];
  }

  const resultArray = [];
  let currentGroup = inputString[0];

  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i - 1]) {
      currentGroup += inputString[i];
    } else {
      resultArray.push(currentGroup);
      currentGroup = inputString[i];
    }
  }

  resultArray.push(currentGroup);

  return resultArray;
}

console.log(splitString("1122"));
