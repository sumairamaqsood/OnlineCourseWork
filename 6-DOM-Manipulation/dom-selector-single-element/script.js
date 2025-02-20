console.log(document.getElementById('app-title'));

//get attributes

console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attributes
document.getElementById('app-title').title = 'Shoppig';
document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');

console.log(title);
//Get/ change content
title.textContent = 'helo world ';
title.innerText = 'hello again';
title.innerHTML = '<strong>Shopping List</strong';
console.log(title.innerText);
console.log(title.textContent);

// change styles
title.style.color = 'red';
title.style.textTransform = 'uppercase';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '5px';

// document.querySelectors
//Use any CSS selector
console.log(document.querySelector('#app-title'));
console.log(document.getElementById('app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log((document.querySelector('li:nth-child(2)').innerHTML = 'milk'));

const secondItem = document.querySelector('li:nth-child(3)');

secondItem.innerText = 'bread';

// Use these methods on other elements
const list = document.querySelector('ul');

console.log(list);
const firstItem = list.querySelector('li:nth-child(2)');
console.log(firstItem);
