'use strict';

//Initialization values
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

//Selecting elements
const scoreP0 = document.querySelector(`#score--0`);
const scoreP1 = document.getElementById('score--1');
const dice = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//Initialization functions
const swapSide = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove(`player--active`);
  //MAIN SWITCH
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add(`player--active`);
};

//Starting condition
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add(`hidden`);

//Pressing roll dice

btnRoll.addEventListener('click', function () {
  if (playing) {
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

      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      // curP0.textContent = currentScore; // TODO Change LATER
    } else {
      // Switch to next
      swapSide();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] < 100) swapSide();
    else {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove(`player--active`);
    }
  }
});

btnNew.addEventListener(`click`, function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove(`player--winner`);

  currentPlayer = 1;
  swapSide();
  for (let i = 0; i <= 1; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    scores[i] = 0;
    document.getElementById(`score--${i}`).textContent = scores[i];
  }
  currentScore = 0;
  currentPlayer = 0;
  playing = true;
});
