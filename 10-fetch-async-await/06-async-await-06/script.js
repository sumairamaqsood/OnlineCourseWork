const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Sam', age: 26 });
  }, 1000);
});

// promise.then((data) => {
//   console.log(data);
// });

async function getPromise() {
  const res = await promise;
  console.log(res);
}

getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  setTimeout(() => {
    console.log(data);
  }, 2000);
}
// getUsers();

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  // throw new Error('Something went wrong');
};
getPosts().catch((error) => console.log(error)); // This will not log anything to the console
