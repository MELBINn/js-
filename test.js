// function outerFunction() {
//     let outerVariable = "I am from outerFunction";
  
//     function innerFunction() {
//       console.log(outerVariable); // Accessing outerVariable from the outer function
//     }
  
//     return innerFunction;
//   }
  
//   // Create a closure by calling outerFunction and assigning the returned inner function to a variable
//   let closure = outerFunction();
  
//   // Invoke the closure, which still has access to outerVariable
//   closure(); // Output: I am from outerFunction
  

function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let increment = counter();

increment(); // Output: 1
increment(); // Output: 2

function setupClickHandler() {
  let count = 0;

  document.getElementById('myButton').addEventListener('click', function() {
    count++;
    console.log('Button clicked ' + count + ' times');
  });
}

setupClickHandler();


function multiplyBy(factor) {
  return function(x) {
    return x * factor;
  };
}

let multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10


function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

// let increment = counter();
// increment(); // Output: 1
// increment(); // Output: 2

