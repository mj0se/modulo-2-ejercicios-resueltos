'use strict';

const getEl = function (element) {

  return document.querySelector(element);

}


const p = parseInt(getEl('.p').innerHTML);

console.log(p);

const isEven = function (number) {

  if (number % 2 == 0) {

    return (true);
  } else {

    return (false);

  }
}
const pIsEvent = isEven(p) ? 'Este número es par' : 'Este número es impar';


console.log(pIsEvent);


//  ternario  solo se puede utilizar con if o else, empezamos con un ? añadimos primero el true y luego el false.

// 'Este número es par' : 'Este número es impar';
