function alphabetizeString(str) {
  return str.split("").sort().join("");
}

// Sample Test
let exampleString = "webmaster";
console.log(alphabetizeString(exampleString)); // Output: 'abeemrstw'
