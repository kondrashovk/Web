let s = 0;
function SumArg() {
  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
}
SumArg(12, 13, 14, 15);
console.log(s);
