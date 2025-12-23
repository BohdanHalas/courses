function test() {
  let x = 5;
  console.log(x); // 5
}
test();
console.log(x); // ❌ ReferenceError
// x не визначено поза межами функції test
