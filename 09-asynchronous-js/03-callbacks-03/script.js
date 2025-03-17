function toggle(e) {
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

//Another

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    console.log('Post Three added!'); // See this in console first

    cb();
  }, 1000);
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

// getPosts();
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
//4 sec to execute tey will take
