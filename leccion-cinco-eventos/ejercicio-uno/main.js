'use strict';


const button = document.querySelector('.button');


function changeText() {

  button.innerHTML = ('bienvenido al infierno');
}



button.addEventListener('click', changeText);
