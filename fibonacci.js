//sum of two numbers behind it
function printFibonacci(n) {
    let fibArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  
    console.log("Fibonacci Numbers:");
    for (let i = 0; i < n; i++) {
      console.log(fibArray[i]);
    }
  }
  
  // Change the value of 'n' to print the desired number of Fibonacci numbers
  const n = 10;
  printFibonacci(n);
