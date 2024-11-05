function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x); // it works here meaning x is from parent and we can access it here in child

    console.log(x + y);
  }
  //console.log(y); // gives error coz child's variable is not accesible outside into parenst

  second();
}
first();

//same as in if statement

if (true) {
  const x = 100; // parent
  if (x === 100) {
    const y = 200; // child
    console.log(x + y);
  }
}
