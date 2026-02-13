"use strict";
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name1;
// let city;
// name1 = "Іван";
// city = name1;
// console.log(city);

//Який буде результат виконання скрипта?
//let name = "Olga";
//console.log(`привіт ${1}`); //
//console.log(`привіт ${"name"}`); //
//console.log(`привіт ${name}`); // ?

//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// a = Number(a);
// b = parseInt(b);
// c = parseFloat(c);

// console.log(a);
// console.log(b);
// console.log(c);
// вивести в консоль тип

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//Зробіть, щоб 0.1 + 0.2 = 0.3

// let a = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(a);

//Поверніть найбільше число с набору 20, 10, 50, 40

// let a = Math.max(20, 10, 50, 40);
// let a = Math.random() * (4 - 2) + 2;
// console.log(a);

//Поверніть випадкове число в діапазоні від 2 до 4

//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// let a = message.length;
// console.log(a);

//вивести в консоль message  великими літерами

// console.log(message.toUpperCase());

// створити пустий об*єкт

// додати туди ім*я, вік і місто

// вивести результат в консоль

// видалити місто

// console.log(obect);

// додати буль з ключем: like flowers

// вивести результат в консоль
// console.log(obect);
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
let obect = { name: undefined, age: undefined, city: undefined };
obect.name;
obect.age;
obect.city;
obect.name = "Богдан";

delete obect.city;
obect["like flowers"] = true;
for (let key in obect) {
  console.log(`${key}: ${obect[key]}`);
}
//
