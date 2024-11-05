// console.log(innerHeight);
// console.log(innerWidth);
const x = 100; // global var

console.log(x, 'is global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
}
run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const y = 50;
  console.log(y);
}

add();
