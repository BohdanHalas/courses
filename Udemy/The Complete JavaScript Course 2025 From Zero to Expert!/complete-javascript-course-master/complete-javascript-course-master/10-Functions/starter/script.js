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
*/
