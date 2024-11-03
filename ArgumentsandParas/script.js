//default parameters
function registerUser(user) {
  return user + ' is Registered';
}

console.log(registerUser('bot'));

//Rest paramenters

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Objects as parameters

function loginUser(user) {
  return `The user ${user.name} with the is of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'sara',
};
console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sumaira',
  })
);
// array as params
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); /// yh mujhy nhi samjh aya poora
