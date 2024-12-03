function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(8)); // Output: true
console.log(isPrime(11.5)); // Output: false
//---------------------2

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels('Sumaira')); // Output: 4

//------------- 3
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Sumaira')); // Output: "olleh"
//------------------4
//Remove dup
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 3])); // Output: [1, 2, 3, 4]
//--------- 5 Sum
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
