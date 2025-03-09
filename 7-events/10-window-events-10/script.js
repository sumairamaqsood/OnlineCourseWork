// if we so while script is in head
//so it this way it will work

window.onload = function () {
  document.querySelector('h1').textContent = 'Hello sumaira';
};

//OR
window.addEventListener('load', () => {
  console.log('hello world');
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('hello Sumaira');
});

console.log('run me '); // it will work first coz its globally scoped

//Resized event

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//scroll events

window.addEventListener('scroll', () => {
  console.log(`scrolled to ${window.scrollY} x ${window.scrollX}`);

  if (window.scrollY > 200) {
    document.body.style.backgroundColor = 'green';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});

//Focus and blur events

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'red';
  });
});
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
