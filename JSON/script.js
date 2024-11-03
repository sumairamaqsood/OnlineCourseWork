const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body ',
};

// Converts to JSON string
const str = JSON.stringify(post);

// Parse Json

const obj = JSON.parse(str); //  back to same as up post object literal

// in array

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body ',
  },

  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body ',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
