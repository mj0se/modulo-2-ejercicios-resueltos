'use strict';
const btn = document.querySelector('.js-button');
const books = [];

function showText() {
  const book1 = document.querySelector('.js-book1').value;
  const book2 = document.querySelector('.js-book2').value;
  books[0] = book1;
  books[1] = book2;

  for (let book of books) {

    console.log('me encantó ese libro humana' + book);

  }
}
showText();
btn.addEventListener('click', showText);
