//output hello world no matter what argument
var createHelloWorld = function() {
    
    function innerfunction() {
       return "hello world"
   }
   return innerfunction;
};

//increment n in each call
 const f = createHelloWorld();
console.log(f()); // "Hello World"

var createCounter = function(n) {
    let count  = n;
     function counter() {
        return count++;
    };
    return counter;
};
 const counter = createCounter(10)
 console.log(counter())//10
 console.log(counter())//11
 console.log(counter())//12

 //Jasmine, Jest, or similar libraries used for unit testing in JavaScript
 function expect(value) {
    return {
      toBe: function (expected) {
        if (value !== expected) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function (expected) {
        if (value === expected) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  }
  
  // Example usage:
  try {
    expect(5).toBe(5); // No error will be thrown
    expect(5).notToBe(10); // No error will be thrown
    expect("hello").toBe("world"); // Error: Not Equal
    expect(true).notToBe(true); // Error: Equal
  } catch (error) {
    console.error(error.message);
  }

  function createCounter(init) {
    let currentValue = init;
  
    return {
      increment: function () {
        currentValue += 1;
        return currentValue;
      },
      decrement: function () {
        currentValue -= 1;
        return currentValue;
      },
      reset: function () {
        currentValue = init;
        return currentValue;
      }
    };
  }
  


  const counter = createCounter(5)
  console.log(counter.increment());//6 
 console.log (counter.reset()); //5
 console.log(counter.decrement()); // 4
 