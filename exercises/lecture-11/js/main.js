'use strict';

// Завдання 1: Відображення повідомлення "Hello JavaScript!"
const message1 = "Hello";
const message2 = "JavaScript";
alert(`${message1} ${message2}!`);

// Завдання 2: Програма для обчислення суми двох чисел
const x = Number(prompt("Enter the first number (x):"));
const y = Number(prompt("Enter the second number (y):"));
alert(`The sum of x and y is: ${x + y}`);

// Завдання 3: Програма для вгадування числа
const targetNumber = 3;
const userGuess = Number(prompt("Guess the number (between 1 and 5):"));
if (userGuess === targetNumber) {
  alert("Congratulations, You did it!");
} else if (userGuess > targetNumber) {
  alert("The number is too long");
} else {
  alert("The number is short");
}

// Завдання 4: Програма для визначення дня тижня (if else)
const day = prompt("Enter the day of the week:");
if (day === "Понеділок" || day === "Monday") {
  alert("Start of the work week!");
} else if (day === "П'ятниця" || day === "Friday") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

// Завдання 4: Програма для визначення дня тижня (switch)
switch(day) {
  case "Понеділок":
  case "Monday":
    alert("Start of the work week!");
    break;
  case "П'ятниця":
  case "Friday":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
    break;
}

// Завдання 5: Програма для визначення ступеня студента
const score = Number(prompt("Enter the exam score:"));
let grade;

if (score < 50) {
  grade = 'F';
} else if (score < 70) {
  grade = 'D';
} else if (score < 80) {
  grade = 'C';
} else if (score < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

alert(`The student's grade is: ${grade}`);
