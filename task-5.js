const country = prompt('Введіть країну').toLowerCase();
let price;

switch (country) {
    case 'китай':
        price = 100;
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
        break;
    case 'чилі':
        price = 250;
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
        break;
    case 'австралія':
        price = 170;
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
        break;
    case 'індія':
        price = 80;
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
        break;
    case 'ямайка':
        price = 120;
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
        break;
    default:
        alert('У вашій країні доставка недоступна');
        break;
}