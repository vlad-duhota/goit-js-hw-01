let number = ' ';
let total = 0;

while (number) {
    number = +prompt('Введіть число');
    if (Number.isNaN(number)) {
        alert('Було написано не число, спробуйте ще раз');
        number = ' ';
        continue;
    } else {
        total = total + number;
    }
}

alert(`Загальна сума чисел дорівнює ${total}`);