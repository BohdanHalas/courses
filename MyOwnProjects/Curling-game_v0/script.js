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
const btnNewGame = document.querySelectorAll(`.btn-new-game`);
const btnNextRound = document.getElementById(`btnNextRound`);
const playerName = document.getElementById(`turnText`);
const roundResult = document.getElementById(`throwResult`);
const roundScore1 = document.getElementById(`roundScore1`);
const roundScore2 = document.getElementById(`roundScore2`);
const resultMessage = document.getElementById(`resultMessage`);
const btnContinue = document.querySelector(`.btn-continue`);
const stoneStyle = document.querySelector(`.moving-stone`).style;
const indicatorStyle = document.getElementById(`turnDot`).style;
const indicatorAnimation = document.querySelector(`.turn-dot`);
const stone1 = document.querySelector('.player-1');
const stone2 = document.querySelector('.player-2');
let moveUp = 0;

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
  roundScore1.textContent = winner[0];
  roundScore2.textContent = winner[1];
  distance1.textContent = distanceToCenter + ` м`;
  distance2.textContent = distanceToCenter + ` м`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
  btnThrow.disabled = false;
  btnSweep.disabled = true;
  btnEndTurn.disabled = false;
  roundResult.classList.add(`hidden`);
  resultMessage.classList.add(`hidden`);
  stoneStyle.backgroundColor = `red`;
  indicatorStyle.backgroundColor = `red`;
  indicatorAnimation.classList.remove(`no-animation`);
  stone1.classList.add('active');
  stone2.classList.remove('active');
  document.getElementById(`turnDot`).classList.remove('hidden');
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
    // moveStone(distanceToCenter); TODO
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
  stone1.classList.remove('active');
  stone2.classList.add('active');
  stoneStyle.backgroundColor = `yellow`;
  indicatorStyle.backgroundColor = `yellow`;
  distanceToCenter = 150;
  btnSweep.disabled = true;
  btnThrow.disabled = false;
  stoneState = `start`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
};

const endRound = function () {
  indicatorAnimation.classList.add(`no-animation`);
  stone1.classList.remove('active');
  stone2.classList.remove('active');
  roundResult.classList.toggle(`hidden`);
  let roundWinner = 0;
  if (r1 !== r2) {
    roundWinner = r1 < r2 ? 1 : 2;
    document.getElementById(
      `throwText`
    ).textContent = `Цей раунд за гравцем ${roundWinner}!`;
    winner[roundWinner - 1]++;
  } else
    document.getElementById(
      `throwText`
    ).textContent = `Цей раунд закінчився нічиєю!`;
  btnSweep.disabled = true;
  roundScore1.textContent = winner[0];
  roundScore2.textContent = winner[1];
  fEndGame();
};

const nextRound = function () {
  distanceToCenter = 150;
  throwDistance = 0;
  sweepDistance = 0;
  currentPlayer = 1;
  stoneState = `start`;
  r1 = 0;
  r2 = 0;
  roundScore1.textContent = winner[0];
  roundScore2.textContent = winner[1];
  distance1.textContent = distanceToCenter + ` м`;
  distance2.textContent = distanceToCenter + ` м`;
  playerName.textContent = `Хід: Гравець ${currentPlayer}`;
  btnThrow.disabled = false;
  btnSweep.disabled = true;
  btnEndTurn.disabled = false;
  roundResult.classList.add(`hidden`);
  resultMessage.classList.add(`hidden`);
  stoneStyle.backgroundColor = `red`;
  indicatorStyle.backgroundColor = `red`;
  indicatorAnimation.classList.remove(`no-animation`);
  stone1.classList.add('active');
  stone2.classList.remove('active');
};

const fEndGame = function () {
  if (winner.includes(3)) {
    console.log(winner.indexOf(3));
    resultMessage.classList.remove(`hidden`);
    indicatorAnimation.classList.add(`no-animation`);
    stone1.classList.remove('active');
    stone2.classList.remove('active');
    document.getElementById(`resultTitle`).textContent = `Гравець ${
      winner.indexOf(3) + 1
    } - переможець!`;
  }
};
// TODO
// function moveStone() {
//   const stone = document.querySelector('.moving-stone');
//   const maxRange = 260;
//   moveUp += maxRange / sweepDistance;
//   stone.style.transform = `translateY(-${moveUp}px)`;
// }
// Init + New Game
init();
for (let i = 0; i <= 1; i++) {
  btnNewGame[i].addEventListener(`click`, init);
}
//Кидок
btnThrow.addEventListener(`click`, fThrow);

//Свіп
btnSweep.addEventListener(`click`, fSweep);

//Кінець ходу за власним бажанням
btnEndTurn.addEventListener(`click`, fEndTurn);

// Некст Рауннд
btnNextRound.addEventListener(`click`, nextRound);

// Повідомлення про переможця
btnContinue.addEventListener('click', function () {
  resultMessage.classList.add(`hidden`);
  btnThrow.disabled = true;
  btnSweep.disabled = true;
  btnEndTurn.disabled = true;
  roundResult.classList.add(`hidden`);
  playerName.textContent =
    'Гра закінчена! Натисніть "Нова гра" - щоб зіграти заново!';
  stoneStyle.backgroundColor = `green`;
  document.getElementById(`turnDot`).classList.add('hidden');
});
