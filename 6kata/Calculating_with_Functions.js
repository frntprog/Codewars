function zero(op) {
  if (!op) return 0;
  return Math.trunc(eval(0 + op));
}
function one(op) {
  if (!op) return 1;
  return Math.trunc(eval(1 + op));
}
function two(op) {
  if (!op) return 2;
  return Math.trunc(eval(2 + op));
}
function three(op) {
  if (!op) return 3;
  return Math.trunc(eval(3 + op));
}
function four(op) {
  if (!op) return 4;
  return Math.trunc(eval(4 + op));
}
function five(op) {
  if (!op) return 5;
  return Math.trunc(eval(5 + op));
}
function six(op) {
  if (!op) return 6;
  return Math.trunc(eval(6 + op));
}
function seven(op) {
  if (!op) return 7;
  return Math.trunc(eval(7 + op));
}
function eight(op) {
  if (!op) return 8;
  return Math.trunc(eval(8 + op));
}
function nine(op) {
  if (!op) return 9;
  return Math.trunc(eval(9 + op));
}

function plus(a) {
  return "+" + a;
}
function minus(a) {
  return "-" + a;
}
function times(a) {
  return "*" + a;
}
function dividedBy(a) {
  return "/" + a;
}

console.log(eight(dividedBy(three()))); //35
