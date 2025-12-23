"use strict";
// Homework1_______________________________________________________________________
const country = "Ukraine";
const continent = "Europe";
let population = 40000000;

console.log(country);
console.log(continent);
console.log(population);
//Homework2__________________________________________________________________
const isIsland = false;
// const language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// console.log(typeof language); can not use before initialization
//Homework3___________________________________________________________________
const language = `ukrainian`;
//We changed type of variables: `Country`, `Continent`, `isIsland` and `language`

//Homework4___________________________________________________________________
let firstHalfOfPopulation = parseInt(population / 2);
console.log(firstHalfOfPopulation);
let secondHalfOfPopulation = population - firstHalfOfPopulation;
console.log(secondHalfOfPopulation);
population++;

// firstHalfOfPopulation = parseInt(population / 2);
// console.log(firstHalfOfPopulation);
// secondHalfOfPopulation = population - firstHalfOfPopulation;
// console.log(secondHalfOfPopulation);

let populationFinland = 6000000;
let morePeople = population > populationFinland;
console.log(morePeople);

let populationAverage = 33000000;
let moreHumans = population > populationAverage;
console.log(moreHumans);

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//Homework5
console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}`
);
//Homework6
if (population > populationAverage) {
  console.log(
    `${country}'s population is ${population - populationAverage} above average`
  );
} else {
  console.log(
    `${country}'s population is ${populationAverage - population} below average`
  );
}
//Homework7
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

//Homework8

const numNeighbour = Number(
  prompt(`How many neighbour countries does your country have?`)
);
if (numNeighbour === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbour > 1) {
  console.log(`More than 1 border`);
} else console.log(`No borders`);

//Homework9

const languageWant = `english`;
const maxPopulationWant = 50000000;
const isIslandWant = false;

if (
  language === languageWant &&
  population < maxPopulationWant &&
  isIsland === isIslandWant
) {
  console.log(`You should live in ${country} 😊`);
} else console.log(`${country} does not meet your criteria 😢`);

//Homework10

switch (language) {
  case `chinese`:
  case `mandarin`:
    console.log(`MOST number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`Number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

//Homework11

population > populationAverage
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${
    population > populationAverage ? `above` : `below`
  } average`
);

function describeCountry(country, population, capitalCity) {
  const result = `${country} has ${population} and its capital city is ${capitalCity}`;
  return result;
}
const country2 = `Finland`;
const country3 = `Spain`;
let population2 = 7000000;
let population3 = 49000000;
console.log(describeCountry(country, population, `Kyiv`));
const describeFinland = describeCountry(country2, population2, `Helsinki`);
const describeSpain = describeCountry(country3, population3, `Madrid`);
console.log(
  `Info about Finland: ${describeFinland}\nInfo about Spain: ${describeSpain}`
);

//Homework12
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100 + `%`;
}

console.log(
  `${country} has ${percentageOfWorld1(
    population
  )} of World population\n${country2} has ${percentageOfWorld1(
    population2
  )} of World population\n${country3} has ${percentageOfWorld1(
    population3
  )} of World population`
);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100 + `%`;
};
console.log(
  `${country} has ${percentageOfWorld2(
    population
  )} of World population\n${country2} has ${percentageOfWorld2(
    population2
  )} of World population\n${country3} has ${percentageOfWorld2(
    population3
  )} of World population`
);

//Homework13

const percentageOfWorld3 = (population) =>
  (population / 7900000000) * 100 + `%`;
console.log(
  `${country} has ${percentageOfWorld3(
    population
  )} of World population\n${country2} has ${percentageOfWorld3(
    population2
  )} of World population\n${country3} has ${percentageOfWorld3(
    population3
  )} of World population`
);

//Homework14

const describePopulation = (country, population) =>
  `${country} has ${population} people, which is about ${percentageOfWorld1(
    population
  )} of the World`;

console.log(describePopulation(country, population));
console.log(describePopulation(country2, population2));
console.log(describePopulation(country3, population3));

//Homework15

const populations = [population2, population, population3, 500000];

console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

//Homework16

const neighbours = [`Poland`, `Moldova`, `Romania`];

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

!neighbours.includes(`Germany`)
  ? console.log(`Probably not a central european country ;)`)
  : NaN;

neighbours[neighbours.indexOf(`Moldova`)] = `Republic of Moldova`;
console.log(neighbours);

//Homework17

const myCountry = {
  country: country,
  capital: `Kyiv`,
  language: language,
  population: population,
  neighbours: neighbours,
};

console.log(myCountry);

//Homework18

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2000000;
console.log(myCountry);
myCountry[`population`] -= 2000000;
console.log(myCountry);

myCountry.describe = function () {
  return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}`;
};
console.log(myCountry.describe());

myCountry.checkIsland = function () {
  return this.neighbours.length > 0 ? false : true;
};
console.log(myCountry.checkIsland());

const a = population + 2;

//Homework19

for (let human = 1; human <= 50; human++) {
  console.log(`Voter number ${human} is currently voting`);
}

//Homework20

// const populations = [population2, population, population3, 500000];

// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(`Рішенння задачі без циклу: \n ${percentages}`);
console.log(`Рішенння задачі з циклом 'for': \n ${percentages2}`);
//Homework21

const listOfNeighbours = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweden`, `Country 404`],
];
console.log(`---With FOR---`);
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Country #${i} has Neighbour: ${listOfNeighbours[i][j]} `);
  }
}

//Homework22
let i = 0;
console.log(`---With WHILE---`);
while (i < listOfNeighbours.length) {
  let j = 0;
  while (j < listOfNeighbours[i].length) {
    console.log(`'Country #${i} has Neighbour: ${listOfNeighbours[i][j]} `);
    j++;
  }
  i++;
}

const percentages3 = [];

i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
