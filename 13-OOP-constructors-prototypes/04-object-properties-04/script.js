function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 5);
const rect2 = new Rectangle('Rectangle 2', 20, 10);

console.log(rect1.name, rect2.width, rect2.height); // Rectangle 1 20 10
console.log(rect1['width']);

//add a new property to the object

rect1.color = 'red';
console.log(rect1.color); // red

rect2.perimeter = () => 2 * (rect2.width + rect2.height); // 60
console.log(rect2.perimeter()); // 60

//delete a property from the object
delete rect2.perimeter;

//check if the property

console.log(rect2.hasOwnProperty('color')); // false
console.log(rect1.hasOwnProperty('color'));

//get keys
console.log(Object.keys(rect1)); // ['name', 'width', 'height', 'area', 'color']

//get values
console.log(Object.values(rect1)); // ['Rectangle 1', 10, 5, ƒ, 'red']
// get entries
console.log(Object.entries(rect1)); // [['name', 'Rectangle 1'], ['width', 10], ['height', 5], ['area', ƒ], ['color', 'red']]

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`); // name Rectangle 1 width 10 height 5 color red
  }
}
