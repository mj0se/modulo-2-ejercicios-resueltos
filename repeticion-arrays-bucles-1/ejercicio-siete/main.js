'use strict';
const adalabers = [{
    name: 'María',
    age: 29,
    proffesion: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    proffesion: 'ingeniera quimica'
  },
  {
    name: 'Susana',
    age: 34,
    proffesion: 'periodista'
  },
  {
    name: 'Rocio',
    age: 25,
    proffesion: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    proffesion: 'diseñadora'
  }
];

// let adalaber = [];

// for (adalaber of adalabers) {
//   console.log(adalaber);

// }

let years = 0;
let media = 0;

function averageAge() {

  for (let adalaber of adalabers) {
    years += adalaber.age;

  }
  media = years / adalabers.length;
  console.log(media);

}

averageAge();

let year = 100;

function theYoungest() {

  for (let index = 0; index < array.length; index++) {


  }


}

theYoungest();
