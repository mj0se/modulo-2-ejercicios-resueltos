'use strict';


const botones = document.querySelectorAll('.boton');


for (const boton of botones) {
  boton.addEventListener('click', pushButton);
}



function pushButton(event) {
  console.log(event.currentTarget.classList.add('red'));
}
