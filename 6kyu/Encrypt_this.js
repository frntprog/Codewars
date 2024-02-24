var encryptThis = function (text) {
  return text
    .split(" ")
    .map((el) => {
      if (el.length == 1) return el[0].charCodeAt(0);
      if (el.length == 2) return el[0].charCodeAt(0) + el.slice(el.length - 1);
      return (
        el.charCodeAt(0) +
        el.slice(el.length - 1) +
        el.slice(2, el.length - 1) +
        el[1]
      );
    })
    .join(" ");
};

console.log(encryptThis("A wise old owl lived in an oak"));
