'use strict';

function getFilm1() {
  fetch('https://swapi.co/api/people/1/')
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      const ul = document.createElement('ul');
      const addLi = document.createElement('li');
      ul.appendChild(addLi);
      for (const vehicle of data.vehicles) {

        addLi.innerHTML += `${vehicle}`;
        document.body.appendChild(ul);
      }
    });
}

getFilm1();
