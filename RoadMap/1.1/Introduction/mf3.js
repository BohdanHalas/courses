const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Як ваше ім'я? ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});
