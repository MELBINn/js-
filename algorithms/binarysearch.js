function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Target found, return its index
        }

        // If the target is less than the middle element, search the left half
        if (target < arr[mid]) {
            right = mid - 1;
        }
        // If the target is greater than the middle element, search the right half
        else {
            left = mid + 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let targetValue = 5;

let result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`${targetValue} found at index ${result}.`);
} else {
    console.log(`${targetValue} not found in the array.`);
}
