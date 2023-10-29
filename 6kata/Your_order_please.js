function order(words) {
  if (!words.length) return "";
  let wrds = words.split(" ");
  wrds = wrds
    .map((el) => {
      return {
        str: el,
        num: el.match(/(\d+)/)[0],
      };
    })
    .sort((a, b) => a.num - b.num);
  return wrds.reduce((acc, curr) => (acc += curr.str + " "), "").trim();
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
