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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let corr = false;
let highScore = 0;

document.querySelector(`.btn.check`).addEventListener(`click`, function () {
  // Function when WrongAnswer + GameOver;
  const wrongAnswer = function () {
    if (!corr) {
      // When too HIGH!
      if (guess > secretNumber)
        document.querySelector(`.message`).textContent = `🚀Too high🚀`;
      // When too LOW!
      if (guess < secretNumber)
        document.querySelector(`.message`).textContent = `🚩Too low🚩`;
      score--;
      document.querySelector(`.score`).textContent = score;
      // After LOSE:
      if (score === 0) {
        document.querySelector(
          `.message`
        ).textContent = `🤡Game Over. Press Again for start new game🤡`;
        document.querySelector('body').style.backgroundColor = `pink`;
        document.querySelector(`.number`).style.width = `30rem`;
        alert(`Game Over. Press Again for start new game`);
      }
    }
  };

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
        document.querySelector(`.message`).textContent = `😎CORRECT NUMBER!😎`;
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
      }
      // When wrong answer:
      else wrongAnswer();
    }
    // When incorrect value
    else
      document.querySelector(
        `.message`
      ).textContent = `Pls choose number between 1 and 20`;
  }
});

document.querySelector(`.btn.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  corr = false;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.message`).textContent = `Start guessing ...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  // document.querySelector(`.guess`).textContent = ``;
  // document.querySelector(`.number`).value = secretNumber;
});
