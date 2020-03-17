'use strict';

let avocados = 5;
const avocadoPrice = 1.5;
const money = 33;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }


// indicamos entre paréntesis() una condición
// escribimos ? y el código que se va a ejecutar si se cumple la condición
// escribimos: y el código que se va a ejecutar si NO se cumple la condición


let numberofAvocados = money >= avocadoPrice ? money / avocadoPrice : 0;


console.log(numberofAvocados)
