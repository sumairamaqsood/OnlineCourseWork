//! New / Advance ways of loop
//* Loop through Arrays
const items = ['Book', 'table', 'chair', 'kite'];
// for (const item of items) {
//   console.log(item);
// }

const users = [{ name: 'Brad' }, { age: 24 }, { education: 'Master' }];

for (const user of users) {
  console.log(user.name);
}

// * Loop over string

const str = 'Hello World';
for (const letter of str) {
  console.log(letter);
}

// * Loops over Maps

const map = new Map();
map.set('name:', 'Sam');
map.set('age:', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
