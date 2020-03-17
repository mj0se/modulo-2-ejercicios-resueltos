'use strict';


const getEl = function (element) {

  return document.querySelector(element);

}



const h1 = getEl('.p');

const p = getEl('.h1');

console.log(p, h1);



const textAdd = function (element) {

  return document.querySelector(element).innerHTML
}
