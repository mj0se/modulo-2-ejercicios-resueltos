'use strict';


const inputText = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-btn');
const userName = document.querySelector('.js-user_name');
const userImg = document.querySelector('.js-img_avatar');
const numRepos = document.querySelector('.js-numRepos');

function userInfo() {
  const getUser = inputText.value;
  const URLfech = `https://api.github.com/users/${getUser}`;
  fetch(URLfech)
    .then(response => response.json())
    .then(data => {
      userName.innerHTML = data.login;
      userImg.src = data.avatar_url;
      numRepos.innerHTML = data.public_repos;
    });
}

userInfo();
searchBtn.addEventListener('click', userInfo);
