const x = 100; // global variable
var bar = 250; // its accesible in window object on our console so its not a good practice
if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); Error says y is not defined
for (var i = 0; i <= 9; i++) {
  console.log(i);
}

console.log(i); // now as i used var it will print 11 coz iteration stoppped in block now where it fails on 11 so

if (true) {
  const a = 100;
  let b = 200;
  var c = 300;
}
console.log(c); // it gives us output coz its var in if statetment

function run() {
  var d = 100;
  console.log(d);
}
run();
//console.log(d);  now we get error because var is function scoped it cannot be accesible outof function block
