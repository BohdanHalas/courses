'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector(`.message`).textContent = `Correct Number!😎`;
console.log(document.querySelector('.message').textContent);
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 21;
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

*/
// DRY for (document.querySelector(`.message`).textContent
const docMessage = message =>
  (document.querySelector(`.message`).textContent = message);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let corr = false;
let highScore = 0;

// Function when WrongAnswer + GameOver;
const wrongAnswer = function (guess) {
  if (!corr) {
    // When too HIGH!
    guess > secretNumber
      ? docMessage(`🚀Too high🚀`)
      : docMessage(`🚩Too low🚩`);
    score--;
    document.querySelector(`.score`).textContent = score;
    // After LOSE:
    if (score === 0) {
      docMessage(`🤡Game Over. Press Again for start new game🤡`);
      document.querySelector('body').style.backgroundColor = `pink`;
      document.querySelector(`.number`).style.width = `30rem`;
      alert(`Game Over. Press Again for start new game`);
    }
  }
};

// Simulation press Enter
document.querySelector(`.guess`).addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) {
    document.querySelector(`.btn.check`).click();
  }
});
document.querySelector(`.btn.check`).addEventListener(`click`, function () {
  // Checking If player want to play game after win previous but didn't press AGAIN
  if (corr === true) alert(`You already win! Start new game!`);
  // START GAME
  const guess = Number(document.querySelector(`.guess`).value);
  if (score > 0) {
    if (guess >= 1 && guess <= 20) {
      // When player WINS!
      if (guess === secretNumber) {
        if (highScore < score) {
          highScore = score;
          document.querySelector(`.highscore`).textContent = highScore;
        }
        corr = true;
        docMessage(`😎CORRECT NUMBER!😎`);
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
      }
      // When wrong answer:
      else wrongAnswer(guess);
    }
    // When incorrect value
    else docMessage(`Pls choose number between 1 and 20`);
  }
});

document.querySelector(`.btn.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  corr = false;
  document.querySelector(`.number`).textContent = `?`;
  docMessage(`Start guessing ...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  // document.querySelector(`.guess`).textContent = ``;
  // document.querySelector(`.number`).value = secretNumber;
});
