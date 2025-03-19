const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      jokeEl.innerHTML = JSON.parse(this.responseText).value;
    } else {
      jokeEl.innerHTML = 'Something went wrong';
    }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
