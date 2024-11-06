'use strict';

// Додаємо новий елемент у список
function add() {
    const input = document.getElementById('item');
    const itemText = input.value.trim();

    if (itemText === '') {
        alert('Please enter a to-do item');
        return;
    }

    // Створюємо новий елемент списку
    const li = document.createElement('li');
    li.textContent = itemText;

    // Додаємо кнопку для видалення елемента
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function () {
        li.remove();
    };
    
    // Додаємо кнопку видалення до елемента списку
    li.appendChild(deleteBtn);
    
    // Додаємо новий елемент в список
    const toDoList = document.querySelector('.to-do-list');
    toDoList.appendChild(li);

    // Очищаємо інпут
    input.value = '';
}

// Очищаємо всі елементи списку
function del() {
    const toDoList = document.querySelector('.to-do-list');
    toDoList.innerHTML = '';
}
