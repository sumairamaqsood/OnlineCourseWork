/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-type': 'application/json',
      token: 'my-token123',
      hello: 'world'.toUpperCase(),
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({
  title: 'My Post',
  body: 'Its my first post',
});
