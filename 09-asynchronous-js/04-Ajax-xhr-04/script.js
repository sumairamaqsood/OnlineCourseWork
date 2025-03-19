const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//   //   console.log(this.readyState);
//   //   console.log(this.status);

//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<Strong>${movie.title}</strong> - ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// xhr.send();
xhr.open('GET', 'https://api.github.com/users/sumairamaqsood/repos');

xhr.onreadystatechange = function () {
  //   console.log(this.readyState);
  //   console.log(this.status);

  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<Strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
