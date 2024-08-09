function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    // Iterate through both arrays and merge them into one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to the merged array
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to the merged array
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
