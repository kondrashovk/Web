var sum1;
function Sum(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function() {
    sum1 = this.a + this.b;
  };
}
var res = new Sum(5, 7);
res.sum();
console.log(sum1);
