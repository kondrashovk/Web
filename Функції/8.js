function call(){
console.log(fac(5))
}
function fac(n) {
    return (n != 1) ? n * fac(n - 1) : 1;
  }

call();