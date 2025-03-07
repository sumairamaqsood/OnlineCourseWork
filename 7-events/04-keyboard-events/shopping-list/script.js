const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//   console.log('key is pressses');
// };

const onKeyUp = (e) => {
  console.log('key is release');
};
const onKeyDown = (e) => {
  // console.log('key is holding');
  //key

  // console.log(e.key);
  // document.querySelector('h1').innerHTML = e.key;

  // if (e.key === 'Enter') {
  //   alert('you pressed an enter ');
  // }

  // if (e.keyCode === 13) {
  //   alert('you pressed an enter ');
  // }

  // if (e.code === 'Digit1') {
  //   alert('you pressed an 1 ');
  // }

  // if (e.repeat) {
  //   alert('you are holding down ' + e.key);
  // }

  console.log('Shift:' + e.shiftKey);
  console.log('Ctrl:' + e.ctrlKey);
  console.log('Alt:' + e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
