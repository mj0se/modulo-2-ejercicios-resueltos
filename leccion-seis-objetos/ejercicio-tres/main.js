'use strict';


const adalaber3 = {}
adalaber3.name = 'Antonia';
adalaber3.age = 85;
adalaber3.profession = 'anestesista';
adalaber3.showBio = function () {

  return 'Mi nombre es ' + this.name + ' y, soy ' + this.profession;
}

console.log(adalaber3.showBio());


const adalaber1 = {

  name: 'Susana',
  age: 34,
  profession: 'periodista',
  showBio: function () {
    return 'Mi nombre es ' + this.name + 'y, soy ' + this.profession;
  }
}

console.log(adalaber1.showBio());
