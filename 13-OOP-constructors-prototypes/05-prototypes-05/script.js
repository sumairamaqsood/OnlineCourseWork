function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle('MyRectangle', 5, 10);

//  Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), etc

console.log(rect.toString()); // [object Object]
// To get the prototype of an object
console.log(Object.getPrototypeOf(rect));
