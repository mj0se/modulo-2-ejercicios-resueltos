'use strict';


const photoOne = document.querySelector('.js-foto1');
const photoTwo = document.querySelector('.js-foto2');
const photoThree = document.querySelector('.js-foto3');
const select = document.querySelector('.js-cities');

function paintImages(ev) {
  removeCities();
  let chooseCity = ev.currentTarget.value;
  if (chooseCity === "Madrid") {
    getImagesCity1();
  } else if (chooseCity === "Paris") {
    getImagesCity2();
  } else {
    getImagesCity3();
  }
}

select.addEventListener("change", paintImages)

const getImagesCity1 = function () {

  let image1 = document.createElement(img);
  image1.setAttribute("src", "https://images.pexels.com/photos/2440984/pexels-photo-2440984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  image1.setAttribute("width", "304");
  image1.setAttribute("height", "228");

  let image2 = document.createElement(img);
  image2.setAttribute("src", "https://images.pexels.com/photos/3763907/pexels-photo-3763907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  image2.setAttribute("width", "304");
  image2.setAttribute("height", "228");
  let image3 = document.createElement(img);
  image3.setAttribute("src", "https://images.pexels.com/photos/1500598/pexels-photo-1500598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  image3.setAttribute("width", "304");
  image3.setAttribute("height", "228");
  const container = document.querySelector(".container");
  container.style.display = "inline-block";
  container.appendChild(image1);
  container.appendChild(image2);
  container.appendChild(image3);
}

const getImagesCity2 = function () {
  let image1 = document.createElement(img);
  image1.setAttribute("src", "https://images.pexels.com/photos/149522/pexels-photo-149522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  image1.setAttribute("height", "228");
  let image2 = document.createElement(img);
  image2.setAttribute("src", "https://images.pexels.com/photos/2675266/pexels-photo-2675266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  image2.setAttribute("width", "304");
  image2.setAttribute("height", "228");
  let image3 = document.createElement(img);
  image3.setAttribute("src", "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  image3.setAttribute("height", "228");
  const container = document.querySelector('.container');
  container.style.display = "inline-block";
  container.appendChild(image1);
  container.appendChild(image2);
  container.appendChild(image3);
}

const getImagesCity3 = function () {

  let image1 = document.createElement('img');

  image1.setAttribute("src", "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  image1.setAttribute("height", "228");


  let image2 = document.createElement('img');

  image2.setAttribute("src", "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  image2.setAttribute("width", "304");
  image2.setAttribute("height", "228");


  let image3 = document.createElement('img');

  image3.setAttribute("src", "https://images.pexels.com/photos/2370724/pexels-photo-2370724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  image3.setAttribute("height", "228");


  const container = document.querySelector(".container");
  container.style.display = "inline-block";
  container.appendChild(image1);
  container.appendChild(image2);
  container.appendChild(image3);
}

function removeCities() {
  const container = document.querySelector('.container');
  for (let index = container.children.length - 1; index >= 0; index--) {
    container.removeChild(container.children[index]);

  }
}
