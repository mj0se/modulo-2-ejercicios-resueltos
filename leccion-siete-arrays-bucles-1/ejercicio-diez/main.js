'use strict';


const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

let info;

// for (let item of items) {

//   info = `Esto es el dato ${items[item]} está en el orden ${item} y es del tipo ${typeof items[item]}  `;
//   console.log(info);


// }


function array() {

  for (let index = 0; index < items.length; index++) {

    console.log(`Este es el dato ${items[index]} y este es el orden ${index} y es del tipo ${typeof items[index]}`);


  }
}

array()

console.log(array(items));
