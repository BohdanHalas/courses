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


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);
sarah.calcAge();



const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Liking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2010, 'Computer Science');
console.log(mike);
mike.introduce();
console.log(Student.__proto__ === Person.__proto__);
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);

    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but I feel more like ${2037 - this.birthYear + 10}`,
    );
  }
}

const marta = new StudentCl(`Marta Jones`, 1999, `Knitting`);
marta.introduce();
marta.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study at ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init(`Jay Son`, 2009, `Artist`);
console.log(jay);
jay.introduce();
jay.calcAge();
console.dir(jay);
*/
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
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


// Challenge #2

class Auto {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(shvydkist) {
    this.speed = shvydkist * 1.6;
  }
}
const ford = new Auto('Ford', 120);

console.log(ford);
ford.speedUS;
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.accelerate();
console.log(ford);
ford.speedUS = 50;
console.log(ford);

// Challenge #3
const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};
Car.prototype.accelerate = function () {
  this.currentSpeed += 10;
  console.log(this.currentSpeed);
};
Car.prototype.brake = function () {
  this.currentSpeed -= 5;
  console.log(this.currentSpeed);
};

const EV = function (make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.currentSpeed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`,
  );
};

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(29);
console.log(tesla);

tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

// console.log(tesla);
*/
