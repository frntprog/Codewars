function doMath(string) {
  const operations = ["+", "-", "*", "/"];
  let res = "";
  let arr = string
    .split(" ")
    .map((el) => {
      return {
        num: el.match(/\d+/g).reduce((prev, curr) => {
          prev += curr;
          return prev;
        }, ""),
        letter: el.match(/[a-zA-Z]/)[0],
      };
    })
    .sort((a, b) => {
      if (a.letter !== b.letter) {
        return a.letter > b.letter ? 1 : -1;
      }
    });

  let oper = 0;

  for (let i = 0; i < arr.length; i++) {
    if (oper > 3) oper = 0;
    res += arr[i].num;
    if (i + 1 === arr.length) break;
    res += operations[oper];
    oper++;
  }

  const elements = res
    .split(/(\+|\-|\*|\/)/)
    .filter((element) => element.trim() !== "");

  let result = parseFloat(elements[0]);

  for (let i = 1; i < elements.length; i += 2) {
    const operator = elements[i];
    const number = parseFloat(elements[i + 1]);

    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    } else if (operator === "*") {
      result *= number;
    } else if (operator === "/") {
      result /= number;
    }
  }

  return Math.round(result);
}

const str = "24z6 1z23 y369 89z 900b";

console.log(doMath(str));
