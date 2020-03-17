'use strict';


const names = [{
    nombre: "MJ",
    apellidos: "Pérez",
    telefono: "606110776"
  },
  {
    nombre: "Fran",
    apellidos: "Villar",
    telefono: "690582135"
  },
  {
    nombre: "Grisel",
    apellidos: "Martos",
    telefono: "654236781"
  }
];



const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const inputTel = document.querySelector(".js-phone");
const select = document.querySelector(".js-select");

function pushForm(event) {

  event.preventDefault();
  for (let name of names) {
    if (name.nombre === select.value) {
      inputName.value = name.nombre;
      inputSurname.value = name.apellidos;
      inputTel.value = name.telefono;
    }

    console.log(name.nombre);
    console.log(name.apellidos);
  }
}


select.addEventListener('change', pushForm);
