let x;
const person = {
  name: 'sumaira',
  age: 23,
  isAdmin: true,
  address: {
    street: 'a146 block I',
    city: 'Boston',
    State: 'MA',
  },
};
x = person;
//person.isAdmin = false; same thing 2 ways
// person['isAdmin'] = false; //same thing 2 ways

// person.name = 'summaiya'; // we use this to update something  ne
// (person.sistername = 'leebs'), // this is how we can add values
//   console.log(person);
//! different method
person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};
person.greet();
