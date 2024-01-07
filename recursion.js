
// function printString() {
//     console.log("This is the string to be displayed.");
//      printString();
//   }
  
//   printString();

  function factorial(n){
   //this is base
   if(n === 0 || n ===1){//If we remove the base case if statement in the factorial function, 
      //it will cause an infinite recursion and ultimately lead to a "RangeError: Maximum call stack size exceeded" error.
      return 1;
   }else{
     return  n*factorial(n-1)}
  }
  console.log(factorial(2))

  //Reaching the base case: The actual process of n reaching 1 occurs through the chain of recursive calls. As the function calls itself with "n-1" repeatedly,
   //it eventually reaches a point where n becomes either 0 or 1, triggering the base case.