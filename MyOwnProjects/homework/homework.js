'use strict';
/*
for (let i = 0; i <= 5; i++) {
  if (i === 1) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}

let joke = true;
console.log(`Жартуй до першого поганого жарту!`); // якщо joke менше 0,5 - жарт поганий
while (joke) {
  if (Math.random() < 0.5) {
    joke = false;
  }
  console.log(`найс джоук!`);
}

console.log(!joke);

if (joke === false || !joke === false) {
  console.log(`іххіхіхіхі`);
}

if (joke === false && !joke === true) {
  console.log(`Прикол`);
}

let x = `23`;
x === 23 ? console.log(`=23`) : console.log(`не 23`);

const value = `black`;
switch (value) {
  case `white`:
    console.log(`Білий`);
    break;
  case `black`:
    console.log(`Чорний`);
    break;
  case `red`:
    console.log(`Червоний`);
    break;
  default:
    console.log(`Нічо`);
}
*/

// console.log(addOne(1, 5));
// function addOne(a, b) {
//   return a + b;
// }

// const add2 = function (a, b) {
//   return a + b;
// };

// console.log(add2(234, 22));

// const add3 = (a, b) => a + b;

// console.log(add3(1111111, 222));

const UPL = {
  name: [`Dynamo`, `Shakhtar`, `Dnipro`],
  titles: [`Cup of Ukraine`, `Premier League`, `SuperCup`],
  valueTeams: 14,
  top10inEU: false,
  championPredict: function () {
    console.log(this.name[Math.floor(Math.random() * 3)]);
  },
};

const gold10 = 10;
const teams = `Teams`;
console.log(UPL.valueTeams);
console.log(UPL[`top` + gold10 + `inEU`]);
console.log(UPL[`value` + teams]);

UPL.championPredict();
