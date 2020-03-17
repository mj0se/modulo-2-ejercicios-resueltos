'use strict';

const inputText = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');

function organization() {
  const orgname = inputText.value;

  fetch(`https://api.github.com/orgs/Adalab`)
    .then(response => response.json())
    .then(data => {
      return fetch(data.repos_url);
    })
    .then(response => response.json())
    .then(list => {
      paintList(list);
    });
}

function paintList(list) {
  const ul = document.querySelector('.js-list');
  for (const item of list) {
    const li = document.createElement('li');
    li.innerText += item.name;
    ul.appendChild(li);
  }
}

searchBtn.addEventListener('click', organization);
