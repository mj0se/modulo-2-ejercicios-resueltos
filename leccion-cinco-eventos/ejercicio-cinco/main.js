'use strict';



function changeColor(event) {

  const letter = event.letter;

  if (letter === "r") {
    document.body.style.backgroundColor = "yellow";
  } else if (letter === "a") {
    document.body.style.backgroundColor = "red";
  }
}

body.addEventListener("keydown", changeColor);
