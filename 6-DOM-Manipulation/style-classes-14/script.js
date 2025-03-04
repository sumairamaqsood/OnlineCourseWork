const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li'); //individually ul se li uthaiga sirf

function run() {
  //className - Gets a string of all classes
  // console.log(itemList.className);

  // changing the classes with className
  // text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  // console.log(itemList.classList);
  // We can loop through the classes

  // itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace

  // text.classList.toggle('dark');
  // chatgpt qk items nodelist haynt error through karraha tha
  // items.forEach((item) => {
  //   item.classList.toggle('dark');
  // });

  // text.classList.remove('card');
  // text.classList.replace('card', 'dark');
  text.classList.add('dark');

  // styles property = Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 1) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
