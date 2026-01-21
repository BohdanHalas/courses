'use strict';
/*
function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = `Steven`;
      //Reassigning outer scope's variable 
      output = `NEW OUTPUT! `;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(3, 2));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = `Bohdan`;
calcAge(1991);

// console.log(age);
// printAge();
*/

/////////// 👀👀👀Hoisting👀👀👀
//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = `Bohdan`;
let job = `Burlaka`;
const year = 1999;

//Functions

console.log(addDecl(3, 2));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// console.log(addExpr2(2, 3));
// console.log(addArrow2(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExpr2 = function (a, b) {
  return a + b;
};

var addArrow2 = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
