let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
/*
*let name1;
*let name1 = value1;
*let name1 = value1, name2 = value2;
*let name1, name2 = value2;
let name1 = value1, name2, /* …, *\/ nameN = valueN;
*/
