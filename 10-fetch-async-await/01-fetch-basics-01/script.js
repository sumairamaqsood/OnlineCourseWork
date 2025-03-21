// fetching JSON file

fetch('/movies.json')
  .then((res) => res.json())
  .then((data) => console.log(data));

//fetching text file

fetch('./test.txt')
  .then((res) => res.text())
  .then((data) => console.log(data));

//fetching from external API

fetch('https://api.github.com/users/sumairamaqsood')
  .then((res) => res.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
