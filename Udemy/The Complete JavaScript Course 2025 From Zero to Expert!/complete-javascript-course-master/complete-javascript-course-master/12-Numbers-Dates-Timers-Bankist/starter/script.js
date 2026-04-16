'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2026-04-01T17:01:17.194Z',
    '2026-04-09T23:36:17.929Z',
    '2026-04-13T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

let currentAccount, timer;

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions FUNCTIONS Функції
const startLogOutTimer = function () {
  const tick = function () {
    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, `0`);
    const second = (time % 60).toString().padStart(2, `0`);
    console.log(min, second);
    // In each call, print the remaining time to UI

    labelTimer.textContent = `${min}:${second}`;

    // When 0 sec - stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };

  // Set time to 5 min
  let time = 60 * 5;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000 * 1);
  return timer;
};

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / 1000 / 60 / 60 / 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, `0`);
  // const month = `${date.getMonth() + 1}`.padStart(2, `0`);
  // const year = date.getFullYear();
  // const hours = `${date.getHours()}`.padStart(2, `0`);
  // const minutes = `${date.getMinutes()}`.padStart(2, `0`);
  // return `${day}/${month}/${year}, ${hours}:${minutes}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = ``;
  // .textContent = 0;

  const combinedMovsDates = account.movements.map((movement, i) => ({
    movement,
    movementDate: account.movementsDates.at(i),
  }));
  console.log(combinedMovsDates);

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  // const movs = sort
  //   ? account.movements.slice().sort((a, b) => a - b)
  //   : account.movements;

  combinedMovsDates.forEach(function (object, i, arr) {
    const { movement, movementDate } = object;
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMovement = formatCurrency(
      movement,
      account.locale,
      account.currency,
    );

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}. ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMovement}</div>
        </div>`;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const transformUsersFullNameToUserName = function (accounts) {
  accounts.forEach(function (account) {
    const userFullName = account.owner;
    const arrayWithPartOfUserNames = userFullName.toLowerCase().split(` `);
    const arrayWithInitialUserName = arrayWithPartOfUserNames.map(partName =>
      partName.at(0),
    );
    account.userName = arrayWithInitialUserName.join(``);
  });
};

const countCurrentBalance = function (account) {
  account.balance = account.movements.reduce(
    (accumulator, movement) => accumulator + movement,
  );
};

const printCurrentBalance = function (currentUser) {
  const balance = formatCurrency(
    currentUser.balance,
    currentUser.locale,
    currentUser.currency,
  );
  labelBalance.textContent = balance;
};

const calculateDisplaySummary = function (account) {
  const movements = account.movements;
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((sum, movement) => sum + movement, 0);

  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency,
  );

  const outcomes = Math.abs(
    movements
      .filter(movement => movement < 0)
      .reduce((sum, movement) => sum + movement),
  );
  labelSumOut.textContent = formatCurrency(
    outcomes,
    account.locale,
    account.currency,
  );
  const percentOfInterest = account.interestRate / 100;
  const interest = movements
    .filter(movement => movement > 0)
    .map(deposit => deposit * percentOfInterest)
    .filter(interest => interest >= 1)
    .reduce((accumulator, interest) => accumulator + interest);
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency,
  );
  // console.log(intersts);
  // const interestMyAlternative = movements
  //   .filter(movement => movement > 0)
  //   .reduce((accumulator, movement) => {
  //     const a = movement * percentOfInterest;
  //     // console.log(a);
  //     if (a >= 1) {
  //       return accumulator + a;
  //     } else return accumulator;
  //   }, 0);
};
// calculateDisplaySummary(account1.movements);
// displayMovements(account1.movements);
transformUsersFullNameToUserName(accounts);
// countCurrentBalance(accounts);
// printCurrentBalance(0);
// console.log(accounts[0]);
// console.log(containerMovements?.innerHTML);
// console.log(accounts);

//Experimenting with API

// Event handler

btnLogin.addEventListener(`click`, function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log(`Login`);

  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    console.log(`Login!`);
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`;
    containerApp.style.opacity = 100;

    // create a current date and time
    const now = new Date();

    const options = {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
    };
    const locale = currentAccount.locale;
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now,
    );
    // const day = `${now.getDate()}`.padStart(2, `0`);
    // const month = `${now.getMonth() + 1}`.padStart(2, `0`);
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, `0`);
    // const minutes = `${now.getMinutes()}`.padStart(2, `0`);
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);

    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    account => account.userName === inputTransferTo.value,
  );
  console.log(amount, receiverAccount);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    receiverAccount.movementsDates.push(new Date().toISOString());
    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = ``;
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

