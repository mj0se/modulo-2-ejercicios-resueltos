'use strict';


const paragraf = document.querySelector('.paragraf');



function addParagraf() {

  paragraf.innerHTML = `${paragraf.innerHTML} <p> ${paragraf.innerHTML}</p>`;
}

paragraf.addEventListener('mouseover', addParagraf);
