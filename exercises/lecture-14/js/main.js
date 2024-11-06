'use strict';

// 1. Обробка події для btn-primary
const primaryButton = document.querySelector('.btn-primary');
primaryButton.addEventListener('click', () => {
    const alert = document.getElementById('alert');
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple primary alert—check it out!';
});

// 2. Обробка події для btn-secondary
const secondaryButton = document.querySelector('.btn-secondary');
secondaryButton.addEventListener('click', () => {
    const alert = document.getElementById('alert');
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple secondary alert—check it out!';
});

// 3. Обробка події для btn-success (mouseover)
const successButton = document.querySelector('.btn-success');
successButton.addEventListener('mouseover', () => {
    const alert = document.getElementById('alert');
    alert.classList.add('alert-success');
    alert.textContent = 'A simple success alert—check it out!';
});

// 4. Обробка події для btn-success (mouseout)
successButton.addEventListener('mouseout', () => {
    const alert = document.getElementById('alert');
    alert.classList.remove('alert-success');
    alert.textContent = '';
});

// 5. Обробка події для btn-danger (focus)
const dangerButton = document.querySelector('.btn-danger');
dangerButton.addEventListener('focus', () => {
    const alert = document.getElementById('alert');
    alert.classList.add('alert-danger');
    alert.textContent = 'A simple danger alert—check it out!';
});

// 6. Обробка події для btn-danger (focusout)
dangerButton.addEventListener('focusout', () => {
    const alert = document.getElementById('alert');
    alert.classList.remove('alert-danger');
    alert.textContent = '';
});

// 7. Перемикання теми для btn-light та btn-dark
const lightButton = document.querySelector('.btn-light');
const darkButton = document.querySelector('.btn-dark');
const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    lightButton.classList.toggle('hide');
    darkButton.classList.toggle('hide');
};

lightButton.addEventListener('click', toggleMode);
darkButton.addEventListener('click', toggleMode);

// 8. Обробка події для btn-info (keypress)
const infoButton = document.querySelector('.btn-info');
infoButton.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Скасовуємо стандартну дію
        const alert = document.getElementById('alert');
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

// 9. Виведення вмісту кожної картки
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const cardTitle = card.querySelector('.card-title');
    console.log(cardTitle.textContent);
});

// 10. Обробка події для кнопок "Add to cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cardTitle = button.closest('.card').querySelector('.card-title');
        console.log(cardTitle.textContent);
    });
});
