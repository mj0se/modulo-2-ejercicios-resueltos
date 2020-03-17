'use strict';


const paragraf = document.querySelector('.js-paragrafh');

const input = document.querySelector('.js-input');


const getInfo = function () {
  const inputValue = input.value;
  console.log(inputValue);
  paragraf.innerHTML = input.value;
  localStorage.setItem('name', paragraf.innerHTML);

}

paragraf.innerHTML = (localStorage.getItem('name'));
input.addEventListener('keyup', getInfo);
