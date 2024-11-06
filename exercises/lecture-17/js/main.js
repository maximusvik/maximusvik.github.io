'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Дані для таблиці
    const data = [
        { month: 'January', sales: '$ 50,000.00' },
        { month: 'February', sales: '$ 10,000.00' },
        { month: 'March', sales: '$ 85,000.00' },
        { month: 'April', sales: '$ 56,000.00' },
        { month: 'May', sales: '$ 98,000.00' }
    ];

    // Створення таблиці
    const table = document.createElement('table');
    table.classList.add('table-fill');
    
    // Створення заголовку таблиці
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const monthHeader = document.createElement('th');
    monthHeader.classList.add('text-left');
    monthHeader.textContent = 'Month';
    
    const salesHeader = document.createElement('th');
    salesHeader.classList.add('text-left');
    salesHeader.textContent = 'Sales';
    
    headerRow.appendChild(monthHeader);
    headerRow.appendChild(salesHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Створення тіла таблиці
    const tbody = document.createElement('tbody');
    tbody.classList.add('table-hover');
    
    data.forEach(rowData => {
        const row = document.createElement('tr');
        
        const monthCell = document.createElement('td');
        monthCell.classList.add('text-left');
        monthCell.textContent = rowData.month;
        
        const salesCell = document.createElement('td');
        salesCell.classList.add('text-left');
        salesCell.textContent = rowData.sales;
        
        row.appendChild(monthCell);
        row.appendChild(salesCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Додавання таблиці в контейнер на сторінці
    const tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(table);
});
