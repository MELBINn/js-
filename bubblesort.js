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
