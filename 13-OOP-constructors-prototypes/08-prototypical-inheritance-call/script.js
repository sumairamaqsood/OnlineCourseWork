function Shape(name) {
  this.name = name;
}
Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, height, width) {
  Shape.call(this, name); // Call the parent constructor with the current context
  this.height = height;
  this.width = width;
}

//Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};

function Circle(name, radius) {
  Shape.call(this, name); // Call the parent constructor with the current context
  this.radius = radius;
}

//Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype);

//set prototype constructor

Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle('Rectangle', 10, 20);
const cir = new Circle('Circle', 5);

rect.logName(); // Rectangle Name: Rectangle
cir.logName(); // Shape name: Circle
