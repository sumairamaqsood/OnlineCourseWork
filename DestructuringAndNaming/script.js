const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName, // :firstName,
  lastName, // : lastName,
  age, // :age, isme itni lambi karne ki koi zaroorat nahi hoti
};

// console.log(person.age);

// //Destructuring / Extract

// const todo = {
//   id: 1,
//   title: 'Take out Trash',
//   user: {
//     name: 'Sumaira',
//     age: 35,
//   },
// };

// const {
//   id: todoId, // renaming
//   title,
//   user: { name },
// } = todo;

// console.log(todo.user.age);

// Destrutring arrays
const numbers = [123, 234, 34, 444];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

//----------------gpt

/*const userProfile = {
  id: 102,
  name: 'Sumaira',
  email: 'sumarakhan12@gmail.com',
  location: {
    city: 'New York',
    country: 'USA',
  },
  social: {
    twitter: '@Sumairakhan',
    linkedIn: 'sumairakhan',
  },
};
//Destructuring to get only the needed feild
const {
  name,
  email,
  location: { city },
  social: { linkedIn, twitter },
} = userProfile;

console.log(city);*/

///---Another example----
const order = {
  orderID: '12345',
  date: '2020-12-25',
  customer: {
    name: 'Alice',
    email: 'alicegray@gmail.com',
  },
  product: {
    name: 'smartphone',
    price: 699,
    features: {
      color: 'Black',
      storage: '128Gb',
    },
  },
};
// Destructure specific properties from the nested order object

const {
  customer: { name: customerName, email },
  product: {
    name: productName,
    price,
    features: { color, storage },
  },
} = order;
/*
console.log(customerName, email, order.orderID, productName, color);
console.log(customerName); // Output: Alice Brown
console.log(email); // Output: alice@example.com
console.log(productName); // Output: Smartphone
console.log(price); // Output: 699
console.log(color); // Output: black
console.log(storage); // Output: 128GB
*/
//----- Renaming

const apiResponse = {
  usr: 'maham',
  pwd: 'mhm123',
  loc: 'Lahore',
};

const { usr: username, pwd: password, loc: Location } = apiResponse;

console.log(username);
console.log(password);
console.log(Location);
