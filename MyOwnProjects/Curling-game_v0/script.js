'use strict';

//init values
let distanceToCenter = 150;
let throwDistance = 0;
let sweepDistance = 0;
let currentPlayer = 1;

//connect values
const distance1 = document.getElementById(`distance1`);
const distance2 = document.getElementById(`distance2`);
const btnThrow = document.getElementById(`btnThrow`);
distance1.textContent = distanceToCenter + ` м`;
distance2.textContent = distanceToCenter + ` м`;

//init functions
const fThrow = function () {
  throwDistance = Math.trunc(Math.random() * 90) + 10;
  console.log(throwDistance);
  distanceToCenter -= throwDistance;
  document.getElementById(`distance${currentPlayer}`).textContent =
    distanceToCenter + ` м`;
};

//Кидок
btnThrow.addEventListener(`click`, fThrow);

//Свіп
sweepDistance = +(Math.random() * 10).toFixed(2);

//Зміна ходу

//Запис результату

//Перевірка на переможця

//Нова гра
