'use strict';

//Selecting elements
const scoreP0 = document.querySelector(`#score--0`);
const scoreP1 = document.getElementById('score--1');
const curP0 = document.getElementById(`current--0`);
const curP1 = document.getElementById(`current--1`);
const backgroundP0 = document.querySelector(`.player--0`);
const backgroundP1 = document.querySelector(`.player--1`);
const dice = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//Initialization functions
const swapSide = function () {
  if (currentPlayer === 0) {
    currentPlayer = 1;
    backgroundP1.classList.add(`player--active`);
    backgroundP0.classList.remove(`player--active`);
  } else {
    currentPlayer = 0;
    backgroundP0.classList.add(`player--active`);
    backgroundP1.classList.remove(`player--active`);
  }
  currentScore = 0;
};

//Initialization values
let currentScore = 0;
let currentPlayer = 0;
//

//Starting condition
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add(`hidden`);

//Pressing roll dice

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceScore = Math.trunc(Math.random() * 6) + 1;
  console.log(diceScore);
  // 2. Display dice
  dice.classList.remove(`hidden`);
  dice.src = `dice-${diceScore}.png`;

  // 3. Check for rolled 1
  if (diceScore !== 1) {
    // Add diceScore to current score
    currentScore += diceScore;
    curP0.textContent = currentScore; // TODO Change LATER
  } else {
    // Switch to next
    swapSide();
  }
});
