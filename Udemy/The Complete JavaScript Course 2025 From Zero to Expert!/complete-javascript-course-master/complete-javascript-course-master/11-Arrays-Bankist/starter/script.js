'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
///*
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let currentAccount;

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

// Functions FUNCTIONS Функції
const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;
  // .textContent = 0;
  movements.forEach(function (movement, i, arr) {
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}. ${type}</div>
          <div class="movements__value">${movement} €</div>
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
  const balance = account.movements.reduce(
    (accumulator, movement) => accumulator + movement,
  );
  account.balance = balance + ` €`;
};

const printCurrentBalance = function (currentUser) {
  labelBalance.textContent = currentUser.balance;
};

const calculateDisplaySummary = function (account) {
  const movements = account.movements;
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((sum, movement) => sum + movement, 0);
  labelSumIn.textContent = incomes + ` €`;

  const outcomes = movements
    .filter(movement => movement < 0)
    .reduce((sum, movement) => sum + movement);
  labelSumOut.textContent = Math.abs(outcomes) + ` €`;
  const percentOfInterest = account.interestRate / 100;
  const interest = movements
    .filter(movement => movement > 0)
    .map(deposit => deposit * percentOfInterest)
    .filter(interest => interest >= 1)
    .reduce((accumulator, interest) => accumulator + interest);
  labelSumInterest.textContent = interest + ` €`;
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
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`Login!`);
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // Display movements
    // console.log(currentAccount);
    displayMovements(currentAccount.movements);
    // Display balance
    countCurrentBalance(currentAccount);
    printCurrentBalance(currentAccount);
    // Display summary
    calculateDisplaySummary(currentAccount);
  }
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = [`a`, `b`, `c`, `d`, `e`];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1, 1, `ee`);
console.log(arr);

// REVERSE
arr = [`a`, `b`, `c`, `d`, `e`];
const secondArr = [`j`, `i`, `h`, `g`, `f`];
console.log(secondArr.reverse());
console.log(secondArr);

// CONCAT
const letters = arr.concat(secondArr);
console.log(letters);
console.log(...arr, ...secondArr);

// JOIN
console.log(letters.join(` - `));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.at(-1));
console.log(arr.at(-2));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`------------forEach----------------`);

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set([`USD`, `GBR`, `USD`, `EUR`, `UAH`]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});

let EURToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsInUSD = movements.map(function (movement, i, arr) {
//   return movement * EURToUSD;
// });
const movementsInUSD = movements.map(movement => movement * EURToUSD);
console.log(movements);
console.log(movementsInUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * EURToUSD);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((movement, index) => {
  const str = movement > 0 ? `deposited` : `withdrew`;
  return `Movement ${index + 1}: You ${str} ${Math.abs(movement)}`;
});
console.log(movementsDescriptions);

const testArr = [1, 2, -3, 4, -5, -6];

const nestLvlTestArr = testArr.map(value => {
  if (value > 0) return `ok`;
});
console.log(nestLvlTestArr);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(movement => movement > 0);
console.log(deposits);

const depositsForOf = [];
for (const movement of movements) {
  if (movement > 0) depositsForOf.push(movement);
}
console.log(depositsForOf);

const withdrawals = movements.filter(movement => movement < 0);
console.log(withdrawals);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(
  (accumulator, movement) => accumulator + movement,
  0,
);
console.log(balance);

let balanceForOf = 0;
for (const movement of movements) balanceForOf += movement;
console.log(balanceForOf);

const maximumMovement = movements.reduce(
  (maximum, movement) => (maximum < movement ? movement : maximum),
  movements[0],
);
console.log(maximumMovement);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const totalDepositsInUsd = movements
  .filter(movement => movement > 0)
  // .map((movement, i, array) => {
  //   console.log(array);
  //   return movement * euroToUsd;
  // })
  .map(movement => movement * euroToUsd)
  .reduce((summ, movement) => summ + movement);
console.log(totalDepositsInUsd);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(movement => movement < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(account => account.owner === `Jessica Davis`);
console.log(account);
let accountForOf = null;
for (const account of accounts) {
  if (account.owner === `Jessica Davis`) accountForOf = account;
}
console.log(accountForOf);
*/
// ------------------------------------------------------------------
// Challenge #1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const adultOrPuppy = function (age, i) {
    age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  };
  const correctDogsJulia = dogsJulia.slice(1, -2);
  // console.log(correctDogsJulia);
  const allDogs = [...correctDogsJulia, ...dogsKate];
  console.log(allDogs);
  allDogs.forEach(adultOrPuppy);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// Challenge #2

const calculateAverageHumanAge = function (dogsAgesArray) {
  const humanAges = dogsAgesArray.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4,
  );
  const adultHumanAges = humanAges.filter(humanAge => humanAge >= 18);
  const averageHumanAge = adultHumanAges.reduce(
    (sum, age, i, array) => (sum += age / array.length),
    0,
  );
  // console.log(humanAges);
  // console.log(adultHumanAges);
  // console.log(averageHumanAge);
  return averageHumanAge;
};

const firstTestData = [5, 2, 4, 1, 15, 8, 3];
const secondTestData = [16, 6, 10, 5, 6, 1, 4];
console.log(calculateAverageHumanAge(firstTestData));
console.log(calculateAverageHumanAge(secondTestData));

// Challenge #3

const updatedCalculateAverageHumanAge = function (dogsAgesArray) {
  const averageHumanAge = dogsAgesArray
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, i, array) => (acc += age / array.length), 0);
  return averageHumanAge;
};

console.log(updatedCalculateAverageHumanAge(firstTestData));
console.log(updatedCalculateAverageHumanAge(secondTestData));
*/
