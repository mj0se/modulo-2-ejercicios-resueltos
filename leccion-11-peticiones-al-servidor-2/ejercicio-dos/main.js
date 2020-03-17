'use strict';


function getInfo(ev) {
  const inputText = document.querySelector('.js-input-text').value;

  fetch(`https://swapi.co/api/people/?search=${inputText}`)
    .then(response => response.json())
    .then(data => {
      data.results;
      let results = data.results;
      paintResult(results);
    })
};

function paintResult(results) {

  if (results.length === 0) {
    document.body.innerHTML = 'personaje no encontrado';
  } else {
    const ul = document.querySelector('ul');
    for (const result of results) {
      const li = document.createElement('li');
      li.innerText = `Nombre: ${result.name}. Género: ${result.gender}`;
      ul.appendChild(li);
    }
  }
}



const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getInfo);
