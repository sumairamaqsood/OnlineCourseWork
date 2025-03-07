const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.target.value);
  // const value = e.target.value;
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'checked' : 'unchecked';
  console.log(e.target.checked);
}

function onFocus() {
  console.log('input is focused ');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}

function onBlur() {
  console.log('input is not focused ');

  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkBox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
