'use strict';
// let button = document.querySelector('.button');

// let books = [];

// button.addEventListener('click', showBooks);

// function showBooks(event) {
//   event.preventDefault()
//   let bookOne = document.querySelector('.book-1').value;
//   let bookTwo = document.querySelector('.book-2').value;
//   books[0] = bookOne;
//   books[1] = bookTwo;
//   console.log('¡a mi tambien me encantó' + books[0] + 'la pelicula! tenemos mucho en común humana' + books[1]);
// }

//  FOR OF

let button = document.querySelector('.button');
let text = document.querySelector('.text');


const book1 = document.querySelector('.js-book-1');
const book2 = document.querySelector('.js-book-2');
const books = [];
books[0] = book1.value;
books[1] = book2.value;

function meEncanta(event) {
  event.preventDefault();
  for (const book of books) {
    console.log(`A mi también me encanta "${book}"`);
  }
}

button.addEventListener('click', meEncanta);

//  duda porque no pinta los nbook
