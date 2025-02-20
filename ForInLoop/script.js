const colorObj = {
  color1: 'Blue',
  color2: 'Orange',
  color3: 'Purple',
  color4: 'Yellow',
  color5: 'Green',
};
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// For in with array

const colorArr = ['red', 'green', 'red', 'violet', 'burgendi'];
for (const color in colorArr) {
  console.log(color, colorArr[color]);
  //   console.log(colorArr[color]); will have only colors means keys
}
