function revrot(str, sz) {
  let arr = [];
  let st = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (st.length >= sz) {
      let chunk = st.splice(0, sz);

      if (chunk.reduce((acc, curr) => (acc += +curr), 0) % 2 == 0) {
        arr.push(...chunk.reverse());
      } else {
        arr.push(...[...chunk.slice(1), chunk[0]]);
      }
    }
  }

  return arr.join("");
}

console.log(revrot("66443875", 4)); // "44668753"
