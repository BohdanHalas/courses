"use strict";
// // // // 👀 STRICT MODE | Стрікт мод
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :)`);

// // const interface = `Audio`;
// // const private = 555;
// // const if = 23;

// // // 👀 Функції | FUNCTIONS

// function logger() {
//   console.log(`My name is Bohdan!`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number(`23`);

// //  Function declaration👀
// function calcAge1(birthYear) {
//   console.log(`1`);
//   return 2025 - birthYear;
// }
// const age1 = calcAge1(1999);
// console.log(age1);

// // Function expression 👀
// const calcAge2 = function (birthYear) {
//   console.log(`2`);
//   return 2025 - birthYear;
// };

// const age2 = calcAge2(1999);

// console.log(age1, age2);

// // Arrow Functions | Стрілочні функції 👀
// const calcAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retries in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1999, `Bohdan`));
// console.log(yearsUntilRetirement(2009, `Nata`));

// // 👀 ВКЛАДЕНІ ФУНКЦІЇ | FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = (birthYear) => 2025 - birthYear;

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retries in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   // return `${firstName} retries in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1999, `Bohdan`));
// console.log(yearsUntilRetirement(1950, `Mike`));

// // // 👀 Вступ до МАСИВІВ

// const friend1 = `Vlad`;
// const friend2 = `Andriy`;
// const friend3 = `Roman`;

// const friends = [`Vlad`, `Andriy`, `Roman`];
// console.log(friends);

// const years = new Array(1999, 2009, 1973, 1979);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Slavik`;
// console.log(friends);

// //friends = [`Bob`, `Alice`];

// const firstName = `Bohdan`;
// const bohdan = [firstName, `Halas`, 2025 - 1999, `volotsyga`, friends];
// console.log(bohdan);
// console.log(bohdan.length);

// // Exercise

// const calcAge = (birthYear) => 2025 - birthYear;

// const yearsFriends = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(yearsFriends));

// const age1 = calcAge(yearsFriends[0]);
// const age2 = calcAge(yearsFriends[1]);
// const age3 = calcAge(yearsFriends[yearsFriends.length - 1]);

// console.log(age1, age2, age3);
// const ages = [age1, age2, calcAge(yearsFriends[yearsFriends.length - 1])];
// console.log(ages);
// // 👀 БАЗОВІ ОПЕРАЦІЇ З МАСИВАМИ (МЕТОДИ)

// const friends = [`Vlad`, `Andriy`, `Roman`];

// // 🗨 Add elements🗨
// // Push - додає в кінець масиву і повертає довжину
// const newLength = friends.push(`Slavik`);
// console.log(friends);
// console.log(newLength);
// // Unshift - додає на початок масиву і повертає довжину
// friends.unshift(`Ihor`);
// console.log(friends);

// // 🗨 Remove elements 🗨
// // Pop - видаляє останній елемент масиву і повертає його значення
// friends.pop(); // Last
// const poped = friends.pop(); // Last
// console.log(poped);
// console.log(friends);

// // Shift - видаляє перший елемент масиву і повертає його значення

// const shifted = friends.shift(); // First
// console.log(shifted);
// console.log(friends);

// // 🗨Other methods 🗨
// // indexOf - повертає номер комірки з масиву, в які знаходилось значення надане цьому методу

// console.log(friends.indexOf(`Andriy`));
// console.log(friends.indexOf(`Bob`)); // -1 бо такого нема

// //includes - повертає буль з тру/фолс, чи є наш елемент в масиві

// friends.push(23);
// console.log(friends.includes(`Andriy`));
// console.log(friends.includes(`Bob`));
// console.log(friends.includes(`23`));
// console.log(friends.includes(23));

// if (friends.includes(`Vlad`)) {
//   console.log(`You have a friend called Vlad`);
// } else {
//   console.log(`You don't have a friend called Vlad`);
// }
// //👀 Вступ до об'єктів + | Dot and bracket notations
// const bohdan = {
//   firstName: `Bohdan`,
//   lastName: `Halas`,
//   age: 2025 - 1999,
//   job: `Volotsyga`,
//   friends: [`Vlad`, `Andriy`, `Roman`],
// };
// console.log(bohdan);

