// 1.convert into array
//reverse the array
//turn the array to string

const reverString = (str) => {
  const arr = str.split("").reverse().join("");
  console.log(arr);
};

reverString("melbin");
const revString = (str) => {
  const arr = str.split(""); //1
  arr.reverse();
  str = arr.join(""); //join() returns an array as a string:
  console.log(str);
};
revString("apple");

2; //given string create an empty string
//loop through each character
//return the reversed

const reveString = (str) => {
  let reversed = "";
  for (i = str.length - 1; i >= 0; i--) 
  reversed += str[i];
  console.log(reversed);
};

revString("hello");

let x = 5;
let y = 3;

// Using +=
x += y; // equivalent to x = x + y;

console.log(x); // Output: 8

const sentence = "This is a sample sentence";
const words = sentence.split(" ");

console.log(words);
// Output: ["This", "is", "a", "sample", "sentence"]

