'use strict';

// const button = document.querySelector('.button');


// function clickButton() {
//   console.log('bienvenido al infierno');
// }


// button.addEventListener('click', clickButton);


const button = document.querySelector(".btn");

const handButtonClick = event => {
  console.log(event);
};

button.addEventListener("click", handButtonClick);
