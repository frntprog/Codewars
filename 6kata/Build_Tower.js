function towerBuilder(n) {
  let floors = [];
  let star = "**";
  let el = "*";

  for (let i = 0; i < n; i++) {
    floors.push(el);
    el += star;
  }

  let width = floors.at(-1).length;
  let asterics = [];
  let resultString = " ".repeat(width - 1).split(" ");

  let mid = Math.floor(resultString.length / 2);

  for (let i = 0; i < floors.length; i++) {
    resultString[mid] = floors[i];
    asterics.push(resultString.join(" "));
  }
  return asterics.map((el) => {
    while (el.length !== width && el.length > 1) {
      el = el.slice(1, -1);
    }
    return el;
  });
}

console.log(towerBuilder(5));

["  *  ", " *** ", "*****"];

// n + 2
