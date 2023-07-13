'use strict';

// /Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:


let vehicle = {   
    manufacturer: 'Dodge',
    model: 'Mustang Eleanor',
    year: 1967,
    maxSpeed: 204,
    fuelCapacity: 61,
    fuelConsumption: 25,
    drivers: 'Nicolas Cage',
}

// Метод, який виводить на екран інформацію про автомобіль.

console.log(vehicle);

// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку

if('drivers' in vehicle) {
    vehicle.driver = 'Al Pacino';
} else {
    alert('Такого водія не існує!');
}

console.log(vehicle);


// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 