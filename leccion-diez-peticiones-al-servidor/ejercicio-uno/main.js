'use strict';

function getNumber() {
  fetch('https://api.rand.fun/number/integer?max=200')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.body.innerHTML = data.result;
    });
}


getNumber();
