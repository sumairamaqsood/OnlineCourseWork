const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault(); // prevent default form submission refreshing and loading of page

  // console.log('dcdcdd');
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input');

  //to not to go empty field

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
  }
  console.log(item, priority.value);
}

// Form Data object

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  // const item = formData.get('item');
  // const priority = formData.get('priority');
  // console.log(item, priority);

  //we can get all  entries
  const entries = formData.entries();
  console.log(entries);

  //easy way
  for (let entry of entries) {
    console.log(entry);
  }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
