'use strict';


const btn = document.querySelectorAll('.js-btn');

for (const boton of btn) {
  boton.addEventListener('click', changeColor);
}


function changeColor(event) {
  event.currentTarget.classList.add('red');
}
