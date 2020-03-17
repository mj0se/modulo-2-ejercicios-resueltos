'use strict';
const button = document.querySelector('.js-button');
const selectFace = document.querySelector('.js-select-face');
const face = document.querySelector('.js-face');
const container = document.querySelector('.js-container');


function updateFace() {
  const selectFaceValue = selectFace.value;
  face.innerHTML = selectFaceValue;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function updateBackground() {
  const randomNumber = getRandomNumber();
  if (randomNumber % 2 === 0) {
    container.classList.add('correct-color-nosmile');
  } else {
    container.classList.remove('correct-color-nosmile');
  }
}

function updateAll() {
  updateFace();
  updateBackground();
}

const randomNumber = getRandomNumber();
button.addEventListener('click', updateAll);
