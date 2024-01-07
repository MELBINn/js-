






// printString();
const numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => num + num);
console.log(result);

//[ 2, 4, 6, 8, 10 ]

const number = [4, 9, 16, 25];

let resultt = number.map(Math.sqrt);

console.log(resultt);

const strings = ["apple", "banana", "orange"];

let resulttt = strings.map((str) => str.toUpperCase());

console.log(resulttt);

const words = ["hello", "world", "javascript"];

let res = words.map((word) => word.length);

console.log(res);

const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
];

let rsu = people.map((name) => name.firstName);

console.log(rsu);

const rectangles = [
  { width: 5, height: 10 },
  { width: 8, height: 5 },
  { width: 3, height: 7 },
];

let rsul = rectangles.map((obj) => obj.width * obj.height);

console.log(rsul);

const wordss = ['apple', 'banana', 'orange', 'grape'];

let e = wordss.filter((word)=>word.includes("e")).map((word)=>word.length)
console.log(e)

const numberss = [2, 4, 6, 8];

let num = numberss.map((num)=>num ** 2)

console.log(num)
//Extract Initials:
const names = ['John Doe', 'Jane Smith', 'Bob Johnson'];

// const upper = names.join(" ").match(/[A-Z]/g);
const upper = names.map((word)=>word.match(/[A-Z]/g));
//[ [ 'J', 'D' ], [ 'J', 'S' ], [ 'B', 'J' ] ]
const flat = upper.flat()
console.log(flat)//[ 'J', 'D', 'J', 'S', 'B', 'J' ]

const namez = ['John Doe', 'Jane Smith', 'Bob Johnson'];
const uppe = namez.map((name)=>{
  const wordss = name.split(' ')
 return wordss.map(word=>word[0]).join(' ')
})
console.log(uppe)


const numbersz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rezult = numbersz.filter((num)=>num%2===0)
console.log(rezult)



// javascript


// // Your code here
// // Result: [4, 10, 18]
const nam = ['John Doe', 'Jane Smith', 'Bob Johnson'];

const uppercaseLetters = nam
  .map(name => name.match(/[A-Z]/g))
  .filter(Boolean) // Remove null values (for names with no uppercase letters)
  .join('');

console.log(uppercaseLetters);
// Output: "JDSBJH"

const amounts = [20, 50, 75];
// Your code here
// Result: ['$20', '$50', '$75']
const symbol = "#";

const amount = amounts.map((amo)=>symbol+amo)

console.log(amount)

// Given two arrays of numbers of the same length, create a new array where each element
// is the product of the numbers at the corresponding indices using the map function.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arresult = array1.map((num,index)=>num * array2[index])
//For each iteration, the element from array1 at the current index (num) is 
//multiplied by the corresponding element from array2 at the same index 

console.log(arresult)