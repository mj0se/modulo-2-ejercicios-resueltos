'use strict';

const tasks = [{
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

let taskUl = document.querySelector('.list');

let taskLi = document.querySelector('.list__li');



function paintTask() {

  for (let task of tasks) {

    taskLi.innerHTML += `<li>${task.name}</li>`;
    if (task.completed === true) {
      taskLi.classList.add('crossed');
      console.log(task.name);
    } else if (task.completed === false) {
      console.log(task.name)

    }
  }
}

paintTask();
