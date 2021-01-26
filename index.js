'use strict';


//TASK1
/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

function sumator(n = 1) {
  if (typeof (n) !== 'number') {
    throw TypeError();
  }
  if (n === 1) {
    return n;
  }
  return n + sumator(n - 1);
}

console.log(sumator(4)); //10
console.log(sumator(8)); //36
console.log(sumator(10)); //55

// TASK 3
/*
3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов 
*/
const arr = [];
for (let i = 0; i < 25; i++) {
  arr.push(Math.round(Math.random() * 100));
}
console.log(arr);

function showEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
showEvenIndex(arr);

function showEvenElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
showEvenElem(arr);

function showIndexOfNullElem(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]  === 0) {
      console.log(i);
      count++;
    }
  }
  console.log(`количество нулевых элементов ${count}`);
}
showIndexOfNullElem(arr);