function hourglassSum(arr, i, j) {
    // Calculate the sum of the hourglass at position (i, j)
    return (
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
    );
}

function maxHourglassSum(arr) {
    let maxSum = -Infinity;

    // Iterate through the 4x4 subarrays to find hourglasses
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // The function then uses nested loops to iterate over the 4x4 subarrays within the 6x6 array.
            //  This is because the hourglass pattern requires
            //  a minimum of 3x3 space, and we need to stay within the bounds of the 6x6 array.
            const currentSum = hourglassSum(arr, i, j);
            maxSum = Math.max(maxSum, currentSum);//update maxSum with the maximum value between
            // its current value and the currentSum.
        }
    }

    return maxSum;
}

// Example 6x6 array
const array6x6 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

// Calculate and print the maximum hourglass sum
const result = maxHourglassSum(array6x6);
console.log(result);

//The `for` loops with `let i = 0; i < 4; i++` and `let j = 0; j < 4; j++` are used to iterate over
// the subarrays of the 6x6 array to find all possible starting points for hourglasses.
// The choice of `4` comes from the fact that each hourglass requires a minimum of 3x3 space, 
//and since we are iterating over the top-left corner of the hourglass, we need to ensure that 
//we stay within the bounds of the 6x6 array.

// Here's a breakdown of how the loops work:

// - The outer loop (`for (let i = 0; i < 4; i++)`) iterates over the rows of the 6x6 array, starting from 
// the top-left corner and going down to the fourth row. This ensures that there is enough space vertically
//  to form a 3x3 hourglass.

// // - The inner loop (`for (let j = 0; j < 4; j++)`) iterates over the columns of the 6x6 array, 
// starting from the top-left corner and going to the fourth column. This ensures that there is
//  enough space horizontally to form a 3x3 hourglass.

// // - Inside the nested loops, the `hourglassSum` function is called with the current position 
// `(i, j)` as the starting point of the hourglass.

// // - The `Math.max` function is then used to update `maxSum` with the maximum value between
//  its current value and the `currentSum`. This keeps track of the maximum hourglass sum encountered 
//  so far.

// // By iterating over these positions, the loops cover all possible starting points for hourglasses
//  within the 6x6 array. The `hourglassSum` function is responsible for calculating the sum of the hourglass 
//  at the given starting position.