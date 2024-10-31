/*
const name = 'john';
const age = 24;
//refrence values are stored in heap
const person = {
  name: 'Brad',
  age: 30,
};

let newName = name;
newName = 'Johnathan';

console.log(name, newName);
let newPerson = person;

newPerson.name = 'Bradley';
console.log(person, newPerson);

// type coercion

let x;

x = 5 + 5;
x = 5 + '5';

console.log(x, typeof x);
*/
//--------------------
/*
let x;
const name = 'john';
const age = 24;
//x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
//const s = new String(' Hello world');
// TODO :Template literal
x = `Hello, my name is ${name} and I am ${age} years old`;
//console.log(x);
//x = x.length; coz abhi x ek nmber ban gya hay like 44
//x = x[41]; //yh hamain index batayega jab x string  me hoga isi liye mujhy length ko comment karna para
x = x.toUpperCase();
console.log(x);
*/

/*
const myString = 'developer';
//chatgpt solution
//const updatedString = myString.charAt(0).toUpperCase() + myString.slice(1);
//course solution 1:
let mynewString;
mynewString = myString[0].toUpperCase() + myString.substring(1);
//Solution 3:
mynewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(mynewString);
*/

/*
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} =  ${sum}`;
console.log(sumOutput);

//Get the difference

const diff = x - y;
const diffOutput = `${x} - ${y} =  ${diff}`;
console.log(diffOutput);

//Get the prod

const prod = x * y;
const prodOutput = `${x} * ${y} =  ${prod}`;
console.log(prodOutput);

//Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} =  ${prod}`;
console.log(quotOutput);

//Get the remainder

const rm = x % y;
const rmOutput = `${x} % ${y} =  ${rm}`;
console.log(rmOutput);
*/

let x;
let d = new Date();
//x = d.toDateString();
//x = d.toISOString();
x = d.getDate();
x = d.getMonth();
x = d.getFullYear();
x = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
//MORE MODERN
x = Intl.DateTimeFormat('en-PK').format(d); // this is modern and new so gonna use this one okay
// For your default locale
x = Intl.DateTimeFormat('default').format(d);

//Different method
x = d.toLocaleString('default'); // we get full date and time aswell
console.log(x);
