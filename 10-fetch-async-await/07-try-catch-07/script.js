// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

// function double(x) {
//   if (typeof x !== 'number') {
//     throw new Error('x must be a number');
//   }
//   return x * 2;
// }

// try {
//   console.log(double(2));
// } catch (error) {
//   console.log('Error: ' + error);
// }
// Output

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + 'must be a number');
  }
  return number * 2;
}

// try {
//   console.log(double(2));
// } catch (error) {
//   console.log('Error: ' + error);
// }
try {
  const z = double('hello ');
  console.log(z);
} catch (error) {
  console.log(error);
}
