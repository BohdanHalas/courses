// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

const { constants } = require("buffer");

// let a = -3;
// let answer = true;
// a > 0 ? (answer = true) : (answer = false);
// console.log(answer);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const text = "true";
// text === "test" ? console.log(`true`) : console.log(`false`);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let a = 13;
// if (a > 10) {
//   a = a - 5;
// } else {
//   a = a + 5;
// }
// console.log(a);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let month = 1;
// rl.question("Введи назву місяця: ", (answer) => {
//   month = answer;
//   console.log(month);
//   rl.close();
// });
// console.log(month);

// const readline = require("readline");

// function input(promptText) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise((resolve) => {
//     rl.question(promptText, (answer) => {
//       rl.close();
//       resolve(answer);
//     });
//   });
// }

// async function chutatu() {
//   let month = await input("Введи номер місяця: ");
//   month = parseInt(month);
//   switch (month) {
//     case 1:
//       month = "Січень";
//       break;
//     case 2:
//       month = "Лютий";
//       break;
//     case 3:
//       month = "Березень";
//       break;
//     case 4:
//       month = "Квітень";
//       break;
//     case 5:
//       month = "Травень";
//       break;
//     case 6:
//       month = "Червень";
//       break;
//     case 7:
//       month = "Липень";
//       break;
//     case 8:
//       month = "Серпень";
//       break;
//     case 9:
//       month = "Вересень";
//       break;
//     case 10:
//       month = "Жовтень";
//       break;
//     case 11:
//       month = "Листопад";
//       break;
//     case 12:
//       month = "Грудень";
//       break;
//     default:
//       month = "Error";
//   }
//   month !== "Error" ? console.log(month) : console.log(`Невірне значення`);
// }
// chutatu();

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

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
  let abc = await input("Введи трьохзначне число: ");
  abc = parseInt(abc);
  //   let odunutsi = abc % 10;
  //   let desyatku = parseInt((abc % 100) / 10);
  //   let sotni = parseInt((abc % 1000) / 100);
  //   let sum = odunutsi + desyatku + sotni;
  //   console.log(odunutsi);
  //   console.log(desyatku);
  //   console.log(sotni);
  //   console.log(sum);
  let sum = 0;
  while (abc >= 1) {
    sum = sum + (abc % 10);
    abc = parseInt(abc / 10);
  }
  console.log(sum);
}
chutatu();
