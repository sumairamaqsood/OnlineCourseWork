const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// shorthand method

const sum1 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum1);

// Using for loop

const sum2 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum2());

// Shopping cat important example

const cart = [
  { id: 1, name: 'Product 1', price: 150 },
  { id: 2, name: 'Product 2', price: 180 },
  { id: 3, name: 'Product 3', price: 1955 },
];
const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
