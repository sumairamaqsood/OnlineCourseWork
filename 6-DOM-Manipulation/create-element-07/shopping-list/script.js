const div = document.createElement('div');
div.className = 'div-class';
div.innerHTML = 'Hello, World!';
div.id = 'div-id';
div.setAttribute('title', 'Hwllo jee!');
// div.title = 'again!';
console.log(div.outerHTML);

const text = document.createTextNode('it one way to write text');
div.appendChild(text);
// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

console.log(div.outerHTML);
