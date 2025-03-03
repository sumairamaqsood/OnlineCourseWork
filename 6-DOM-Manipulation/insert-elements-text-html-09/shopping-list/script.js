function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'Adjacent Elements';

  filter.insertAdjacentElement('beforebegin', h1);
}

function insertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('beforebegin', 'inserttext');
}

function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2.> HELLE HELA</h2.');
}

//insert before example , its like appendchild works with parents

function insertbeforeitem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insert before item';

  const thirdlist = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdlist);
}

insertbeforeitem();
insertHTML();
insertText();
insertElement();
