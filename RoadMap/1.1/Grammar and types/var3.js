for (var a of [1, 2, 3]);
console.log(a); // 3

bla = 2;
var bla;

var bla;
bla = 2;

console.log(bla); // 2

function bar() {}

console.log(bar); // undefined
var bar = 111;
console.log(bar); // 111

var c = 1;
let c = 2; // SyntaxError: Identifier 'c' has already been declared

//так не можна:
let qwer = 1;
{
  var qwer = 2345; // SyntaxError: Identifier 'b' has already been declared
}
console.log(qwer);

//так можна:
var m = 1;
{
  let m = 2;
}
