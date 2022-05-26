const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt('введіть пароль адміна');
let message;

if (!password) {
    message = 'Скасовано користувачем!';
} else if (password === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}

alert(message);