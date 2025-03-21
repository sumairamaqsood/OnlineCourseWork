const itemForm = document.getElementById('item-form'); // get the form element
const itemInput = document.getElementById('item-input'); // input field
const itemList = document.getElementById('item-list'); //ul leraha
const clearBtn = document.getElementById('clear'); // clear button

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  newItem = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

// This is ChatGpt code
// itemList.addEventListener('click', (e) => {
//   if (e.target.parentElement.classList.contains('remove-item')) {
//     e.target.parentElement.parentElement.remove(); // Removes the <li>
//   }
// });

function clearItems(e) {
  // itemList.innerHTML = ''; so easy way but
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
