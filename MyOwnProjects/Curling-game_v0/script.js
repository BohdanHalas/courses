'use strict';

//init values
let distanceToCenter,
  throwDistance,
  sweepDistance,
  currentPlayer,
  stoneState,
  r1,
  r2,
  winner;

//connect values
const distance1 = document.getElementById(`distance1`);
const distance2 = document.getElementById(`distance2`);
const btnThrow = document.getElementById(`btnThrow`);
const btnSweep = document.getElementById(`btnSweep`);
const btnEndTurn = document.getElementById(`btnEndTurn`);
const btnNewGame = document.getElementById(`btnNewGame`);
const btnNextRound = document.getElementById(`btnNextRound`);
const playerName = document.getElementById(`turnText`);
const roundResult = document.getElementById(`throwResult`);
const roundScore1 = document.getElementById(`roundScore1`);
const roundScore2 = document.getElementById(`roundScore2`);

//init functions
const init = function () {
  distanceToCenter = 150;
  throwDistance = 0;
  sweepDistance = 0;
  currentPlayer = 1;
  stoneState = `start`;
  r1 = 0;
  r2 = 0;
  winner = [0, 0];
  distance1.textContent = distanceToCenter + ` м`;
  distance2.textContent = distanceToCenter + ` м`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
  btnThrow.disabled = false;
  btnSweep.disabled = true;
  btnEndTurn.disabled = false;
  roundResult.classList.add(`hidden`);
};

const fThrow = function () {
  if (stoneState === `start`) {
    throwDistance = Math.trunc(Math.random() * 90) + 10;
    // console.log(throwDistance);
    distanceToCenter -= throwDistance;
    document.getElementById(`distance${currentPlayer}`).textContent =
      distanceToCenter + ` м`;
    stoneState = `ingame`;
    if (stoneState === `ingame`) {
      btnSweep.disabled = false;
      btnThrow.disabled = true;
    }
  }
};

const fSweep = function () {
  if (stoneState === `ingame`) {
    sweepDistance = Math.trunc(Math.random() * 10) + 5;
    // console.log(throwDistance);
    distanceToCenter -= sweepDistance;
    document.getElementById(`distance${currentPlayer}`).textContent =
      distanceToCenter + ` м`;
    if ((distanceToCenter <= 0) & (currentPlayer === 1)) {
      r1 = distanceToCenter <= 0 ? distanceToCenter * -1 : distanceToCenter;
      stoneState = `finish`;
      btnSweep.disabled = true;
      fSwapSide();
    } else if ((distanceToCenter <= 0) & (currentPlayer === 2)) {
      r2 = distanceToCenter <= 0 ? distanceToCenter * -1 : distanceToCenter;
      stoneState = `finish`;
      btnSweep.disabled = true;
      endRound();
    }
  }
};

const fEndTurn = function () {
  if (currentPlayer === 1) {
    r1 = distanceToCenter <= 0 ? distanceToCenter * -1 : distanceToCenter;
    console.log(`r1: `, r1);
    fSwapSide();
  } else {
    r2 = distanceToCenter <= 0 ? distanceToCenter * -1 : distanceToCenter;
    console.log(`r2: `, r2);
    endRound();
    btnEndTurn.disabled = true;
  }
};
const fSwapSide = function () {
  currentPlayer = 2;
  distanceToCenter = 150;
  btnSweep.disabled = true;
  btnThrow.disabled = false;
  stoneState = `start`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
};

const endRound = function () {
  roundResult.classList.toggle(`hidden`);
  let roundWinner = 0;
  roundWinner = r1 < r2 ? 1 : 2;
  document.getElementById(
    `throwText`
  ).textContent = `Цей раунд за гравцем ${roundWinner}!`;
  btnSweep.disabled = true;
  winner[roundWinner - 1]++;
  roundScore1.textContent = winner[0];
  roundScore2.textContent = winner[1];
};

const nextRound = function () {
  distanceToCenter = 150;
  throwDistance = 0;
  sweepDistance = 0;
  currentPlayer = 1;
  stoneState = `start`;
  r1 = 0;
  r2 = 0;
  distance1.textContent = distanceToCenter + ` м`;
  distance2.textContent = distanceToCenter + ` м`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
  btnThrow.disabled = false;
  btnSweep.disabled = true;
  btnEndTurn.disabled = false;
  roundResult.classList.toggle(`hidden`);
};

// Init + New Game
init();
btnNewGame.addEventListener(`click`, init);
//Кидок
btnThrow.addEventListener(`click`, fThrow);

//Свіп
btnSweep.addEventListener(`click`, fSweep);

//Кінець ходу за власним бажанням
btnEndTurn.addEventListener(`click`, fEndTurn);

// Некст Рауннд
btnNextRound.addEventListener(`click`, nextRound);
//Зміна ходу

//Запис результату

//Перевірка на переможця

//Нова гра
