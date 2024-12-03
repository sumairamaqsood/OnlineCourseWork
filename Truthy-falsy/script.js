const email = '0';
if (email) {
  console.log('You passes in an email');
} else {
  console.log('Please pass a true value ');
}

// if(email) this if always just takes boolean values like true of false so here the email is true coz we have passed something in string

console.log(Boolean(email));

// Falsy Values
// 1. false
// 2. 0
// 3. '' (empty string)
// 4. null
// 5. Undefined
// 6. NaN
// everything else which is not falsy is truthy

const x = 0;
if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}
console.log(Boolean(x));

// Truthy and Falsy caveats
//We commonly see it in web forms
// we use !is NaN for zero coz id someone enter 0 so we should say you have 0 children
const children = false;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please Enter the number of children');
}

//Checking for empty arrays

const post = []; // it still passing to list posts so the solution is below

if (post) {
  console.log('List Post');
} else {
  console.log('No post to list');
}

const posts = ['Post 3'];

if (posts.length > 0) {
  console.log('List Post');
} else {
  console.log('No post to list');
}

//checking for empty objects but we cant use length here

const user = { name: 'Brad' };
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No user');
}

//loose Equality (==)

console.log(false === 0); //false
console.log(false == 0); // true

console.log(true === 0);

console.log(null == 0);

//! Chat Gpt
const formData = {
  username: '',
  email: '',
  password: '',
};

function validateForm(data) {
  if (!data.username) {
    return 'Username is required!';
  }

  if (!data.email) {
    return 'Email is required!';
  }

  if (!data.password) {
    return 'Password is required!';
  }

  return 'Form is valid!';
}

console.log(validateForm(formData)); // "Email is required!"
