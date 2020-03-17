'use strict';


const films = ['harry potter', 'el señor de los anillos', 'todo sobre mi madre', 'hable con ella'];

films[2] = 'dolor y gloria';


console.log(films.length);



films[3] = 'monstruos SA';

console.log(films);


const workWithMovies = () => {
  return films;
}

console.log(workWithMovies());
