'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
// console.log(btnsShowModal);

const closeModalWindow = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModalWindow = function () {
  //   console.log(`Button clicked!`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  // modal.style.display = `block`;
  // document.querySelector(`.modal.hidden`).style.display = 'block';
  // document.querySelector(`.overlay.hidden`).style.display = 'block';
};
// Open Modal Window
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, openModalWindow);

// CLose Modal Window
btnCloseModal.addEventListener(`click`, closeModalWindow);
overlay.addEventListener(`click`, closeModalWindow);
document.addEventListener('keydown', e =>
  e.key === `Escape` && !modal.classList.contains(`hidden`)
    ? closeModalWindow()
    : ``
);
document.addEventListener('keydown', function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`))
    closeModalWindow();
});
