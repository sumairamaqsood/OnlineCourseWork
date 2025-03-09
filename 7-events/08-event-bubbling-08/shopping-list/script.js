const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('button was clicked');
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});
form.addEventListener('click', () => {
  alert('form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked ');
});
