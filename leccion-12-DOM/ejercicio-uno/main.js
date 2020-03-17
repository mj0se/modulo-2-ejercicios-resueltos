'use strict';

const numbers = [1, 2, 3];

// primer LI
const liEl = document.createElement('li');
const newText = document.createTextNode(numbers[0]);

liEl.appendChild(newText);
// segundo LI
const liEl2 = document.createElement('li');
const newText2 = document.createTextNode(numbers[1]);
liEl2.appendChild(newText2);

// tercer LI
const liEl3 = document.createElement('li');
const newText3 = document.createTextNode(numbers[2]);
liEl3.appendChild(newText3);

// introducir los elementos creador en el HTML
const text = document.querySelector(".js-list");

text.appendChild(liEl);
text.appendChild(liEl2);
text.appendChild(liEl3);
