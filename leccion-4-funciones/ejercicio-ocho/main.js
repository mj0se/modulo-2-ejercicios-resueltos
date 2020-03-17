'use strict';

let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}


console.log(secretLetter);

console.log(mySecretLetter());


//  nos da valores distintos, porque en la segunda está machacada por la funcion y todas las veces que la declaremos después de la funcion su valor será "X".
