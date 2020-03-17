'use strict';


// const button = document.querySelector('.button');

// const add = document.querySelector('.text');

// function newText() {

//   text.value = 'a tu infierno';

//   console.log(`Hola ${text.value}`);

// }

// newText('a tu infierno');



// button.addEventListener('click', newText);

// // //////////////////////////////////////////

// const button = document.querySelector(".click");

// // handler
// function showText(event) {
//   event.preventDefault();
//   const nameElement = document.querySelector(".name").value;
//   console.log(`Hola ${nameElement}`);
// }

// button.addEventListener("click", showText);

const inputText = document.querySelector('.name');

inputText = inputText.value;

function changeConsole(event) {
  event.preventDefault();
  console.log(`Hola ${inputText}`);
}


const button = document.querySelector('.click');
changeConsole();
button.addEventListener('click', changeConsole);
