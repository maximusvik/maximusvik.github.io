'use strict';

// Функція calculate() як функція вищого порядку
function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
        result = operation(result, number);
    }
    return result;
}

// Функція додавання
function sum(n1, n2) {
    return n1 + n2;
}

// Функція множення
function multiply(n1, n2) {
    return n1 * n2;
}

// Приклади використання calculate:
console.log(calculate(sum, 0, [1, 2, 4]));      // => 7
console.log(calculate(multiply, 1, [1, 2, 4])); // => 8

// Масив student_names
let student_names = ["Wick", "Malcolm", "Smith"];

// Використовуємо метод map для виведення результатів
student_names.map((name, index, array) => {
    console.log(`name: ${name} | index: ${index} | array: [ ${array.join(", ")} ]`);
});

// Масив об'єктів students_information
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453}
];

// Розраховуємо відсоткове значення для кожного студента
students_information.map(student => {
    const percentage = (student.degree / 600) * 100;
    console.log(`{ name: "${student.name}", degree: ${student.degree}, percentage: ${percentage.toFixed(1)} }`);
});

// Масив з вкладеними масивами
let array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

// Використовуємо метод reduce для розгортання масиву
const flattenedArray = array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? item : [item]);
}, []);

console.log(flattenedArray); // => [1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42]
