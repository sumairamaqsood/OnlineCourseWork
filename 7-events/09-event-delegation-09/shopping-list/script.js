const listitems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//method 1

// listitems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

//More efficient method

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
list.addEventListener('mouseover', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    // just trying another wat to use tagname in lower case because in js tag names always returns tag names in uppercase
    e.target.style.color = 'green';
  }
});
