// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

// console.log(`The temperature is  ${getCelsius(50)}\xB0c`);

//Arrow Function easy way to do upper one
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temperature is  ${getCelsius(50)}\xB0c`);

//Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min, // min=min, nahi use kkarengy qk same name hayn to short cut use karengy
    max,
  };
}
console.log(minMax([1, 2, 3, 4, 5]));

//Challenge 3
((length, width) => {
  const area = length * width;
  const output = `The area of rectangle with length of ${length} and a ${width} is ${area} `;
  console.log(output);
})(10, 5);
