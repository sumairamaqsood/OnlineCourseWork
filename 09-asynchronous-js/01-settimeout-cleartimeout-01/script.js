// setTimeout(function () {
//   console.log('Hello fom call back');
//   document.querySelector('h1').innerHTML = 'Hello from callback';
// }, 2000);

console.log('hello from global clg');

// same example with named function

// setTimeout(changedText, 2000);

function changedText() {
  document.querySelector('h1').innerHTML = 'Hello from callback';
}

const timerId = setTimeout(changedText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer cancelled');
});
