'use strict';
const btn = document.querySelector('.js-update');
const selectFace = document.querySelector('.js-select');
const face = document.querySelector('.js-smile');
const container = document.querySelector('.container');


function showChange(params) {
  const select = selectFace.value;
  face.innerHTML = select;

}

function getNumberRamdon() {
  return Math.floor(Math.random() * 100);
}

function updateBackground() {
  const getNumberRamdon = getNumberRamdon();
  if (randonNumber % 2 === 0) {
    container.classList.add('chileancolor');

  } else {
    container.classList.remove('chileancolor');
  }
}



function updateAll() {
  showChange();
  updateBackground();
}

const getNumberRamdon = getNumberRamdon();

btn.addEventListener('click', updateAll);
