'use strict';


//TASK1
/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

function sumator(n = 1) {
  if (typeof (n) !== 'number') {
    throw TypeError();
  }
  if (n === 1) {
    return 1;
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
console.log('\n\nTASK 3 \n');
const arr = new Array(25).fill().map(()=>(Math.round(Math.random() * 10) - 5));
console.log(arr);

console.log('showEvenIndex');
const showEvenIndex = (arr) => arr.forEach((elem, i) => i % 2 === 0 ? console.log(elem) : false);
showEvenIndex(arr);

console.log('showEvenElem');
const showEvenElem = (arr) => arr.forEach(element => element % 2 === 0 ? console.log(element) : false);
showEvenElem(arr);

console.log('showIndexOfNullElem');
function showIndexOfNullElem(arr) {
  let count = 0;
  arr.forEach((elem,i) =>{  
    if (elem === 0) {
      console.log(i);
      count++;
    }
  });
  console.log(`количество нулевых элементов ${count}`);
}
showIndexOfNullElem(arr);

// TASK 5
/*
5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5
*/

console.log('\n\nTASK 5 \n');
const someFunction = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      console.log(`fizz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else {
      console.log(i);
    }
  }
}
console.log(someFunction(8)) // 1,2,fizz,4,buzz,fizz,7,8