function Person(Name) {
  function Detail(Age) {
    return Name + Age;
  }
  return Detail;
}
fn_inside = Person("Roma");
res = fn_inside(17);
res1 = Person("Vlad")(15);
console.log(res);
console.log(res1);
