//Another

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Error: Something went wrong with post three ');
      }
    }, 1000);
  });
}

function getPosts() {
  setTimeout(() => {
    console.log('Post both added!'); // See this in console first

    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong> ${post.title} </strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong> ${error} </strong>`;
  document.querySelector('#posts').appendChild(h3);
}

// getPosts();
createPost({ title: 'Post Three', body: 'This is post three' })
  //   .then(getPosts)
  .catch(showError)
  .then(getPosts); // k agar tue bhi ho  post three ki error baqi dono posts run hojayn
//4 sec to execute tey will take
