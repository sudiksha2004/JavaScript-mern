function reverseNumber(num) {
  // Convert number to string, split into array, reverse, and join back
  return parseInt(num.toString().split("").reverse().join(""), 10);
}

// Sample Test
let x = 32243;
console.log(reverseNumber(x)); // Output: 34223
