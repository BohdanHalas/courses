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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, i, arr) {
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
  account.balance = account.movements.reduce(
    (accumulator, movement) => accumulator + movement,
  );
};

const printCurrentBalance = function (currentUser) {
  labelBalance.textContent = currentUser.balance + ` €`;
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
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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

  const amount = Number(inputLoanAmount.value);

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
    Number(inputClosePin.value) === currentAccount.pin
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
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
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


console.log(movements);
const lastWithdrawal = movements.findLast(movement => movement < 0);
console.log(lastWithdrawal);

const findLastLargeMovement = function (movements) {
  const lastLargeMovement = movements.findLast(
    movement => movement >= 2000 || movement <= -2000,
  );
  const indexLastLargeMovement = movements.findLastIndex(
    movement => movement >= 2000 || movement <= -2000,
  );
  console.log(
    `Your last large movement is ${lastLargeMovement > 0 ? `deposit` : `withdrawal`} - ${Math.abs(lastLargeMovement)} was ${movements.length - indexLastLargeMovement} movements ago`,
  );
};
findLastLargeMovement(movements);

console.log(movements);
// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposits = movements.some(movement => movement > 0);
console.log(anyDeposits);

// EVERY: CONDITION
console.log(movements.every(movement => movement > 0));

// Separate callback
const deposit = movement => movement > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat());

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrayDeep.flat(2));

// flat

const overallBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((account, movement) => account + movement);
console.log(overallBalance);

// flatMap

const overallBalance2 = accounts
  .flatMap(account => account.movements)
  .reduce((account, movement) => account + movement);
console.log(overallBalance2);

// SORTING ARRAYS

// Strings
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

// return <0, A, B - keep order
// return >0, B, A - switch order

// Висхідний
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Нисхідний
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
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

// Challenge #4
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight = breeds.find(
  breed => breed.breed === `Husky`,
)?.averageWeight;
console.log(huskyWeight);

const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes(`running`) && breed.activities.includes(`fetch`),
)?.breed;
console.log(dogBothActivities);

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

const allUniqueActivities = [
  ...new Set(breeds.flatMap(breed => breed.activities)),
];
console.log(allUniqueActivities);

const swimmingAdjacent = new Set(
  breeds
    .filter(breed => breed.activities.includes(`swimming`))
    .flatMap(breed => breed.activities),
);

swimmingAdjacent.delete(`swimming`);
console.log([...swimmingAdjacent]);

console.log(breeds.every(breed => breed.averageWeight >= 10));
console.log(breeds.some(breed => breed.activities.length >= 3));

// BONUS

const breedsWhichLikesFetch = breeds.filter(breed =>
  breed.activities.includes(`fetch`),
);
console.log(breedsWhichLikesFetch);

const averageWeightsBreedsWhichLikesFetch = breedsWhichLikesFetch.map(
  breed => breed.averageWeight,
);
console.log(averageWeightsBreedsWhichLikesFetch);

const maxWeight = Math.max(...averageWeightsBreedsWhichLikesFetch);
console.log(maxWeight);

const indexOfMaxWeight = averageWeightsBreedsWhichLikesFetch.findIndex(
  weight => weight === maxWeight,
);
console.log(indexOfMaxWeight);

const breedWhichHasTheHeaviestWeightAndLikesFetch =
  breedsWhichLikesFetch[indexOfMaxWeight].breed;
console.log(breedWhichHasTheHeaviestWeightAndLikesFetch);
*/
