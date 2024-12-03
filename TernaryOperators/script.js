// Example 1

const age = 14;

if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You cannot vote ');
}

//using ternary operators EASY WAY

age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote2);
console.log(canVote);

// Multiple things/statements within if/else

const auth = false;
// let redirect;
// if (auth) {
//   alert(' Welcome to the dashboard');
//   redirect = '/Dashboard';
// } else {
//   alert(' Access denied');
//   redirect = '/Login';
// }

// console.log(redirect);

//This with ternary operators

// const redirect = auth ? (alert('Welcome to the dashboard'), '/Dashboard') : (alert('Access denied'), ' /Login');
// console.log(redirect);

auth ? console.log('Welcome t the dashboard') : null;
