// remove method

function removeclearButton() {
  document.querySelector('#clear').remove();
}
// with variable

function removeClearButtonithVar() {
  const clearButton = document.querySelector('#clear');
  clearButton.remove();
}

//remove first item by parent element using removeChild method
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

//removing by item number

//this what blackbox suggested
// function removeItem(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = ul.children[itemNumber - 1];
//   ul.removeChild(li);
// }
//This traversy media did

function removeItem1(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}
//Another way wothout psuedo class

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[1];
  ul.removeChild(li);
}
//OR
function removeItem3(itemNumber) {
  const ul = document.querySelector('ul');
  const li = ul.querySelectorAll('li')[itemNumber - 1];
  ul.removeChild(li);
}

//Remove by remove not removeChild

function removeItem4(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

//More shorter way of the above

const removeItem5 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem5(4);
// removeItem4(3);
// removeItem3(1);
// removeItem2(s);
// removeItem1(1);
// removeItem(1);
// removeFirstItem();
// removeClearButtonithVar();
// removeclearButton();
