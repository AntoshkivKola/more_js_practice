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