// !!!Сума всіх чисел массиву

// const cart = [1000, 800, 3000, 200, 1000, 1000, 800, 3000, 200, 3000, 200];
// let total = 0;
// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// !!!Сума всіх чисел массиву + 23%

// const cart = [10, 8000, 10000, 9500, 11000, 6000];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = cart[i] * 1.23;
//   total += cart[i];
//   console.log(cart[i]);
// }
// console.log('Total:', total);

// !!!Сума всіх парних чисел массиву

// const numbers = [1, 3, 4, 6, 7, 9, 12, 33, 44];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('Парні числа:', number);
//     total += number;
//   }
// }
// console.log('Total:', total);

// Скріпт пошуку логіну

// const logins = ['pavel', 'patryk', 'dima', 'vasyl', 'oleh'];
// const loginToFind = 'pavel';

// Варіант 1
// let message = `Логін ${loginToFind} не знайдено`;

// for (const login of logins) {
//    console.log('Логін:', login)
//   if (login === loginToFind) {
//     message = `Логін ${loginToFind} знайдено`;
//     break;
//    };
// }
// console.log(message);

// Варіант 2
// const message = logins.includes(loginToFind) ? `Логін ${loginToFind} знайдено` : `Логін ${loginToFind} не знайдено`;

//    console.log(message);

// Пошук найменьшого числа, яке не повторюються

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -99];

// let smallesNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallesNumber);
//   smallesNumber = number;
// }
// console.log('Найменьше число:', smallesNumber);

// Пошук найменьшого числа, яке не повторюються

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -99];

let largesNumber = numbers[0];

for (const number of numbers) {
  if (largesNumber > number);
  largesNumber = number;
}
console.log('Найбільше число:', largesNumber);

