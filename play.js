

// var createCounter = function(init) {
//   // Variables to store the current value
//   let count = init;

//   // Functions to manipulate the counter
//   function increment() {
//     return ++count;
//   }

//   function reset() {
//     count = init;
//     return count;
//   }

//   function decrement() {
//     return --count;
//   }

//   // Expose the functions as methods of an object
//   return {
//     increment,
//     reset,
//     decrement,
//   };
// };

// // Create a counter with an initial value of 5
// const counter = createCounter(5);

// // Use the exposed methods
// console.log(counter.increment()); // Output: 6
// console.log(counter.reset());      // Output: 5
// console.log(counter.decrement());  // Output: 4


// var createCounter = function(init) {
//   let count = init;
//   function increment(){
//       return ++count
//   }
//   function reset(){
//      count = init
//      return count;
//   }
//   function decrement(){
//       return --count 
//   }
//   return{ increment,
//    reset,
//    decrement,
//    }
// };


// const counter = createCounter(5)
// console.log(counter.increment()); // Output: 6
// console.log(counter.reset());      // Output: 5
// console.log(counter.decrement());

// A = [2,3,4]

// function rever(a){
//     a.reverse();
//     console.log(a)
// }
// rever(A)


// a= [10,11,12] //10<15 bob 11>6 alice 12<18 bob
// b=[15,6,18] //1 greater than 2 bob 2 gretert han 1 alice



// function com(a,b){
    

// const length = a.length

// for(i=0;i<=length;i++){
//     const element1 = a[i]
//     const element2 = b[i]

//     let result = [];
//     if(element1 > element2){
//         result.unshift(1)
//     }else if(element2>element1){
//         result.push(1)
//     }else {
//         result.push(0)
//     }
//     console.log(result)
// }


// }
// com([10,11,12],[15,6,18])

// function sum(numbers){
//     let result = 0;
//     for(i=0;i<numbers.length;i++){
//       result +=numbers[i]
//     }
//     console.log(result)
// }
// sum([1,2,4])

// function sum(numbers){
//     let result = 0;
//     for(i=0;i<=numbers.length;i++){
//       result +=i
//     }
//     console.log(result)
// }
// sum([1,2,3])

// function sum(numbers){
//     let result = 0;
//     for(i=0;i<=numbers.length;i++){
//       result +=(i)
//     }
//     console.log(result)
// // }
// // sum([1,2,3,4,5])


// function sumOfElements(numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     console.log("Sum of Elements:", result);
// }

// function sumOfIndices(numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += i;
//     }
//     console.log("Sum of Indices:", result);
// }

// // Example with an array containing negative numbers
// sumOfElements([-1, -2, -3]);  // Sum of Elements: -6
// sumOfIndices([-1, -2, -3]);   // Sum of Indices: 3
const products = [
    { name: 'Product A', category: 'Electronics' },
    { name: 'Product B', category: 'Clothing' },
    { name: 'Product C', category: 'Electronics' },
    { name: 'Product D', category: 'Clothing' }
  ];
  
  // Use reduce to group products by category
  const groupedProducts = products.reduce((result, product) => {
    // Check if the category already exists in the result object
    if (!result[product.category]) {
      // If not, create a new array for the category
      result[product.category] = [];
    }
  
    // Add the current product to the array of its category
    result[product.category].push(product);
  
    return result;
  }, {});
  
  console.log(groupedProducts);
  