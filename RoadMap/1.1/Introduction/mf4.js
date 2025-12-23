// Підключаємо модуль 'fs' для роботи з файлами
const fs = require("fs");

// Створюємо або перезаписуємо файл 'example.txt'
fs.writeFileSync("example1.txt", "Привіт, це мій перший файл у Node.js!");

// Читаємо файл і виводимо його вміст
const content = fs.readFileSync("example.txt", "utf-8");
console.log("Вміст файлу:", content);
