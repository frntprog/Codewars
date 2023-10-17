function doMath(string) {
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
    .sort((a, b) => (a.letter > b.letter ? 1 : -1));

  return;
}

const str = "24z6 1x23 y369 89a 900b";

console.log(doMath(str));

// var str2 = "24z6";
// var matchResult = str2.match(/[0-9]+/);
