const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введи щось: ", (answer) => {
  console.log("Ти ввів:", answer);
  rl.close();
});
