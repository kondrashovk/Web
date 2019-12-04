function fac(n) {
    return (n != 1) ? n * fac(n - 1) : 1;
  }
console.log( fac(5) )