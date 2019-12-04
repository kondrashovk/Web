function sumInput() {
  let arr = [];
  while (true) {
    let val = prompt("Введи число");
    if (val == null) break;
    arr.push(+val);
  }
  let s = 0;

  s = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return s;
}
alert(sumInput());
