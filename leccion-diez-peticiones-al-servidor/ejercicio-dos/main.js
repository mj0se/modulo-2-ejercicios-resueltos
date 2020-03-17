'use strict';

const button = document.querySelector('.js-button');
const img = document.querySelector("img");

function getDogImage() {
  fetch("https://dog.ceo/api/breed/otterhound/images/random")
    .then(response => response.json())
    .then(data => {

      img.src = data.message;
      img.alt = "Un perro";
    });
}



button.addEventListener('click', getDogImage);


getDogImage();
