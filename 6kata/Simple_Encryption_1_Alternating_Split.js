function encrypt(text, n) {
  if (!text || n <= 0 || text == null) {
    return text;
  }
  let res = text;
  for (let i = 0; i < n; i++) {
    let even = [];
    let odd = [];

    even = res.split("").filter((el, i) => i % 2 == 0);
    odd = res.split("").filter((el, i) => i % 2 !== 0);
    console.log(even, odd);
    res = [...odd, ...even].join("");
  }

  return res;
}

function decrypt(s, n) {
  if (!s || n <= 0 || s == null) {
    return s;
  }

  const length = s.length;
  for (let i = 0; i < n; i++) {
    const halfLength = Math.floor(length / 2);
    const oddChars = s.slice(0, halfLength);
    const evenChars = s.slice(halfLength);
    s = evenChars
      .split("")
      .map(
        (char, index) => char + (index < oddChars.length ? oddChars[index] : "")
      )
      .join("");
  }

  return s;
}
