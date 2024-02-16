function titleCase(title, minorWords) {
  return title
    .split(" ")
    .map((el) => el.toLowerCase())
    .map((el, index) => {
      if (index == 0) return el.slice(0, 1).toUpperCase() + el.slice(1);
      return minorWords && [...minorWords.toLowerCase().split(" ")].includes(el)
        ? el
        : el.slice(0, 1).toUpperCase() + el.slice(1);
    })
    .join(" ");
}

console.log(titleCase("a clash of KINGS", "a An the of")); // 'A Clash of Kings'
