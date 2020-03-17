'use strict';


const alimentos = 100;

const arrayFood = [];


function get100Numbers() {
  for (let alimento = 0; alimento <= alimentos; alimento++) {

    arrayFood.push(alimento);
  }

  console.log(arrayFood);

}

get100Numbers();
