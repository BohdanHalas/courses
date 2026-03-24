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
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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

let currentAccount;

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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, i, arr) {
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}. ${type}</div>
          <div class="movements__value">${movement.toFixed(2)} €</div>
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
  labelBalance.textContent = currentUser.balance.toFixed(2) + ` €`;
};

const calculateDisplaySummary = function (account) {
  const movements = account.movements;
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((sum, movement) => sum + movement, 0);
  labelSumIn.textContent = incomes.toFixed(2) + ` €`;

  const outcomes = movements
    .filter(movement => movement < 0)
    .reduce((sum, movement) => sum + movement);
  labelSumOut.textContent = Math.abs(outcomes.toFixed(2)) + ` €`;
  const percentOfInterest = account.interestRate / 100;
  const interest = movements
    .filter(movement => movement > 0)
    .map(deposit => deposit * percentOfInterest)
    .filter(interest => interest >= 1)
    .reduce((accumulator, interest) => accumulator + interest);
  labelSumInterest.textContent = interest.toFixed(2) + ` €`;
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

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginUsername.blur();
    inputLoginPin.blur();
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
    // Update UI
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = ``;
});

const updateUI = function (account) {
  displayMovements(account.movements);
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
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
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
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});

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
*/

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
