const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n)); //shortest method for thsi
// Another Method which is a little longer than the above
numbers.forEach(function (n) {
  console.log(n);
});

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// implicit return

const subtract = (a, b) => a - b;
console.log(subtract(10, 5));

// can leave off () with single params
// but it automatically puts brackets around a
const double = (a) => a * 2;
console.log(double(10));

/// returning an object SHORT CUT

const createObj = () => ({
  name: 'Brad',
});

console.log(createObj());
