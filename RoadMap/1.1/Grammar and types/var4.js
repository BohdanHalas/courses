function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1 not 2 because of var hoisting
