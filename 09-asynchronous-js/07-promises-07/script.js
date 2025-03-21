const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task completed');
    resolve('success');
  }, 1000);
});
promise.then(() => {
  console.log('Promise consumed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2 completed');
    resolve('success');
  }, 1000);
}).then(() => {
  console.log('Promise 2 consumed');
});

// get the user

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'Maxi', age: 30 });
    } else {
      reject('Error: something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('Promise completed or rejected'));

console.log('hello form global scope');
