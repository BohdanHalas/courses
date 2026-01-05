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
