'use strict';


const pearBasket = {

  minPear: 1,
  maxPear: 20,
  actualPear: 9,
  initialPear: 8

};

pearBasket.addPear = function () {

  return pearBasket.actualPear + 1;

}
console.log(pearBasket.addPear());


pearBasket.restPear = function () {

  return pearBasket.actualPear - 5;
}

console.log(pearBasket.restPear());


pearBasket.numPear = function () {

  return pearBasket.initialPear;

}

console.log(pearBasket.numPear());
