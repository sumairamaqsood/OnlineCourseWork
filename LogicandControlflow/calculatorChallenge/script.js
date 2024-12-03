// function calculator(num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     default:
//       result = 'Invalid operator';
//   }
//   console.log(result);
//   return result;
// }
// calculator(778.58, 2, '.');

//Practice

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'Invalid operator';
  }
  console.log(result);
  return result;
}
calculator(252, 22, '+');
