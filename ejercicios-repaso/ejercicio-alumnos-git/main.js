'use strict';

const students = ['Maria del Carmen', 'Chiquito de la Calzada', 'Ramón de Pitis'];

let info;
let i;

for (i = 0; i < students.length; i = i + 1) {
  // split coge un string devuelve un array separado por espacios (porque el segundo parámetro es un espacio)
}

let words = students[i].split(' ');
console.log('Student: ' + students[i]);

for (let word = 0; word < words.length; word = word + 1) {
  info = 'Word #' + word + ' of: ' + students[i] + ' is: ' + words[word];
  console.log(info);
}
