"use strict";
const result = /(a+)(b+)(c+)/.exec("aaaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"

{
  const result = /(a+)(b+)(c+)/.exec("aaacbcc");
  console.log(result); // null
  const [, a, b, c] = result;
  console.log(a, b, c);
}
