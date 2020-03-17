'use strict';


const number = [2, 10, 14, 20, 21, 26];




for (let media = 0; media < number.length; media++) {

  suma += number[media] / 6;
}

console.log('La media de todos los numeros es ' + suma);


// funcion average


function average(number) {
  let suma = 0;
  for (let index = 0; index < number.length; index++) {
    suma += number[index];

  }
  return suma / number.length;
}



console.log(average(number));
