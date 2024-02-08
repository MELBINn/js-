let arr1 = [1,2,2,3]
let arr2 = [4,5,6]





let result =[...new Set([...arr1,...arr2])]
console.log(result)

function addNumberToCenter(arr, num) {
    const centerIndex = Math.floor(arr.length / 2);
    arr.splice(centerIndex, 0, num);
    return arr;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const numberToAdd = 99;
const resultArray = addNumberToCenter(originalArray, numberToAdd);
console.log(resultArray);

//as second element
function addNumberAsThirdElement(arr, num) {
    arr.splice(2, 0, num); // Insert the number at index 2 0means no elemnts removed
    return arr;
}

function replaceElementAtIndex(arr, index, num) {
    arr.splice(index, 1, num); // Remove 1 element at the specified index and insert the new element
    return arr;
}
//remove 1 and add 1 there
// Example usage:
const originalAry = [1, 2, 3, 4, 5];
const newNumber = 99;
const replaceAtIndex = 3; // Replace element at index 3 (zero-based)
const resultAry = replaceElementAtIndex(originalArray, replaceAtIndex, newNumber);
console.log(resultArray);


function replaceElementsAtIndex(arr, index, newElements) {
    arr.splice(index, 2, ...newElements); // Remove 2 elements at the specified index and insert the new elements
    return arr;
}

// Example usage:
const originalArr = [1, 2, 3, 4, 5];
const newNumbers = [99, 100];
const replaceAtInd = 3; // Replace elements starting at index 3 (zero-based)
const resultArr = replaceElementsAtIndex(originalArr, replaceAtInd, newNumbers);
console.log(resultArray);
