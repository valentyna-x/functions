'use strict';

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shoppingList = [
    {
        name: 'shampoo',
        quantity: 3,
        price: 100,
        amount: 300,
        isBought: true,
    },

    {
        name: 'soap',
        quantity: 10,
        price: 25,
        amount: 250,
        isBought: true,
    },

   {
        name: 'napkins',
        quantity: 5,
        price: 20,
        amount: 100,
        isBought: false,
   },

   {    
        name: 'toothpaste',
        quantity: 1,
        price: 80,
        amount: 80,
        isBought: false,
}
];

console.log(shoppingList);

for (let name of shoppingList) {
    if(name.isBought === false) {
       console.log(name);
    }
};

for (let name of shoppingList) {
    if(name.isBought === true) {
       console.log(name);
    }
};

let btn_bought = document.querySelector('#btn_bought');
let blockBought = document.querySelector('#bought');
btn_bought.addEventListener('click', getList);
blocBought.innerHTML += `<p>${name}</p>`;
