// let array = [1, 2, 4, 5, 6];

// let result = array.push(7);

// console.log(result); // Output: 6
// console.log(array); // Output: [1, 2, 4, 5, 6, 7]

let array1 = [1, 2, 4, 5, 6];

let resultt = [...array1, 7]
console.log(resultt)
console.log(array1)

let array = [1, 2, 4, 5, 6];

// Add a single element to the beginning
array.unshift(0);

// Add multiple elements to the beginning
array.unshift(-2, -1);

console.log(array);

let array2 = [1, 2, 4, 5, 6];

// Add a single element at a specific index
array2[2] = 3;

console.log(array);

let arrayy = [1, 2, 4, 5, 6];

// Concatenate arrays
let newArray = arrayy.concat([7, 8, 9]);

console.log(newArray);
