function arraysEqual(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Sort the arrays
    // const sortedArr1 = arr1.slice().sort();
    // const sortedArr2 = arr2.slice().sort();
  
    // Compare the sorted arrays element by element
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // If all elements are equal, the arrays are equal
    return true;
  }
  
  // Example usage
  console.log(arraysEqual([1, 2], [1, 2]));     // Output: true
  console.log(arraysEqual([1, 2], [2, 3]));     // Output: true
  console.log(arraysEqual([1, 2], [1, 2, 3]));  // Output: false
  
  
  
  var arrayStringsAreEqual = function(word1, word2) {
    if(word1.join('') === word2.join('')){
     return true;}
     else{
         return false;
     }
  };
  let result = arrayStringsAreEqual( ["ab", "c"], ["a", "bc"])
  console.log(result)