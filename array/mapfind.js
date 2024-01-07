const strings = ["apple", "banana", "orange", "grapefruit", "kiwi"];

// Use map to extract string lengths
const stringLengths = strings.map(str => str.length);

// Find the maximum length
const maxLength = Math.max(...stringLengths);

// Find the string with the maximum length
const stringWithMaxLength = strings.find(str => str.length === maxLength);

// Print the string with the biggest length
console.log(`The string with the biggest length is: ${stringWithMaxLength}`);
