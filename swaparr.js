function interchangePositions(array, index1, index2) {
    // Check if indices are within the array bounds
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      // Swap the elements at the specified indices
      const temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    } else {
      console.error("Invalid indices");
    }
  }
  
  // Example array
  let numbersArray = [1, 2, 3, 4, 5];
  
  // Interchange positions of elements at index 1 and index 3
  interchangePositions(numbersArray, 1, 5);
  
  // Display the updated array
  console.log(numbersArray);
  