'use strict';

const Person = function (firstName, birthYear) {
  //   console.log(this);

  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to do this!!!
  //   this.calcAge = function () {
  //     console.log(2026 - this.birthYear);
  //   };
};

const bohdan = new Person('Bohdan', 1999);
console.log(bohdan);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const nelya = new Person(`Nelya`, 1999);
const jack = new Person(`Jack`, 1975);

console.log(nelya, jack);

const jay = 'Jay';

console.log(bohdan instanceof Person);
console.log(jay instanceof Person);
