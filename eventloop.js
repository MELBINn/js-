console.log('Start');

// // Example of a callback function
// function asyncFunction(callback) {
//   setTimeout(function () {
//     console.log('Async function complete');
//     callback();
//   }, 2000);
// }

// // Call the asynchronous function with a callback
// asyncFunction(function () {
//   console.log('Callback executed');
// });

// console.log('End');

//This example demonstrates the event loop in action. 
//The asynchronous operation (the setTimeout in this case) 
//allows other tasks to continue while waiting for the timeout to complete. 
//The callback function is placed in the message queue and executed when the call stack is empty.


// function myFunction() {
//     console.log("Event loop iteration");
//     // Your code logic goes here
//   }
  
//   // Set up the event loop with setInterval
//   const intervalId = setInterval(myFunction, 1000); // Execute every 1000 milliseconds (1 second)
  
//   // To stop the event loop after a certain time (e.g., after 5 seconds)
//   setTimeout(() => {
//     clearInterval(intervalId); //clearinterval function
//     console.log("Event loop stopped after 5 seconds");
//   }, 5000);

  //The setInterval function in JavaScript is used to repeatedly execute a given function at a specified time interval.

  const interval = setInterval(()=>{
    console.log("event loop");
  },1000);

  setTimeout(()=>{
    clearInterval(interval);//The clearInterval function expects an interval ID as an argument
    console.log("event loop stop after 5 s");
  },5000);