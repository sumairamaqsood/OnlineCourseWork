const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },

  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}
const rect = createRectangle(10, 20);
console.log(rect.area()); // 200
console.log(rect.perimeter()); // 60
console.log(rect.isSquare()); // false
console.log(rect.height); // 10
console.log(rect.width); // 20
console.log(rect.__proto__); // { area: [Function: area], perimeter: [Function: perimeter], isSquare: [Function: isSquare] }

const rect2 = createRectangle(40, 10);
console.log(rect2.area()); // 400
