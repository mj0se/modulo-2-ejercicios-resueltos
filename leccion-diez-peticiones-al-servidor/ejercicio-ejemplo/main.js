'use strict';

function getDog() {

  fetch('https://dog.ceo/api/breed/setter/list')
    .then(response => response.json())
    .then(data => {
      const ul = document.querySelector('.js-list');
      let ulContent = '';
      for (let setter of setters) {
        const setterContent = `<li>${setter}</li>`;
        ulContent += setterContent;
      }

      ul.innerHTML = ulContent;


    })
}


const btn = document.querySelector('.js-button');
btn.addEventListener('click', getDog());
