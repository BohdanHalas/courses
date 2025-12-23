class MyClass {
  static {
    let x = "static block";
    console.log(x); // 'static block'
  }
}
console.log(x); // ❌ ReferenceError
// x не визначено поза межами статичного блоку класу
/* Клас MyClass має статичний блок, де змінна x оголошена за допомогою let. Ця змінна
 * доступна лише в межах статичного блоку і не доступна поза його межами, що призводить
 * до помилки ReferenceError при спробі звернутися до x ззовні.
 */
