function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays and insert the smaller element from arr1 or arr2
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
             j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arra1 = [1, 3, 5];
const arra2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


function mergeSortedArrays(arr1, arr2) {
    let sorted = [];
   for(i=0;i<arr1.length;i++){
      for(j=0;j<arr2.length;j++){
          if(arr1[i]<arr2[j]){
              sorted.push(arr1[i])
          }else{
              sorted.push(arr2[j])
          }
      }
   }
   return sorted
  }
  
   
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  console.log(mergeSortedArrays(arr1, arr2));

  //  let's say arr1 = [1, 3, 5] and arr2 = [2, 4, 6].

//     Initialization:
//         sorted is initialized as an empty array: sorted = [].

//     Outer Loop (i = 0):
//         The outer loop starts with i = 0. At this point, arr1[i] is 1.

//     Inner Loop (j = 0):
//         The inner loop starts with j = 0. At this point, arr2[j] is 2.
//         arr1[i] < arr2[j] (i.e., 1 < 2) is true, so arr1[i] (which is 1) is pushed to the sorted array. Now, sorted = [1].
//         The inner loop continues with j = 1.

//     Inner Loop (j = 1):
//         Now arr2[j] is 4.
//         arr1[i] < arr2[j] (i.e., 1 < 4) is still true, so arr1[i] (which is still 1) is pushed to the sorted array again. Now, sorted = [1, 1].
//         The inner loop continues with j = 2.

//     Inner Loop (j = 2):
//         Now arr2[j] is 6.
//         arr1[i] < arr2[j] (i.e., 1 < 6) is still true, so arr1[i] (which is still 1) is pushed to the sorted array once again. Now, sorted = [1, 1, 1].

//     Outer Loop (i = 1):
//         The outer loop continues with i = 1. Now, arr1[i] is 3.
//         The inner loop restarts with j = 0.

//     Inner Loop (j = 0):
//         Now arr2[j] is 2.
//         arr1[i] < arr2[j] (i.e., 3 < 2) is false, so arr2[j] (which is 2) is pushed to the sorted array. Now, sorted = [1, 1, 1, 2].
//         The inner loop continues with j = 1.

//     Inner Loop (j = 1):
//         Now arr2[j] is 4.
//         arr1[i] < arr2[j] (i.e., 3 < 4) is true, so arr1[i] (which is 3) is pushed to the sorted array. Now, sorted = [1, 1, 1, 2, 3].
//         The inner loop continues with j = 2.

//     Inner Loop (j = 2):
//         Now arr2[j] is 6.
//         arr1[i] < arr2[j] (i.e., 3 < 6) is true, so arr1[i] (which is 3) is pushed to the sorted array again. Now, sorted = [1, 1, 1, 2, 3, 3].

//     Outer Loop (i = 2):
//         The outer loop continues with i = 2. Now, arr1[i] is 5.
//         The inner loop restarts with j = 0.

//     Inner Loop (j = 0):
//         Now arr2[j] is 2.
//         arr1[i] < arr2[j] (i.e., 5 < 2) is false, so arr2[j] (which is 2) is pushed to the sorted array. Now, sorted = [1, 1, 1, 2, 3, 3, 2].
//         The inner loop continues with j = 1.

//     Inner Loop (j = 1):
//         Now arr2[j] is 4.
//         arr1[i] < arr2[j] (i.e., 5 < 4) is false, so arr2[j] (which is 4) is pushed to the sorted array. Now, sorted = [1, 1, 1, 2, 3, 3, 2, 4].
//         The inner loop continues with j = 2.

//     Inner Loop (j = 2):
//         Now arr2[j] is 6.
//         arr1[i] < arr2[j] (i.e., 5 < 6) is true, so arr1[i] (which is 5) is pushed to the sorted array. Now, sorted = [1, 1, 1, 2, 3, 3, 2, 4, 5].

//     End of Loops:
//         Both loops end, and the final sorted array is returned.

// Result of the Execution

//     The output of the function with the provided input would be:

//     javascript

//     [1, 1, 1, 2, 3, 3, 2, 4, 5]

// Issues with the Code

//     Nested Loops: The nested loops are incorrect for merging two sorted arrays. Each element from arr1 is compared with every element from arr2, which doesn't maintain the sorted order in the result.

//     Duplicates: The same element from arr1 gets added multiple times if it is less than elements in arr2