const updateUI = function (account) {
  displayMovements(account);
  countCurrentBalance(account);
  printCurrentBalance(account);
  calculateDisplaySummary(account);
};

const deleteAccount = function () {};

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(movement => movement >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
    }, 2.5 * 1000);
  }
  inputLoanAmount.value = ``;
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.userName === currentAccount.userName,
    );
    // console.log(index);
    accounts.splice(index, 1);
    // console.log(accounts);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = ``;
    labelWelcome.textContent = `Log in to get started`;
  }
});

let sortedState = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sortedState);
  sortedState = !sortedState;
});

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, `0`);
// const month = `${now.getMonth() + 1}`.padStart(2, `0`);
// const year = now.getFullYear();
// const hours = `${now.getHours()}`.padStart(2, `0`);
// const minutes = now.getMinutes();

// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

// day/month/year
// LECTURES
/*
console.log(23 === 23.0);

// Base 10: 0 to 9; 1/10 = 0.1 | 10/3 = 3.3333333
// Binary base 2: 0 to 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number(`23`));
console.log(+`23`);

// Parsing
console.log(Number.parseInt(`30px`, 10));
console.log(Number.parseInt(`e23`, 10));

console.log(Number.parseFloat(`  2.5rem`, 10));
console.log(Number.parseInt(` 2.5rem`, 10));

// console.log(parseInt(` 2.5rem`, 10));

// Checking if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(`20`));
console.log(Number.isNaN(+`20x`));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite(`20`));
console.log(Number.isFinite(`20x`));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, `23px`, 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = function (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integers

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1;

console.log(8 % 3);
console.log(8 / 3); // 8 = 3 * 2 + 2;

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener(`click`, function () {
  [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `orangered`;
    if (i % 3 === 0) row.style.backgroundColor = `blue`;
  });
});

// 287,460,000,000
const diameterSolarSystem = 287_460_000_000;
console.log(diameterSolarSystem);

const priceInCents = 345_99;
console.log(priceInCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number(`230000`));
console.log(Number(`230_000`));
console.log(parseInt(`230_000`));

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4567654567865456787656787656n);
console.log(BigInt(4567654));

// Operations
console.log(10000n + 10000n);
console.log(1000045678765456786545n * 1000034567876543456765434567654n);
// console.log(Math.sqrt(16n));

const huge = 345676543456765456787675n;
const number = 23;
console.log(huge * BigInt(number));
console.log(20n > 15);

// Exceptions
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + ` is REALLY big!!!`); // n зникає в кінці рядка
console.log(20 + ` is REALLY big!!!`);

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
*/

// Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date(`Wed Mar 25 2026 20:06:43 GMT+0100`));
console.log(new Date(`December 24, 2015`));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);


const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / 1000 / 60 / 60 / 24);

const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(day1);

const num = 38507784.23;

const options = {
  // style: 'unit',
  // style: 'percent',
  style: 'currency',
  // unit: 'mile-per-hour',
  // unit: 'celsius',
  currency: `UAH`,
  // useGrouping: false,
};

console.log(`US: `, new Intl.NumberFormat(`en-US`, options).format(num));

console.log(`Germany: `, new Intl.NumberFormat(`de-DE`, options).format(num));

console.log(`Spain: `, new Intl.NumberFormat(`es-ES`, options).format(num));

console.log(`Ukraine: `, new Intl.NumberFormat(`ua-UA`, options).format(num));

console.log(
  `Browser(${navigator.language}): `,
  new Intl.NumberFormat(navigator.language, options).format(num),
);
*/

// setTimeout
const ingredients = [`Olives`, `Spinach`];
const orderPizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your pizza! 🍕 With: ${ing1} and ${ing2}`),
  1000 * 3,
  ...ingredients,
);
console.log(`Waiting!`);

if (ingredients.includes(`Spinach`)) clearTimeout(orderPizzaTimer);

// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1 * 1000);

const clock = setInterval(function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(`Нині ${hours}:${minutes}:${seconds} по Мадриду`);
}, 1 * 1000);

setTimeout(() => clearTimeout(clock), 5 * 1000);
