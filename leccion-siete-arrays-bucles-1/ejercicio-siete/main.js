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

// function countAdalabers() {
//   console.log(adalabers.length);
// }

// countAdalabers();

// function averageAge() {
//   let edadMedia = 0;
//   for (let adalaber of adalabers) {
//     edadMedia = edadMedia + adalaber.age / adalabers.length;
//   }
//   return edadMedia;
// }

// console.log(averageAge());


function theYoungest() {

  let minAgeAdalaber = 100;

  for (let adalaber of adalabers) {
    console.log(adalaber.age)
    for (let index = 0; index < adalaber.age; index++) {


    }
    console.log(`La adalaber más joven es ${adalaber.name}, la edad es ${adalaber[index].age}`);
  }
}
theYoungest()
