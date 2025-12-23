"use strict";

var x = 0;
function f() {
  var x = (y = 1); // ReferenceError: y is not defined
}
f();

console.log(x, y);
