try {
  let x = "1";
  console.log(x); // 'try'
} catch (e) {
  let y = "catch";
  console.log(y); // 'catch'
}
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError

// Кетч виконується лише якщо в трай виникає помилка. Тому в цьому прикладі буде виведено лише 'try'. І помилки ReferenceError для x та y, оскільки вони визначені в межах блоку try та catch відповідно.
// АЛЕ в JS термінал зупиняє виконання скрипта при першій помилці, тому другий console.log(x) не буде виконано.
