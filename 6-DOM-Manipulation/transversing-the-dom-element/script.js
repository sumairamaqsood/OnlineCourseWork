let output;
//get child element from parent element
const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[0];
output = parent.children[1].innerHTML;
output = parent.children[2].style.color = 'orange';
output = parent.children;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].textContent = 'Hello';
parent.children[2].innerText = 'Yellow';

parent.firstElementChild.textContent = 'Hello world';
parent.lastElementChild.textContent = 'Pakistan';

//get parent nodes from child element

const child = document.querySelector('.child');
output = child.parentElement;

child.parentElement.style.backgroundColor = 'red';
child.parentElement.style.color = 'orange';
child.parentElement.style.border = '10px solid green';
child.parentElement.style.padding = '10px';

// get siblings element

const secondItem = document.querySelector('.child:nth-child(2)');
secondItem.style.backgroundColor = 'yellow';
secondItem.style.color = 'green';
output = secondItem;
output = secondItem.previousElementSibling;
output = secondItem.nextElementSibling;
//output = secondItem.nextElementSibling.nextElementSibling;
secondItem.nextElementSibling.style.backgroundColor = 'blue';
console.log(output);
