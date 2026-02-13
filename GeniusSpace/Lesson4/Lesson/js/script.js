"use strict";
function showMessage() {
  console.log(`Hello`);
}
showMessage();

function showMessage1(name, city) {
  console.log(`Hello, my name is ${name}. I'm from ${city} `);
}
showMessage1(`Bodya`, `Kyiv`);
showMessage1(`Nata`, `Volyn`);

const userName = `Ann`;

const sayHi = function () {
  let message = `Hello, my name Ivan!`;
  console.log(message + userName);
  console.log(`Hi!`);
};

sayHi();

function sum(a, b) {
  // let c = a + b;
  return a + b; //c
}

let result = sum(7, 8);

console.log(result);

const addName = function () {
  const arg = Array.from(arguments);
  console.log(arguments);
  console.log(arg);
};

addName(11, 1111, "опачя");

const addName1 = function (...arg) {
  console.log(arg);
};

addName1(11, 1111, "опачя");

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  console.log(`You say ok`);
}

function showCancel() {
  console.log(`You said no`);
}

ask(`Yes or no?`, showOk, showCancel);
