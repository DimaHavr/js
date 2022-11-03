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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -99];

// let largesNumber = numbers[0];

// for (const number of numbers) {
//   if (largesNumber > number);
//   largesNumber = number;
// }
// console.log('Найбільше число:', largesNumber);

// !!!!!!!!!!!!!!!
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6
// Оголошена змінна pricePerDroid
// Значення змінної pricePerDroid - це число 800
// Оголошена змінна deliveryFee
// Значення змінної deliveryFee - це число 50
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 4850
// Оголошена змінна message
// Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// !!!!!!!!!!

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// !!!!!!!!!!

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// // !!!!!!!!!!
// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// !!!!!!!!!!!!!!!!!!

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (pricePerDroid > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
//   }
// }
// // Change code above this line
// return message;
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(200, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// !!!!!!!!!!

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     // Change this line
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     // Change this line
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// !!!!!!!!!!!!!!!!
// function isNumberInRange(start, end, number) {
//   const isInRange = '';
//   // Change this line
//   console.log(number > start && number < end);
//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// !!!!!!!!!!!

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent => 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code below this line

//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// !!!!!!!!!!!!!!!!

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     available >= ordered
//       ? 'The order is accepted, our manager will contact you'
//       : 'Not enough goods in stock!';

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

/////////////

// function getSubstring(string, length) {
//   const substring = string; // Change this line
//   console.log(substring.slice(0, length));

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

////////////////////////

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

/////////////

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length >= maxLength) {
//     message = message.slice(0, maxLength);
//     result = message + '...';
//   }

//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Curabitur ligula sapien ergegtgsfr', 16));
// console.log(formatMessage('Curabitur ligula sapien', 44));

//////////////

// function checkForSpam(message) {
//   let result;
//   const x = message;
//   // Change code below this line
//   result = x.toLowerCase(message);
//   result = result.includes('spam') || result.includes('sale');
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

/////////

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstItem = array[0];
//   const lastItem = array[array.length - 1];
//   return [firstItem, lastItem];
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));

// !!!!!!!!!!!!! Update

// function getExtremeElements(array) {
//   // Change code below this line

//   return [array[0], array[array.length - 1]];
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));

/////////////////

// function slugify(title) {
//   let array = title.split(' ');
//   let word = array.join('-');

//   return word.toLowerCase();

//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers'));

//////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let allArray = firstArray.concat(secondArray);
//   //   // Change code below this line
//   if (allArray.length >= maxLength) {
//     allArray = allArray.slice(0, maxLength);
//     return allArray;
//   }
//   return allArray;

//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

///////////////

// СУМА ЧИСЕЛ ЦИКЛ FOR

// function calculateTotal(number) {
//   let sum = 0;
//  // Change code below this line
// for (let index = 1; index <= number; index++) {
//   sum += index;
// }
// return sum;
//   // Change code above this line
// }

/////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

/////////////

// function findLongestWord(string) {
//   // Change code below this line
//   let strSplit = string.split(' ');
//   let longestWord = 0;

//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//     return longestWord;
//   }
//   // Change code above this line
// }
// console.log(findLongestWord('May the force be with you'));
// function getEvenNumbers(start, end) {
//   let numbers = [];
//   for (let num = start; num <= end; num++) {
//     if (num % 2 == 0) {
//       numbers.push(num);
//     }
//   }
//   return numbers;
// }

// console.log(getEvenNumbers());

///////////////////

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     const arr = array[i];
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], ''));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'pear'));

///////////

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// for (const key in apartment) {
//   if (keys.push([key])) {
//     console.log(keys);
//   }
// }
// const values = [];
// for (const key in apartment) {
//   keys.push(apartment[key]);
//   if (values.push(apartment[key])) {
//     console.log(values);
//   }
// }
// Change code below this line

//////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Scannerrr'));

///////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Change code above this line
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));

//////////////
// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }

// console.log(add(15, 27));

///////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ПОВЕРНЕННЯ ЧЕРЕЗ FOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function addOverNum(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > args[0]) {
//       total += args[i];
//     }
//   }
//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

////////////////////////////////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ПОРІВНЯННЯ ЧИСЕЛ З МАССИВОМ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Change code below this line
// function findMatches(numbers, ...args) {
//   const matches = [];
//   for (const number of numbers) {
//     if (args.includes(number)) {
//       matches.push(number);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

//////////////////////////

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const i = this.books.indexOf(oldName);
//     const name = newName;
//     return this.books.splice(i, 1, name);

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));
////////////////////////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!РОЗШИРЮЄМО ІНВЕНТАР!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     const newProduct = {
//       ...newPotion,
//     };

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];
//       console.log(potion.name);
//       if (potionName === potion.name) {
//         potions.splice(i, 1);
//       }
//     }
//     return potions;
//   },
//   updatePotionName(oldName, newName) {
//     return this.potions.map(obj => {
//       if (obj.name === oldName) {
//         obj.name = newName;
//       }
//       return obj;
//     });
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.removePotion('Speed potion'));

/////////////////////////////////////////////////////////////////////////////////ДЕКІЛЬКА КОЛБЕКІВ/////////////////////////////////////////

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of this.pizzas) {
//       // console.log(pizza === pizzaName);
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       }
//     }
//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Oleh', makePizza, onOrderError));

///////////////////////////////////////////////////////////////////////////////FOREACH(CALLBACK)////////////////////////////////////////////

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (element) {
//     if (element > value) {
//       return filteredNumbers.push(element);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

////////////////////////////////////////////////////////////////////////ЧИСТІ ФУНКЦІ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else newArray.push(number);
//   });
//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

///////////////////////////////////////////////////////////////////////flatMap ДЛЯ МАСИВІВ/////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

//////////////////////////////////////////////////////////////////
// 'use strict';
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
////////////////////////////////////////////////////ЗАДАЧА. СПИСОК ДРУЗІВ/////////////////////////////////////////
// const getFriends = users =>
//   users
//     .flatMap(({ friends }) => friends)
//     .filter((friends, index, array) => index === array.indexOf(friends));
// console.log(getFriends(users));

//////////////////////////////////////////////////////////////////////АКТИВНІ КОРИСТУВАЧІ//////////////////////////

// const getActiveUsers = users => users.filter(({ isActive }) => isActive);
// console.log(getActiveUsers(users));

/////////////////////////////////////////////////////////////////МЕТОДИ ДОДАВАННЯ, ВИДАЛЕННЯ ЕЛЕМЕНТІВ///////////////////////////////////////////////////

// class Storage {
//   constructor(items) {
//     console.log(this);
//     this.items = items;
//   }
//   // Change code below this line
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
//   // Change code above this line
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/////////////////////////////////////////////////////////////////////////////////

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

///////////////////////////////////////////////////////////////////////СТАТИЧНІ ВЛАСТИВОСТІ///////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   static Prices = {
//     MAX_PRICE: 50000,
//   };
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log(Car.Prices.MAX_PRICE);
//     this.#price = newPrice <= Car.Prices.MAX_PRICE ? newPrice : this.#price;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

////////////////////////////////////////////////////////////////////////СТАТИЧНІ МЕТОДИ//////////////////////////////////////////

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice (price){
//   return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//////////////////////////////////////////////////////////////МЕТОДИ ДОЧІРНЬОГО КЛАСУ////////////////////////////////////////////////

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel,blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email){
//   return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
