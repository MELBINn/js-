function findRepeatedNumbers(arr) {
    const repeatedNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // Compare each element with every other element
        if (arr[i] === arr[j] && !repeatedNumbers.includes(arr[i])) {
          // If a repeated number is found, add it to the result array
          repeatedNumbers.push(arr[i]);
        }
      }
    }
  
    return repeatedNumbers;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5, 2, 6, 7, 8, 5];
  const repeatedNumbers = findRepeatedNumbers(myArray);
  
  console.log("Repeated Numbers:", repeatedNumbers);

 // In this example, the findRepeatedNumbers function uses two nested loops to compare each element with every other element in the array. If a repeated number is found and it hasn't been added to the repeatedNumbers array yet, it is added. Note that this method has a time complexity of O(n^2)
 // , which may be less efficient than the previous method for large arrays.
  