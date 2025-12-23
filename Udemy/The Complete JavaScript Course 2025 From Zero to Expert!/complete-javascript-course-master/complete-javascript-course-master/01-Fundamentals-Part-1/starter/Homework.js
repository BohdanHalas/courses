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
