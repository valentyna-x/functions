'use strict';

// Напиши всі можливі варіанти створення функцій.

    // Function declaration - оголошення функції

        function NewCustomerMessage() {
            alert('Wellcome our New Customer!!!')
        }

        let btn_wlc = document.querySelector('#btn_wlc');
        btn_wlc.addEventListener('click', NewCustomerMessage);

    // Function expression  - функціональний вираз

        let total_income = function() {
        let income_sales = +prompt('введіть суму доходу від продажів товарів');
        let income_servises = +prompt('введіть суму доходу від надання послуг');
        
        console.log(income_sales + income_servises);
        }
        total_income();

    // // Аrrow function - стрілкова функція

        let price = +prompt('введіть ціну шоколадки');
        let quantity = +prompt('введіть кількість шоколадок');
        
        let total_expences = (price, quantity)=> price * quantity;
        console.log(total_expences(price, quantity));

    // // Cамовикликаюча функція
        let wage_per_hour = +prompt('введіть зарплатню за годину');
        let quantity_hour = +prompt('введіть кількість відпрацьованих годин');
        let total_wage = ((wage_per_hour, quantity_hour) => wage_per_hour * quantity_hour)(wage_per_hour, quantity_hour);
        console.log(total_wage);

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

    function argumQuantity(...args) {
        
        console.log(args.length);

    }

argumQuantity(1, 2, 5, 10, 14, 7);


// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.


// Напиши функцію, яка обчислює факторіал переданого їй числа.

    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }
    
    alert(factorial(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.



// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

    let length = +prompt ('вкажіть довжину прямокутника');
    let width = +prompt ('вкажіть ширину прямокутника');
    let square = (length, width)=> length * width;
            console.log(square(length, width));

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.