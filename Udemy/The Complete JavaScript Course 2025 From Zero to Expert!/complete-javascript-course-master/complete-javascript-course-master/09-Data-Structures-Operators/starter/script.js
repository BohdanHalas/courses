'use strict';

const weekDays = [`lunes`, `martes`, `wed`, `thu`, `fri`, `sat`, `sun`];


const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  // ES6 enhanced object literals
  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (main, ...otherIngredients) {
    console.log(main);
    console.log(otherIngredients);
  },
};

/*
const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[0]);

console.log(airline.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`You got the middle seat`);
  else console.log(`You got lucky`);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(new String(`Bohdan`));
console.log(typeof new String(`Bohdan`));
console.log(typeof new String(`Bohdan`).slice(1));

console.log(`----------------------------------------------------------`);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(`BohdaN`.toUpperCase());

// Fix capitalization in name
const toCorrectName = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};
console.log(toCorrectName(`bOHdAn`));

// Check (Comparing) email

const checkEmails = function (correctEmail, email) {
  const normalizedEmail = email.toLowerCase().trim();
  return correctEmail === normalizedEmail;
  // const lowerEmail = loginEmail.toLowerCase();
  // const trimmedEmail = lowerEmail.trim();
};
const email = `hello@bohdan.io`;
const loginEmail = `    Hello@Bohdan.Io \n`;
console.log(checkEmails(email, loginEmail));

// replacing
const priceGB = `288,97Є`;
const priceUS = priceGB.replace(`Є`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passenger come to boarding door 23. Boarding door 23!`;

console.log(announcement.replace(`door`, `gate`));
// console.log(announcement.replaceAll(`door`, `gate`));

console.log(announcement.replace(/door/g, `gate`));

//Booleans
const plane1 = `Airbus A320neo`;
console.log(plane1.includes(`A320`));
console.log(plane1.includes(`Boeing`));
console.log(plane1.startsWith(`Air`));

if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`))
  console.log(`Part of the new AIRBUS FAMILY!`);

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`))
    console.log(`You are NOT allowed on board`);
  else console.log(`Welcome aboard`);
};
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`I have socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

console.log(`---------------------------------------------------`);
// Split and join

console.log(`a+very+nice+string`.split(`+`));
console.log(`Bohdan Halas`.split(` `));

const [firstName, secondName] = `Bohdan Halas`.split(` `);

const newName = [`Mr.`, firstName, secondName.toUpperCase()].join(` `);
console.log(newName);

const capitalizationName = function (name) {
  const names = name.split(` `);
  const personNames = [];
  const upperNames = [];

  for (const n of names) {
    // personNames.push(n[0].toUpperCase() + n.slice(1));
    personNames.push(n.replace(n[0], n[0].toUpperCase()));

    const splitName = n.split(``);
    splitName[0] = splitName[0].toUpperCase();
    upperNames.push(splitName.join(``));
  }

  console.log(personNames.join(` `));
  console.log(upperNames.join(` `));
};

capitalizationName(`jessica ann smith davis`);
capitalizationName(`jonas schmedtmann`);
capitalizationName(`bohdan halas`);

// Padding

const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(30, `+`));
console.log(`Bohdan`.padStart(25, `+`).padEnd(30, `+`));

const maskCreditCard = function (number) {
  const str = number + ``;
  const finalStr = str.slice(-4).padStart(str.length, `*`);
  return finalStr;
};

console.log(maskCreditCard(4333111144447777));
console.log(maskCreditCard(1234567891234567));
console.log(maskCreditCard(1111222233334444));

// Repeat
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
planesInLine(3);
planesInLine(5);
planesInLine(12);

// Iteration with Maps
//////////// ahahahahahhahah
const question = new Map([
  [`question`, `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JS`],
  [`correct`, 3],
  [true, `Correct!`],
  [false, `Try again!`],
]);
console.log(question);

//Converting objects to maps:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}. ${value}`);
}
// let answer = Number(prompt(`Write the correct number of answer`));
const answer = 3;
while (!(answer === question.get(`correct`))) {
  answer = Number(
    prompt(`${question.get(answer === question.get(`correct`))}`),
  );
  console.log(question.get(answer === question.get(`correct`)));
}
// Convert Map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


// MAPS 

const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, `Lisbon, Portugal`));
rest
  .set(`Categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed`);
console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(rest.get(`close`) > time && rest.get(`open`) < time));
console.log(rest.has(`Categories`));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, `test`);
rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest.get(arr));
console.log(rest);
console.log(rest.size);

// New Operations to make SETS useful!
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`Intersection (Перетин множин):`, commonFoods);
// console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(
  `Union (Об'єднання унікальних значень множин):`,
  italianMexicanFusion,
);
const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log(
  `Difference (Унікальні значення множини один при об'єднані):`,
  uniqueItalianFood,
);
const uniqueItalianAndMexican = italianFoods.symmetricDifference(mexicanFoods);
console.log(
  `Symmetric Difference (Симетрична різниця об'єднаних множин. Або ж всі значення без перетину):`,
  uniqueItalianAndMexican,
);

// const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
// console.log(uniqueMexicanFood);

// const itFood = [...italianFoods];
// const mexFood = [...mexicanFoods];
// const itMexFood = [...itFood];

// for (const ing of mexFood) itFood.includes(ing) || itMexFood.push(ing);
// console.log(itMexFood);

// SETS
const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet);

console.log(new Set(`Bohdan`));

console.log(ordersSet.size);
console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`);
//ordersSet.clear;
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}

//Example
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size,
);
console.log(new Set(`halasbohdan`).size);


// Property NAMES
const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day}`;
}
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);

console.log(`Values: `, values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(`On ${x[0]} we open at ${x[1].open} and close at ${x[1].close}`);
}
console.log(`_________------------________`);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On day ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't exist`);

// Arrays
const users = [{ name: `Bohdan`, email: `mail@gmail.com` }];
const clients = [];

console.log(users[0]?.name ?? `user array - empty!`);
console.log(clients[0]?.name ?? `user array - empty!`);


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} is ${el}`);
}

console.log([...menu.entries()]);


const rest1 = {
  name: `Capri`,
  numGuests: 0,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
};
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && `<Anonymous>`;
// rest2.owner = rest2.owner && `<Anonymous>`;

rest1.owner &&= `<Anonymous>`;
rest2.owner &&= `<Anonymous>`;

console.log(rest1);
console.log(rest2);


// restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT INCLUDE 0 or ``)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/////////
// Short Circuiting (|| and &&)
console.log(`---- OR -----`);
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || `Bohdan`); // 3
console.log(`` || `Bohdan`); // Bohdan
console.log(true || 0); // true
console.log(undefined || null); // -

console.log(undefined || 0 || `` || null || `Hello` || 23);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`---- AND -----`);
console.log(0 && 'Bohdan');
console.log(7 && `Bohdan`);
console.log(`` && 0);

console.log(`Hello` && 23 && null && `Bohdan`);

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b);
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers);
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`Mushrooms`, `onion`, `olives`, `spinach`);
restaurant.orderPizza(`Mushrooms`);

const arr = [7, 8, 9];

const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

console.log(...goodNewArray);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'Bohdan';
const letters = [...str, ``, `H.`];
console.log(letters);
console.log(...str);

// console.log(`${...str} Halas`); // НЕ МОЖНА
// Спред (...) використовується лише коли ми створюємо новий масив, або передаємо аргументи в функцію

// Real-world example
const ingredients = [
  //   prompt(`Let's make pasta! Ingredient 1?`),
  //   prompt(`Ingredient 2?`),
  //   prompt(`Ingredient 3?`),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// ... with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy);
console.log(restaurant);

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];

// const [nested0, , nested2] = nested;
// console.log(nested0, nested2);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


//////////////////////////
//CHALLENGE 1 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.43,
    x: 1.43,
    team2: 1.53,
  },
};
//1
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

//2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4
const playersFinal = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(playersFinal);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

//6
function printGoals(...strikers) {
  for (let i = 0; i < strikers.length; i++) {
    console.log(`Goal #${i + 1} scored ${strikers[i]}`);
  }
}
printGoals(`Lewa`, `Kimmich`, `Alaba`, `Muller`);
printGoals(...game.scored);

//7
team1 === team2 &&
  team1 === draw &&
  console.log(`${game.team1}, ${game.team2} and a Draw have same chances`);

team1 === team2 &&
  team1 < draw &&
  console.log(`${game.team1} and ${game.team2} have same chances`);

team1 === draw &&
  team1 < team2 &&
  console.log(`${game.team1} and a Draw have same chances`);

team2 === draw &&
  team2 < team1 &&
  console.log(`${game.team2} and a Draw have same chances`);

team1 < team2 &&
  team1 < draw &&
  console.log(`${game.team1} is more likely to win`);

team2 < team1 &&
  team2 < draw &&
  console.log(`${game.team2} is more likely to win`);

draw < team1 && draw < team2 && console.log(`Looks like a draw`);

/////////////////////////////////////////
// Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, striker] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: scored ${striker}`);
}
// 2.
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

// 3.
for (const [, [key, odd]] of Object.entries(game.odds).entries()) {
  console.log(
    `Odd of ${game?.[key] ? `victory ${game[key]}` : `draw`}: ${odd}`,
  );
}

// Bonus.
// const scorers = {};
// const abc = [1, 2, { a: 3 }, [4, 5]];
// function updateObj(obj, ...data) {
//   console.log(data);
// }
// updateObj(scorers, ...abc);

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// Моє РІШЕННЯ

const strikers = [[], []];
for (const [i, striker] of game.scored.entries()) {
  strikers[0].includes(striker) && strikers[1][strikers[0].indexOf(striker)]++;
  if (!strikers[0].includes(striker)) {
    strikers[0].push(striker);
    strikers[1].push(1);
  }
}
const scorers = {};
// for (let i = 0; i<strikers[0].length, i++)

for (const [i, goleador] of strikers[0].entries()) {
  scorers[goleador] = strikers[1][i];
}
console.log(scorers);

const scorersGemini = {};

for (const player of game.scored) {
  // Якщо гравець уже є в об'єкті — додаємо 1, якщо немає — встановлюємо 0 і додаємо 1
  scorersGemini[player] = (scorersGemini[player] || 0) + 1;
}

console.log(scorersGemini);


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happend, on averege, every ${90 / gameEvents.size} minutes`,
);

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? `FIRST HALF` : `SECOND HALF`;
  console.log(`[${half}] ${minute}: ${event}`);
}
 TEST DATA
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const readText = function () {
  const textFresh = document.querySelector(`textarea`).value;
  const freshTextArr = textFresh.split(`\n`);

  transforfText(freshTextArr);
};

const transforfText = function (textArr) {
  const newTextArr = [];
  let finalArr = [];
  for (const [n, value] of textArr.entries()) {
    newTextArr.push(value.trim().toLowerCase().split(`_`));
    newTextArr[n][0] = newTextArr[n][0].slice(0);
    newTextArr[n][1] =
      newTextArr[n][1][0].toUpperCase() + newTextArr[n][1].slice(1);
    newTextArr[n][0] = newTextArr[n].join(``);
    newTextArr[n].pop();
    finalArr = [...finalArr, ...newTextArr[n]];
  }
  showNewText(finalArr);
};
const showNewText = function (arr) {
  for (const [i, word] of arr.entries()) {
    console.log(word.padEnd(30, ` `).padEnd(30 + i + 1, `✅`));
  }
};

document.querySelector(`button`).addEventListener(`click`, readText);
*/
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split(`+`));

const getCode = str => str.slice(0, 3).toLocaleUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output =
    `${type.startsWith(`_Delayed`) ? `🔴` : ``} ${type.replaceAll(`_`, ` `).trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(`:`, `h`)})`.padStart(
      45,
    );
  console.log(output);
}
