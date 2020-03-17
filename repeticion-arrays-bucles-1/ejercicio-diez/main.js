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

let item = [];

for (let item of items) {

  console.log(`El dato ${item} está en la posición ${items[item]} y es de tipo ${typeof item}`);


}
