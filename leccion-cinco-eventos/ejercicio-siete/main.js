'use strict';


const button = document.querySelector('.button');


function changeColor(ev) {

  ev.preventDefault();
  button.classList.toggle("red");
}





button.addEventListener('click', changeColor);
