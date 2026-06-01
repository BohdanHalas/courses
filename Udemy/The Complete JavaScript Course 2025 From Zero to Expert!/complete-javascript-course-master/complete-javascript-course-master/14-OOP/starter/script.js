'use strict';
/*
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

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

bohdan.calcAge();
nelya.calcAge();
jack.calcAge();

console.log(bohdan.__proto__);
console.log(bohdan.__proto__ === Person.prototype);
console.log(Person.__proto__);

console.log(Person.prototype.isPrototypeOf(bohdan));
console.log(Person.prototype.isPrototypeOf(nelya));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(bohdan);

console.log(bohdan.hasOwnProperty('firstName'));
console.log(bohdan.hasOwnProperty('species'));

console.log(bohdan.__proto__);
console.log(bohdan.__proto__.__proto__);
console.log(bohdan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3, 6, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

// Challenge #1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

console.log(bmw, mercedes);
*/
