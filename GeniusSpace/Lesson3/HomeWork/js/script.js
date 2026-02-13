//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const frutas = fruts.map((fruts) => fruts.name);
// console.log(frutas);
//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }

//  -- 3 --
// Замініть цикл "for" на "while"
// for (let i1 = 0; i1 < 5; i1++) {
//   console.log(`цифра ${i1}!`);
// }
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

const readline = require("readline");

function input(promptText) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
async function chutatu() {
  while (true) {
    let znachennya = await input("Введи число більше 100: ");
    console.log(`Наше значення: ${znachennya}`);
    if (znachennya > 100) break;
  }
}
chutatu();

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const adv = girls.reduce((sum, divka) => sum + divka.age, 0) / girls.length;
// console.log(
//   `Середній вік дівчат ${girls.map((g) => g.name).join(`, `)}: ${adv}`
// );
