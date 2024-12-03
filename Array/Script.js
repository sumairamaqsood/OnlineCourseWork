// let x;
// //Array literal
// const numbers = [12, 13, 155, 250];
// const mixed = [124, 'sumaira', true, null];
// // Array constructor
// const fruits = new Array('Apple', 'Mango', 'Banana');

// x = mixed[3] + mixed[1];
// x = `My favorite fruit is ${fruits[1]}`;
// x = numbers.length;

// fruits[2] = 'Pear'; // we can change any element like this
// fruits[fruits.length] = 'blueberry'; // sometime we have uncountable data so we add elements like this then
// x = numbers.toString();

// console.log(x, typeof x);

// !Challenge 1 for array

// we have [1, 2 , 3 , 4 ,5] make it [0, 1, 2, 3, 4, 5, 6]

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(arr);
// * challenge 1 is completed here

// challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];
// solution1
const arr3 = arr1.slice(0, 4).concat(arr2);
// solution 2

const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);
