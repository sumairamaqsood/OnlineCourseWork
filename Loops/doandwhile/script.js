// let i = 21;
// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// here we put i as 21 so it will never work while loop coz condition is different
// //Loop over arrays

// const arr = ['Bunny', 'Barbie', 'funny', 'Sumaira', 'malaika'];
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// nesting while loops
// while (i <= 5) {
//   console.log('Number' + i);
//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// Table of 2
// let i = 2; // STARTING ...  Set i to 2 to generate the table for 2 BIG thing to notice k humne i ko 2 k abaraber hi rakha hay take 2 ka table hi print ho
// while (i <= 2) {
//   // We only need this loop to run once, so set the condition to i <= 2
//   console.log(`Multiplication Table of ${i}`); // Print the table header
//   let j = 1;
//   while (j <= 10) {
//     // To print the full table, we loop from 1 to 10
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// * Do while loop
let i = 21;
do {
  console.log('Number' + i);
  i++;
} while (i <= 20);
// if we set 1 as 21 do will still gonna work and print i as 21 in output
