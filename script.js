'use strict';
const a = +prompt('Введите первое число');
const sign = prompt('Введите знак');
const b = +prompt('Введите второе число');

if (isNaN(a) || isNaN(b)) {
    console.log('Некорректный ввод чисел')
} else {
    if (!a) {
        console.log('Первое число не указано')
    } else {
        if (!b) {
            console.log('Второе число не указано')
        } else {
            if (!sign) {
                console.log('Не введен знак')
            } else {
                switch (sign) {
                    case "+":
                        alert(a + b);
                        break;
                    case "-":
                        alert(a - b);
                        break;
                    case "/":
                        alert(a / b);
                        break;
                    case "*":
                        alert(a * b);
                        break;
                    default:
                        alert('Программа не поддерживает такую операцию')
                }
            }
        }
    }
}
