//  let js = `amazing`;
// console.log(40 + 8 + 23 - 10);

// console.log(23);

// let firstName = "Богдан";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let age = 25;

// let bohdan_halas = `BH`;
// let $example = 1;

// let PI = 3.1415;

// let myFirstJob = `Supervisior`;
// let myCurrentJob = `Volotsuga`;

// let job1 = myFirstJob;
// let job2 = myCurrentJob;

// console.log(myCurrentJob);


// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof `Bohdan`);

// javaScriptIsFun = `YES!`;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;
// const birthYear = 1999;
// // birthYear = 2000; // Шляпа

// // const job; // Шляпа

// var job = `ITshnik`; // Шляпа
// job = `Teacher`; // Шляпа

// lastName = `Halas`; // Шляпа
// console.log(lastName); // Шляпа

// Математичні оператори + - * % / ** ____________________________________
// let currentYear = 2025;
// const ageBohdan = currentYear - 1999;
// const ageNatalka = currentYear - 2009;
// console.log(ageBohdan, ageNatalka);

// console.log(ageBohdan * 2, ageBohdan / 10, 2 ** 3);
//  2 ** 3 means 2 в 3 степені. = 2*2*2
// Оператори присвоєння = *= += ++ -- _____________________________________
// const firstName = `Bohdan`;
// const lastName = `Halas`;
// console.log(firstName + ` ` + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x=x+1 = 101;
// x--; // x=x-1 = 100;
// x--; // x=x-1 = 99;
// console.log(x);

// Оператори порівняння
// console.log(ageBohdan > ageNatalka); // >, <, >=, <=
// console.log(ageNatalka >= 18);

// const isFullAge = ageNatalka >= 18;

// console.log(currentYear - 1999 > currentYear - 2009);

// let currentYear = 2025;
// const ageBohdan = currentYear - 1999;
// const ageNatalka = currentYear - 2009;

// console.log(currentYear - 1999 > currentYear - 2009);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10; x = 10;
// console.log(x, y);
// const averageAge = (ageBohdan + ageNatalka) / 2;
// console.log(
//   ageBohdan,
//   ageNatalka,
//   `And their averenge Age will be ${averageAge}`
// );

// const firstName = `Bohdan`;
// const job = `Volotsuha`;
// const birthYear = 1999;
// const currentYear = 2025;

// const bohdan =
//   "I'm " +
//   firstName +
//   `, a ` +
//   (currentYear - birthYear) +
//   ` years old ` +
//   job +
//   `!`;
// console.log(bohdan);

// const bohdanNew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } years old ${job}!`;
// console.log(bohdanNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

// const age = 1;
// if (age >= 18) {
//   console.log(`Можна отримати права🚗`);
// } else console.log(`Ще не можна, зачекайте ${18 - age} років👶`);

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = `1999`;
// console.log(Number(inputYear) + 18, inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`Bohdan`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log(`I am ` + 23 + ` years old`);
// console.log(`I am ` + `23` + ` years old`);
// console.log(`23` - `10` - 3);
// console.log(`23` + `10` + 3);
// console.log(`23` - `10` + 3);
// console.log(`23` + `10` - 3);
// console.log(`23` * `2`);
// console.log(`23` / `2`);

// let n = `1` + 1;
// n = n - 1;
// console.log(n);

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Bohdan"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 110;
// if (money) {
//   console.log(`Don't spent it all 😉`);
// } else console.log(`You should get a job!`);

// let height = 0;
// if (height) {
//   console.log(`YAAY! Height is defined`);
// } else console.log(`Height is UNDEFINED`);

//  // // ОПЕРАТОРИ РІВНОСТІ ТА НЕРІВНОСТІ 👀
// const age = "18";
// if (age === 18) console.log(`Ти тільки став повнолітнім! (Суворо)`);

// if (age == 18) console.log(`Ти тільки став повнолітнім! (неСуворо)`);

// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log(`Cool! 23 is great number!`);
// } else if (favourite === 7) {
//   console.log(`7 це вау кул число!`);
// } else if (favourite === 9) {
//   console.log(`9 олсо іс е гуд намбер!`);
// } else {
//   console.log(`Твої числа не 7 чи 23`);
// }

// if (favourite !== 23) {
//   console.log(`А чому не 23?`);
// }

// // // ЛОГІЧНІ ОПЕРАТОРИ. БУЛЕВА ЛОГІКА 👀
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log(`Можна водити машину`);
// // } else console.log(`Варто комусь іншому водити машину`);

// /*
// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Можна водити машину`);
// } else console.log(`Варто комусь іншому водити машину`);
// */
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Можна водити машину`);
// } else console.log(`Варто комусь іншому водити машину`);
// // // СВІТЧ | SWITCH 👀
// const day = `monday`;

// switch (day) {
//   case `monday`: // day === `monday`
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     console.log(`Prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     break;
//   case `friday`:
//     console.log(`Record video`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend :D`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

// if (day === `monday`) {
//   console.log(`Plan course structure`);
//   console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//   console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log(`Write code examples`);
// } else if (day === `friday`) {
//   console.log(`Record video`);
// } else if (day === `saturday` || day === `sunday`) {
//   console.log(`Enjoy the weekend :D`);
// } else console.log(`Not a valid day!`);

// // // ВИРАЗИ ТА ІНСТРУКЦІЇ | EXPRESSIONS and STATEMENTS👀
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = `23 is bigger`;
// }
// const me = `Bohdan`;
// // console.log(`I'm ${2025-1999} years old! ${if (23 > 10) {
// //   const str = `23 is bigger`;
// // }}`);

// console.log(`Just ${me}`);
// // //  ОПЕРАТОР УМОВИ (ТЕРНАЛЬНИЙ) | TERNARY 👀
// const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine!`)
//   : console.log(`I like to drink water!`);

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = `wine`;
// } else drink2 = `water`;

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
