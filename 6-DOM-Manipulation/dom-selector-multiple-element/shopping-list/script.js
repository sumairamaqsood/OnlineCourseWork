// query selector All()
// returns a NodeList  of all the elements that match the selector

const listitems = document.querySelectorAll('.item');
const btnss = document.querySelectorAll('.btn');
const title = document.querySelector('#app-title');

//access elements in the NodeList
console.log(listitems[3].innerHTML);
//seeting color for specific element
console.log((listitems[3].style.backgroundColor = 'orange'));
// anotherway to do the same thing with variable
listitems[1].style.backgroundColor = 'yellow';
console.log(title);

//we can use forEach() to loop through the NodeList
listitems.forEach((item, index) => {
  item.style.backgroundColor = 'lightgrey';
  if (index === 1) {
    item.remove();
  }
  if (index === 0) {
    item.innerHTML = `Orange banana
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  }
});

//getElementsByClassName()
//returns a HTMLCollection of all the elements that match the class name

const items = document.getElementsByClassName('item');
//console.log(items);
console.log(items[1].innerText);

// with  Array

const itemArray = Array.from(items);
itemArray.forEach((item) => {
  console.log(item.innerText);
});

//get ElementsByTagName()
//returns a HTMLCollection of all the elements that match the tag name

const listitems3 = document.getElementsByTagName('li');
console.log(listitems3);
