//Replacing li with innerHtml

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.innerHTML = 'First Item';

  firstItem.replaceWith(li);
}

// Replace with outerHTMl

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li> Replaced Second Item </li>';
}

// Replace all items at once

function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  // lis.forEach((item, index) => {
  //   if (index === 2) {
  //     item.outerHTML = '<li> Replaced Third Item </li>';
  //   } else {
  //     item.outerHTML = '<li> Replaced All at once </li>';
  //   }
  // });

  //For shorthand of the above one
  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1
          ? '<li> item change with shorthand property</li>'
          : '<li> Replaced All at once </li>')
  );
}

// Replace Child heading via parent header

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.textContent = 'shopping List still';
  header.replaceChild(h2, h1);
  //OR
  // h1.replaceWith(h2);//
  //header.replaceChild(h2, h1); in course but above is easy
}

replaceChildHeading();

replaceAllItems();
// replaceSecondItem();
// replaceFirstItem();
