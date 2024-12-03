if (true) {
  console.log('this is ture');
}
if (false) {
  console.log('This is false');
}
const x = 30;
const y = 20;

if (x >= y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${x} is less than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to  ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}
// console.log(z); // Error coz z is const and scope so not defined
