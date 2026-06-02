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

Person.hey = function () {
  console.log('Привіт!');
  console.log(this);
};

Person.hey();
// bohdan.hey();

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

// class expression

// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Привіт!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.fullName);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
};

jessica.greet();

PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
