'use strict';


const container = document.querySelector('.container');


function changeColor() {

  if (window.scrollY >= 250) {

    container.style = "background-color:blue;";

  } else {
    container.style = "background-color:yellow;";

  }
}

window.addEventListener('scroll', changeColor);
