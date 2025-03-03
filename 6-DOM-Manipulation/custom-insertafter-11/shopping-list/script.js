function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// taking new element

const li = document.createElement('li');
li.textContent = 'insert me after';

//Existing element to insert  after

const firstItem = document.querySelector('li:first-child');

// our custom function

insertAfter(li, firstItem);
