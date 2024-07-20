// let array = [1, 2, 4, 5, 6];

// let result = array.push(7);

// console.log(result); // Output: 6
// console.log(array); // Output: [1, 2, 4, 5, 6, 7]

let array1 = [1, 2, 4, 5, 6];

let resultt = [...array1, 7]
console.log(resultt)//[ 1, 2, 4, 5, 6, 7 ]
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

function addNumberToFirstPosition(arr, num) {
    // Create a new array with an additional slot for the new number
    let newArray = new Array(arr.length + 1);
    
    // Place the new number at the first position
    newArray[0] = num;
    
    // Copy the elements from the old array to the new array, shifted by one position
    for (let i = 0; i < arr.length; i++) {
        newArray[i + 1] = arr[i];
        //A for loop is used to copy elements from the original array to the new array, starting from the 
        //second position (i + 1).
    }
    
    return newArray;
}

// Test the function
let arra = [1, 2, 3, 4];
let numberToAdd = 0;

let result = addNumberToFirstPosition(arra, numberToAdd);
console.log(result); // Output: [0, 1, 2, 3, 4]


function addNumberAtIndex(arr, num, index) {
    // Validate index
    if (index < 0 || index > arr.length) {
        throw new Error("Index out of bounds");
    }

    // Create a new array with an additional slot for the new number
    let newArray = new Array(arr.length + 1);

    // Copy elements from the old array to the new array up to the specified index
    for (let i = 0; i < index; i++) {
        newArray[i] = arr[i];
    }

    // Insert the new number at the specified index
    newArray[index] = num;

    // Copy the remaining elements from the old array to the new array
    for (let i = index; i < arr.length; i++) {
        newArray[i + 1] = arr[i];
    }

    return newArray;
}

// Test the function
let array = [1, 2, 3, 4];
let numberToAdd = 99;
let indexToAdd = 2;

let result = addNumberAtIndex(array, numberToAdd, indexToAdd);
console.log(result); // Output: [1, 2, 99, 3, 4]
