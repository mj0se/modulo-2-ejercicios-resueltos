'use strict';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Moka';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Kira';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Nala';

// contenido de MoKa 

let moka = document.querySelector('.moka');

// datos de moka dentro del contenido

moka.innerHTML = `

<img src= ${firstDogImage}>
<p>${firstDogName}</p>

`;


// contenido de kira


let kira = document.querySelector('.kira');


kira.innerHTML = `
<img src= ${secondDogImage}>
<p> ${secondDogName}</p>

`;


// contenido de nala


let nala = document.querySelector('.nala');

nala.innerHTML = `
<img src=${thirdDogImage}>
<p>${thirdDogName}</p>

`;
