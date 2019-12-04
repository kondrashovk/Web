function sumNum() {
  let arr = [];
  while (true) {
    let val = prompt("Введи число");
    if (val == null) break;
    arr.push(val);
  }
  var b1=0;
  for(i=0;i<arr.length;i++)
    {
  if (isNaN (arr[i])) {if (confirm ('Вы ввели вообще не число\nПопробуете снова?')) sumNum()}
  else if (arr[i] != parseInt (Math.abs (arr[i]))) {if (confirm ('Вы ввели не натуральное число\nПопробуете снова?')) sumNum()}
  else {for (var s = arr[i], b = 0; +arr[i] > 0; b += arr[i] % 10, arr[i] = Math.floor (arr[i] / 10));}
   b1=b+b1;
    }
    return b1;
}
alert(sumNum());
