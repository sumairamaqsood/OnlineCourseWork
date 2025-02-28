let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[3].textContent;
output = parent.childNodes[5].outerHTML;

output = parent.childNodes[5].innerHTML = 'hello sumaira';
output = parent.childNodes[5].style.color = 'purple';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'helllaa';
//get parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = 'red';

console.log(output);
