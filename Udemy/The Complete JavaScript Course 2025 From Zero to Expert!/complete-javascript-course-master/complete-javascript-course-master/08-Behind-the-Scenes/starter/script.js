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


// console.log(this);

const calcAge = function (birthYear) {
  console.log(2026 - birthYear);
  // console.log(this);
};

calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2026 - birthYear);
  // console.log(this);
};

calcAgeArrow(1991);

const bohdan = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);
  },
};

bohdan.calcAge();

const nelia = {
  year: 2017,
};

nelia.calcAge = bohdan.calcAge;

nelia.calcAge();

const f = bohdan.calcAge;

// f();

const testBohdan = {
  year: 1999,
  f1: function () {
    const f2 = function () {
      console.log(this.year);
    };
    f2();
  },
};

testBohdan.f1();


var firstName = `Nelia`;
const bohdan = {
  firstName: `Bohdan`,
  year: 1999,
  calcAge: function () {
    // Solution 1
    // console.log(this);
    console.log(2026 - this.year);
    const self = this; // self or that
    const isMellenial = function () {
      // console.log(this);
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    // Solution 2
    const isMellenial2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellenial();
    isMellenial2();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

bohdan.greet();
bohdan.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 7, 10);
*/

const nelia1 = {
  firstName: `Nelia`,
  lastName: `Tsokurova`,
  age: 26,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedNelia = marryPerson(nelia1, `Halas`);

// const marriedNelia = nelia;
// marriedNelia.lastName = `Halas`;

console.log(`Before: `, nelia1);
console.log(`After: `, marriedNelia);

// nelia = { x: 23 };

// nelia1.age = 30;

const nelia = {
  firstName: `Nelia`,
  lastName: `Tsokurova`,
  age: 26,
  family: [`Alena`, `Polina`],
};

//Shallow copy
// const neliaCopy = { ...nelia };
// neliaCopy.lastName = `Halas`;

// neliaCopy.family.push(`Natalia`);
// neliaCopy.family.push(`Yuumi`);
// console.log(nelia);
// console.log(neliaCopy);

//Deep copy/clone

const neliaClone = structuredClone(nelia);
neliaClone.lastName = `Halas`;

neliaClone.family.push(`Natalia`);
neliaClone.family.push(`Yuumi`);
console.log(`Original: `, nelia);
console.log(`Clone: `, neliaClone);
