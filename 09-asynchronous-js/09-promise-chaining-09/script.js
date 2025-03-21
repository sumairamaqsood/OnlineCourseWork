const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((length) => {
    console.log(length);
  })
  .catch((error) => {
    console.log(error);
    return 1232;
  })
  .then((x) => {
    console.log('this will log regardless of the error', x);
  });
