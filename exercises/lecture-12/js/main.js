'use strict';

// Завдання 1: Функція checkAge з використанням if else та тернарного оператора
function checkAge(age) {
  // Використання if else
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

console.log(checkAge(20)); // true
console.log(checkAge(16)); // Запит на підтвердження

// Використання тернарного оператора
const checkAgeTernary = (age) => age > 18 ? true : confirm('Did parents allow you?');

console.log(checkAgeTernary(20)); // true
console.log(checkAgeTernary(16)); // Запит на підтвердження

// Завдання 2: Функція min з використанням if else та тернарного оператора
function min(a, b) {
  // Використання if else
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return a;
  }
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

// Використання тернарного оператора
const minTernary = (a, b) => a < b ? a : (a > b ? b : a);

console.log(minTernary(2, 5)); // 2
console.log(minTernary(3, -1)); // -1
console.log(minTernary(1, 1)); // 1

// Завдання 3: Функція pow для обчислення степеня
function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    return 'Invalid input for n, must be a natural number';
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

const x = Number(prompt("Enter the base number (x):"));
const n = Number(prompt("Enter the exponent (n):"));
alert(pow(x, n));

// Завдання 4: Функція ask, переписана з використанням стрілкових функцій
const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => alert("You agreed!"),
  () => alert("You disagreed!")
);

// Завдання 5: Виклик функцій A() і C()
function A() { console.log('A was called'); return undefined; }
function B() { console.log('B was called'); return false; }
function C() { console.log('C was called'); return "foo"; }

A() && C(); // A was called C was called foo
B() && C(); // B was called C was called foo

// Завдання 6: Операції з об'єктами
let person = {
  name: "John",
  age: 30
};

console.log(person.name); // John
console.log(person.age);  // 30

// Зміна типу властивості name
person.name = {
  firstName: "John",
  lastName: "Doe"
};

console.log(person.name.firstName); // John
console.log(person.name.lastName);  // Doe

// Завдання 7: Операції з масивами

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

// Використовуємо цикл for для виведення елементів масиву
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Використовуємо цикл while для виведення елементів масиву
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Використовуємо цикл do...while для виведення елементів масиву
i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

// Завдання 8: Виведення парних елементів з масиву Numbs за допомогою циклу for
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// Завдання 9: Операції з масивом names
const names = ['Batman'];

// Додавання 'Joker' в кінець масиву
names.push('Joker');

// Додавання 'Bane' на початок масиву
names.unshift('Bane');

// Перевірка наявності 'Alfred' в масиві та додавання його, якщо його немає
if (!names.includes('Alfred')) {
  names.push('Alfred');
}

// Видалення 'Batman' з масиву, якщо він існує
const index = names.indexOf('Batman');
if (index !== -1) {
  names.splice(index, 1);
}

console.log(names); // ['Bane', 'Joker', 'Alfred']
