const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe12@gmail.com',
    phone: '034525849',
    age: 30,
  },
  {
    firstName: 'Larry',
    lastName: 'woo',
    email: 'larry@gmail.com',
    phone: '0340215849',
    age: 25,
  },

  {
    firstName: 'kim',
    lastName: 'vegas',
    email: 'kim_12@gmail.com',
    phone: '034012458',
    age: 18,
  },

  {
    firstName: 'sam',
    lastName: 'jeez',
    email: 'jeezz12@gmail.com',
    phone: '034775849',
    age: 45,
  },

  {
    firstName: 'jerry',
    lastName: 'day',
    email: 'jerry.day12@gmail.com',
    phone: '03455688',
    age: 10,
  },
  {
    firstName: 'dy',
    lastName: 'marry',
    email: 'dymarry2@gmail.com',
    phone: '034544549',
    age: 35,
  },
  {
    firstName: 'robert',
    lastName: 'lay',
    email: 'robert12@gmail.com',
    phone: '034252849',
    age: 45,
  },
  {
    firstName: 'henry',
    lastName: 'kyle',
    email: 'henry12@gmail.com',
    phone: '031234549',
    age: 31,
  },

  {
    firstName: 'mike',
    lastName: 'antonio',
    email: 'antonio12@gmail.com',
    phone: '034514549',
    age: 20,
  },
];

const youngpeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + '' + person.lastName,
    email: person.email,
  }));
console.log(youngpeople);
