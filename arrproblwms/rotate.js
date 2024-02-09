function rotateArray(nums, k) {
    const n = nums.length;
    
    //k = k % n;: The purpose of this line is to normalize the value of k to avoid unnecessary rotations. If k is greater than or equal to n, it wraps around to the equivalent rotation within a single cycle. 
    //For example, if n is 5 and k is 7, it's equivalent to rotating by 2 (7 % 5 = 2).
    // Normalize k to avoid unnecessary rotations
    k = k % n;

    // Rotate the array using slicing and concatenation
    //nums.slice(n - k): This extracts the last k elements from the original array.
    // It represents the part of the array that will be moved to the front after rotation.
    //5-9 =4
    const rotatedArray = nums.slice(n - k).concat(nums.slice(0, n - k));
    //nums.slice(0, n - k): This extracts the elements from the beginning of the array up to the last n - k elements.
     //It represents the part of the array that will be moved to the end after rotation. 

    return rotatedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const stepsToRotate = 9;
const rotatedArray = rotateArray(originalArray, stepsToRotate);

console.log("Original Array:", originalArray);
console.log("Rotated Array:", rotatedArray);