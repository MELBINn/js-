// function add(){
//     return "hello"
// }
// console.log(add())

//output 
//hello

// It's important to note that a function can have multiple return statements, but once a return statement is executed, the function exits, 
// and no further code in the function is executed.

function addNumbers(a, b) {
    return a + b; // The result of a + b is returned to the caller
  }
  
  var sum = addNumbers(3, 4); // sum will be 7, the result of the addNumbers function
  
  console.log(sum); // Output: 7
  
//   The primary purpose of the return statement is to provide a result or value back to the caller of a function.
//   The returned value can then be stored in a variable, used in further calculations, or passed as an argument
//    to another function.

// Use return when you want a function to produce a result that can 
//be used elsewhere in your code.