class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  isSquare() {
    return this.width === this.height;
  }
  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 5, 5);

console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
console.log(square);
console.log(Object.getOwnPropertyNames(square));
console.log(Object.getOwnPropertyDescriptors(square));
