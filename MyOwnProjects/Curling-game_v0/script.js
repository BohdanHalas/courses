'use strict';

//init values
let distanceToCenter,
  throwDistance,
  sweepDistance,
  currentPlayer,
  stoneState,
  results,
  winner,
  moveUp;

//connect values
const distance1 = document.getElementById(`distance1`);
const distance2 = document.getElementById(`distance2`);
const btnThrow = document.getElementById(`btnThrow`);
const btnSweep = document.getElementById(`btnSweep`);
const btnEndTurn = document.getElementById(`btnEndTurn`);
const btnNewGame = document.querySelectorAll(`.btn-new-game`);
const btnNextRound = document.getElementById(`btnNextRound`);
const btnContinue = document.querySelector(`.btn-continue`);
const playerName = document.getElementById(`turnText`);
const roundResult = document.getElementById(`throwResult`);
const roundScore1 = document.getElementById(`roundScore1`);
const roundScore2 = document.getElementById(`roundScore2`);
const resultMessage = document.getElementById(`resultMessage`);
const indicatorStyle = document.getElementById(`turnDot`).style;
const indicatorAnimation = document.querySelector(`.turn-dot`);
const stone1 = document.querySelector('.player-1');
const stone2 = document.querySelector('.player-2');
const stoneOne = document.getElementById('movingStone1');
const stoneTwo = document.getElementById('movingStone2');

//init functions
const nextRound = function () {
  distanceToCenter = 260;
  throwDistance = 0;
  sweepDistance = 0;
  currentPlayer = 2;
  moveUp = [`0`, 0, 0];
  moveStone(0);
  currentPlayer = 1;
  moveStone(0);
  stoneState = `start`;
  results = [`0`, 0, 0];
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
  indicatorStyle.backgroundColor = `red`;
  indicatorAnimation.classList.remove(`no-animation`);
  stone1.classList.add('active');
  stone2.classList.remove('active');
  document.getElementById(`turnDot`).classList.remove('hidden');
  stoneTwo.classList.add(`hidden`);
};

const init = function () {
  winner = [0, 0];
  nextRound();
};

const changeTextDistance = function () {
  document.getElementById(`distance${currentPlayer}`).textContent =
    distanceToCenter + ` м`;
};

const fThrow = function () {
  if (stoneState === `start`) {
    stoneTwo.classList.remove(`hidden`);
    throwDistance = Math.trunc(Math.random() * 50) + 160;
    // console.log(throwDistance);
    distanceToCenter -= throwDistance;
    moveStone(throwDistance);
    changeTextDistance();
    stoneState = `ingame`;
    if (stoneState === `ingame`) {
      btnSweep.disabled = false;
      btnThrow.disabled = true;
    }
  }
};

const fSweep = function () {
  if (stoneState === `ingame`) {
    sweepDistance = Math.trunc(Math.random() * 20);
    // console.log(throwDistance);
    distanceToCenter -= sweepDistance;
    moveStone(sweepDistance);
    changeTextDistance();
    results[currentPlayer] = Math.abs(distanceToCenter);
    if (distanceToCenter <= 0) {
      stoneState = `finish`;
      currentPlayer === 1 ? fSwapSide() : endRound();
      btnSweep.disabled = true;
    }
  }
};

const fEndTurn = function () {
  results[currentPlayer] = Math.abs(distanceToCenter);
  if (currentPlayer === 1) fSwapSide();
  else {
    endRound();
    btnEndTurn.disabled = true;
  }
};
const fSwapSide = function () {
  currentPlayer = 2;
  moveStone(0);
  stone1.classList.remove('active');
  stone2.classList.add('active');
  indicatorStyle.backgroundColor = `yellow`;
  distanceToCenter = 260;
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
  if (results[1] !== results[2]) {
    roundWinner = results[1] < results[2] ? 1 : 2;
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

const fEndGame = function () {
  if (winner.includes(3)) {
    resultMessage.classList.remove(`hidden`);
    indicatorAnimation.classList.add(`no-animation`);
    stone1.classList.remove('active');
    stone2.classList.remove('active');
    document.getElementById(`resultTitle`).textContent = `Гравець ${
      winner.indexOf(3) + 1
    } - переможець!`;
  }
};

const moveStone = function (sweepD) {
  const pixelForMeter = 260 / 260; // 260 відстань в пікселях від старту до центру. 260 метрів в грі
  const currentStone = currentPlayer === 1 ? stoneOne : stoneTwo;
  moveUp[currentPlayer] += Math.round(pixelForMeter * sweepD);
  currentStone.style.transform = `translateY(-${moveUp[currentPlayer]}px)`;
};

const continueGame = function () {
  resultMessage.classList.add(`hidden`);
  btnThrow.disabled = true;
  btnSweep.disabled = true;
  btnEndTurn.disabled = true;
  roundResult.classList.add(`hidden`);
  playerName.textContent =
    'Гра закінчена! Натисніть "Нова гра" - щоб зіграти заново!';
  document.getElementById(`turnDot`).classList.add('hidden');
};
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
btnContinue.addEventListener('click', continueGame);
