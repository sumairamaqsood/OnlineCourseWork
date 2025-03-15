// const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(Date.now());
}
//chatgpt method
// document.getElementById('stop').addEventListener('click', () => {
//   clearInterval(intervalID);
// });

function stopChange() {
  clearInterval(intervalID);
}

///change background color
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}
// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

//creating random colors

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
