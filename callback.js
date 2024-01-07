function display(result){
  console.log("this is result",result)
}

function cal(a,b,callback){
   result = a+b;
  callback(result)
}

cal(2,3,display)


// Function that takes a callback as an argument
function doSomethingAsync(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      console.log("Async operation completed");
      // Call the callback function
      callback();
    }, 5000); // Simulating a 2-second delay
  }
  
  // Callback function to be passed to doSomethingAsync
  function afterAsyncOperation() {
    console.log("Callback function executed");
  }
  
  // Call doSomethingAsync and pass the callback function
  doSomethingAsync(afterAsyncOperation);
  
  // Output:
  // (After 2 seconds)
  // Async operation completed
  // Callback function executed
  

  // Array of numbers
const numbers = [10, 25, 30, 45, 50];

//in here the function takes two param arr and callback it is the same as filterArray(numbers, isEven);
//the numbers will be arr and isE ven becomes callback

// Function that takes a callback and applies it to filter elements in the array
function filterArray(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function and check the condition
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Callback function to be passed to filterArray
function isEven(num) {
  return num % 2 === 0;
}

// Callback function to be passed to filterArray
function isMultipleOfTen(num) {
  return num % 10 === 0;
}

// Use filterArray with different callback functions
const evenNumbers = filterArray(numbers, isEven);
const multiplesOfTen = filterArray(numbers, isMultipleOfTen);

console.log("Even numbers:", evenNumbers);
console.log("Multiples of ten:", multiplesOfTen);


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result); 

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
