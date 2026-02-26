'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNumber,
  numberOfPassengers = 10,
  price = 199 * numberOfPassengers,
) {
  //ES5
  //   numberOfPassengers ||= 10;
  //   price ||= 199;

  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`1FD`, 22, `200$`);
createBooking(`12`);
createBooking(`THIRD`, 10);
createBooking(`FOURTH`, undefined, 10);
console.log(bookings);


const flightNumberExample = `LH234`;
const passengerDataExample = {
  fullName: `Halas Bohdan`,
  passport: 45646512,
};

const checkIn = function (flightNumber, passengerData) {
  flightNumber = `LH999`;
  passengerData.fullName = `Mr. ` + passengerData.fullName;

  if (passengerData.passport === 45646512) {
    console.log(`Checked in`);
  } else {
    console.log(`Wrong passport`);
  }
};

// checkIn(flightNumberExample, passengerDataExample);
// console.log(flightNumberExample, passengerDataExample);

//Is the same as doing...
// const flightNumber = flightNumberExample;
// const passenger = passengerDataExample;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person.passport);
};

newPassport(passengerDataExample);
checkIn(flightNumberExample, passengerDataExample);


const replaceStringToOneWord = function (string) {
  return string.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWordInString = function (string) {
  const [firstWord, ...otherWords] = string.trim().split(` `);
  return [firstWord.toUpperCase(), ...otherWords].join(` `);
};

//High-order function
const transformer = function (ourString, ourFunction) {
  console.log(`Original string: ${ourString}`);
  console.log(`Transformed string: ${ourFunction(ourString)}`);

  console.log(`Transformed by: ${ourFunction.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWordInString);
console.log(`-----------------------`);
transformer(`JavaScript is the best!`, replaceStringToOneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log(`🖐`);
};

document.body.addEventListener(`click`, highFive);

[`Bohdan`, `Nelia`, `Jonas`].forEach(highFive);


const greet = function (greeting) {
  return function (userName) {
    console.log(`${greeting} ${userName}`);
  };
};
const greeterHay = greet(`Hey`);
greeterHay(`Bohdan`);
greet(`Hello`)(`Jonas`);

const arrowGreet = greeting => userName =>
  console.log(`${greeting} ${userName}`);
arrowGreet(`Hola`)(`Amigo`);


const dataAboutAirlinesCompanyLufthansa = {
  name: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  // book: function () {}
  book(flightNumber, userName) {
    console.log(
      `${userName} booked a seat on ${this.name} flight ${(this, this.iataCode)}${flightNumber}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, userName });
  },
};

dataAboutAirlinesCompanyLufthansa.book(239, `Bohdan Halas`);
dataAboutAirlinesCompanyLufthansa.book(132, `Jonas Smith`);
console.log(dataAboutAirlinesCompanyLufthansa.bookings);
const dataAboutAirlinesCompanyEurowings = {
  name: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = dataAboutAirlinesCompanyLufthansa.book;

// Does NOT WORK!
// book (23, `Sarah`);

// CALL METHOD
book.call(dataAboutAirlinesCompanyEurowings, 23, `Sarah`);
console.log(dataAboutAirlinesCompanyEurowings);

book.call(dataAboutAirlinesCompanyLufthansa, 199, `Marry`);
console.log(dataAboutAirlinesCompanyLufthansa.bookings);

const dataAboutAirlinesCompanySwiss = {
  name: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(dataAboutAirlinesCompanySwiss, 454, `Andriy`);
console.log(dataAboutAirlinesCompanySwiss.bookings);

// APPLY METHOD
const flightData = [123, `George Cooper`];
book.apply(dataAboutAirlinesCompanySwiss, flightData);
console.log(dataAboutAirlinesCompanySwiss.bookings);

const secondFlightData = [999, `Nick Fury`];
book.call(dataAboutAirlinesCompanySwiss, ...secondFlightData);

// BIND METHOD
// book.call(dataAboutAirlinesCompanyEurowings, 23, `Sarah`);
const bookEurowings = book.bind(dataAboutAirlinesCompanyEurowings);
bookEurowings(11, `Steven Williams`);
const bookSwiss = book.bind(dataAboutAirlinesCompanySwiss);
const bookLufthansa = book.bind(dataAboutAirlinesCompanyLufthansa);

const bookEurowings11 = book.bind(dataAboutAirlinesCompanyEurowings, 11);
bookEurowings11(`Bohdan Halas`);
bookEurowings11(`Marta Cooper`);

// With Event Listeners
dataAboutAirlinesCompanyLufthansa.planes = 300;
dataAboutAirlinesCompanyLufthansa.buyNewPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(`.buy`)
  ?.addEventListener(
    `click`,
    dataAboutAirlinesCompanyLufthansa.buyNewPlane.bind(
      dataAboutAirlinesCompanyLufthansa,
    ),
  );

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));

const newAddVAT = rate => value => value + value * rate;

console.log(newAddVAT(0.23)(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const otherAddVAT = addTaxRate(0.23);
console.log(otherAddVAT(100));
// console.log(otherAddVAT(23));
*/
