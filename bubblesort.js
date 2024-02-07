function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { //i=90
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array);  // [11, 12, 22, 25, 34, 64, 90]

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Outputs: 5

let arra = [1, 2, 3, 4, 6];
let lastIndex = arr.length - 1; //access last element

console.log(arra[lastIndex]); // Outputs: 6


//quicksort

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Already sorted if the array has 0 or 1 element
    }
  
    const pivot = arr[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); // Elements smaller than the pivot go to the left
      } else {
        right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = quickSort(unsortedArray.slice());
  
  console.log(sortedArray); // Result: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  console.log(unsortedArray); // Original array remains unchanged

  //insertionsort

  function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Start with the second element in the array
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the currentElement at its correct position in sorted part
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = insertionSort(unsortedArray.slice());
  
  console.log(sortedArray); // Result: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  console.log(unsortedArray); // Original array remains unchanged
  