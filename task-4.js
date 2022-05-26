let credits = 23580;
const pricePerDroid = 3000;
const order = +prompt('Введіть кількість дроїдів яку ви хочете придбати');
let totalPrice;

if (!order) {
    console.log('Скасовано користувачем!');
} else {
    totalPrice = pricePerDroid * order;
    if (credits >= totalPrice) {
        console.log(`Ви купили ${order} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`)
    } else {
        console.log('Недостатньо коштів на рахунку!');
    }
}
