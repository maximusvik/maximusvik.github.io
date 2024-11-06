'use strict';

// Масив класів
const classes = ['first', 'second', 'third', 'fourth'];

// Завдання 1: Отримати перший абзац і змінити його фон
const p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

// Завдання 2: Отримати другий абзац і встановити стилі
const p2 = document.querySelector('#p2');
p2.style.backgroundColor = 'gold';
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

// Завдання 3: Отримати третій абзац і призначити клас 'third'
const p3 = document.querySelector('#p3');
p3.classList.add('third');

// Завдання 4: Отримати четвертий абзац і призначити класи 'fourth' та 'border'
const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

// Завдання 5: Отримати першу кнопку і встановити стилі
const firstButton = document.querySelectorAll('button')[0];
firstButton.style.backgroundColor = 'gold';
firstButton.style.color = 'blue';

// Завдання 6: Отримати другу кнопку та обробити натискання для приховування p1
const secondButton = document.querySelectorAll('button')[1];
secondButton.addEventListener('click', () => {
    p1.style.display = 'none';
});

// Завдання 7: Отримати третю кнопку та обробити натискання для показу p1
const thirdButton = document.querySelectorAll('button')[2];
thirdButton.addEventListener('click', () => {
    p1.style.display = 'block';
});

// Завдання 8: Отримати четверту кнопку і змінити тему
const fourthButton = document.querySelectorAll('button')[3];
fourthButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Додаткові стилі для темної теми
document.styleSheets[0].insertRule(`
    .dark-theme {
        background-color: black;
        color: white;
    }
`, document.styleSheets[0].cssRules.length);
