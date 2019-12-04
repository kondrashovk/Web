function sum (a) {
    return function (b) {return a+b; };
  }
  var sum1 = sum (6);
  console.log (sum1(3));
  