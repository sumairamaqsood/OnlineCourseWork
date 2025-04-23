function Rectangle(name, height, width) {
  this.name = name;
  this.height = height;
  this.width = width;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 20);
const rect2 = new Rectangle('Rectangle 2', 50, 20);
const rect3 = new Rectangle('Rectangle 3', 70, 20);

console.log(rect1.area(), rect2.name, rect3.height);
