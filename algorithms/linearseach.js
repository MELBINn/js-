function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return its index
        }
    }
    return -1; // Target not found
}

// Example usage:
const array = [5, 3, 8, 4, 2, 7, 1, 9];
const target = 4;
const result = linearSearch(array, target);

console.log(result); // Output: 3 (index of target in the array)
