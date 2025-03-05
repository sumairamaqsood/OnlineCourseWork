const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//   alert('Clear items');
// };

// 2nd way addeventlistener

// clearBtn.addEventListener('click', function () {
//   alert('Clear items');
// });

// clearBtn.addEventListener('click', function () {
//   console.log('CLEAR ITEMS');
// });

// shorthand method

// clearBtn.addEventListener('click', () => alert('clearrr items'));

// clearBtn.addEventListener('click', () => console.log('clear items'));
// named function

function onClear() {
  //   alert('clear itemms');

  const itemList = document.querySelector('ul');
  //   itemList.innerHTML = '';
  const items = itemList.querySelectorAll('li');

  //   items.forEach((item) => item.remove());
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearBtn.click(), 5000);
