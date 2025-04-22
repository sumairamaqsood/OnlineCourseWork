const Rectangle1 = {
  name: 'Rectangle1',
  width: 100,
  height: 50,
  area: function () {
    return this.width * this.height;
  },
};
const Rectangle2 = {
  name: 'Rectangle2',
  width: 500,
  height: 50,
  area: function () {
    return this.width * this.height;
  },
};

console.log(Rectangle1.area());
console.log(Rectangle2.area());
