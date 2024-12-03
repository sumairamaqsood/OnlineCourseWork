//Chatgpt
//Basic If Else

let age = 18;

if (age >= 18) {
  console.log('You are eligible to vote ');
} else {
  console.log('You are not eligible to vote ');
}

//Example 2
const score = 69;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B ');
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade F');
}

//Example 3
//! for the bigger im using BigInt here
let num = 26585259852656556522564644871647844874786541554658461898747n;

if (num > 0n) {
  if (num % 2n === 0n) {
    console.log('The  number is positive and even');
  } else {
    console.log('The number is positive but odd');
  }
} else {
  console.log('The number is negative');
}
//Original
// let num = 10;

// if (num > 0) {
//   if (num % 2 === 0) {
//     console.log('The  number is positive and even');
//   } else {
//     console.log('The number is positive but odd');
//   }
// } else {
//   console.log('The number is negative');
// }

//* Logical Operators & and ||
let age1 = 18;
let citizen = false;
if (age1 >= 18 && citizen === true) {
  console.log('Eligible to vote');
} else {
  console.log('you are not eligible to vote ');
}

//! CHALLENGES
//Challenge 1: Positive, Negative, or Zero

function checkNumber(num) {
  if (num > 0) {
    console.log('Number is positive ');
  } else if (num < 0) {
    console.log('Number is negative');
  } else {
    console.log('Zero ');
  }
}

checkNumber(10);
checkNumber(-14);
checkNumber(0);

//Challenge 2: Even or Odd

function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log('Even Number');
  } else {
    console.log('Odd Number ');
  }
}
checkOddEven(11);
checkOddEven(6);

//Challenge 3: Grading System

function getGrade(score) {
  if (score >= 90) {
    console.log('Grade: A');
  } else if (score >= 80) {
    console.log('Grade: B');
  } else if (score >= 70) {
    console.log('Grade: C');
  } else {
    console.log('Grade: F');
  }
}
getGrade(88);

//Challenge 4: Leap Year Checker
function isLeapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('Leap year ');
  } else {
    console.log('Not a Leap Year');
  }
}
isLeapyear(2025);
