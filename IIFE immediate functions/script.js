(function () {
  const user = 'john';
  console.log(user);
  //OR
  const hello = () => console.log('Hello from IIFe ');
  hello();
})(); // here we have to use these parentheses to invoke the funtion

(function (name) {
  console.log('Hello ' + name);
})('Shwan');

// other  not recommeded

// (function hello())
//! Error Coz user variable is already declared in otherjavascript
// const user = 'Bradyy';
// console.log(user);