// console.log(bohdan.lastName);
// console.log(bohdan[`lastName`]);

// const nameKey = `Name`;
// console.log(bohdan[`first` + nameKey]);
// console.log(bohdan[`last` + nameKey]);

// let interestedIn = prompt(`What do you want to know about Bohdan? Choose between firstName/lastName/age/job/friends`);
// console.log(interestedIn);
// console.log(bohdan[interestedIn]);

// while (!bohdan[interestedIn]) {
//   alert(`Wrong value. Write correct value!`);
//   interestedIn = prompt();
// }
// console.log(bohdan[interestedIn]);

// bohdan.location = `Spain`;
// bohdan[`mail`] = `bohdan.halas10@gmail.com`;
// console.log(bohdan);

// console.log(
//   `${bohdan.firstName} ${bohdan.lastName} has ${bohdan.friends.length} friends, and his best friend is called ${bohdan.friends[0]}!`
// );

/////////// 👀 Objects Methods | Методи об'єктів

// const bohdan = {
//   firstName: `Bohdan`,
//   lastName: `Halas`,
//   birthYear: 1999,
//   job: `Volotsyga`,
//   friends: [`Vlad`, `Andriy`, `Roman`],
//   hasDriversLicense: true,

//   //   calcAge: function (birthYear) {
//   //     return 2025 - birthYear;
//   //   },

//   //   calcAge: function () {
//   //     // console.log(this);
//   //     return 2025 - this.birthYear;
//   //   },

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     console.log(this.age);
//     this.about = `Name: ${this.firstName}\nSecond name: ${this.lastName}\nBirthYear: ${this.birthYear}\nJob: ${
//       this.job
//     }\nFriends: ${this.friends}\nDriverLicense: ${this.hasDriversLicense}\nAge: ${this.age ? this.age : `Не пораховано)`}`;
//     return this.about;
//   },
// };
// // console.log(this);
// console.log(bohdan.calcAge());
// // console.log(bohdan[`calcAge`](bohdan.birthYear));

// console.log(bohdan.age);
// console.log(bohdan.age);
// console.log(bohdan.age);

// console.log(bohdan.getSummary());
// console.log(bohdan.about);

/////////////👀 Цикли | Loop
// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

////// 👀 Цикли з масивами | Looping arrays

// const bohdan = [
//   `Bohdan`,
//   `Halas`,
//   2025 - 1999,
//   `Volotsyga`,
//   [`Vlad`, `Andriy`, `Roman`],
//   true,
// ];
// const types = [];
// for (let i = 0; i < bohdan.length; i++) {
//   //Reading from bohdan array
//   console.log(bohdan[i], `Тип:`, typeof bohdan[i]);

//   //Filling types array
//   //   types[i] = typeof bohdan[i];
//   types.push(typeof bohdan[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2025 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log(`---- Only Strings ----`);
// for (let i = 0; i < bohdan.length; i++) {
//   if (typeof bohdan[i] !== `string`) {
//     continue;
//   } else console.log(bohdan[i], `Тип:`, typeof bohdan[i]);
// }

// console.log(`---- BREAK WITH NUMBER ----`);
// for (let i = 0; i < bohdan.length; i++) {
//   if (typeof bohdan[i] === `number`) {
//     break;
//   } else console.log(bohdan[i], `Тип:`, typeof bohdan[i]);
// }

//////// 👀 Вкладений цикл та зворотній цикл
// const bohdan = [
//   `Bohdan`,
//   `Halas`,
//   2025 - 1999,
//   `Volotsyga`,
//   [`Vlad`, `Andriy`, `Roman`],
//   true,
// ];

// for (let i = bohdan.length - 1; i >= 0; i--) {
//   console.log(i, bohdan[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------Starting exercise ${exercise}------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}. Try #${rep}`);
//   }
// }

//////////👀 Цикл while Цикл Поки.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`'WHILE': \n Lifting weights repetition ${rep}`);
  rep++;
}

let score = 0;
// score = parseInt(Math.random() * 6) + 1;

let counterRolling = 0;
while (score !== 6) {
  score = Math.trunc(Math.random() * 6) + 1;
  counterRolling++;
  console.log(`You rolled a ${score}`);
}
console.log(counterRolling);
