var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(matrix.length)//3
console.log(matrix[2])//[ 4, 5, 6 ]


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Element at index (" + i + ", " + j + "): " + matrix[i][j]);
    }
 }
// In JavaScript, a two-dimensional array is essentially an array of arrays. Each element in 
// the outer array is itself an array, representing a row in the matrix. The expression matrix[i]
//  accesses the i-th element of the outer array, which is an array representing a row in the matrix.

// The expression matrix[i].length retrieves the length of the array at the i-th position, 
// which corresponds to the number of columns in the matrix. This is crucial because the length 
// of each row may be different in a jagged array (an array where the subarrays can have different lengths).

// In the context of a matrix:

//     matrix is the entire 2D array.
//     matrix[i] is the i-th row of the matrix (an array).
//     matrix[i].length is the number of columns in the i-th row.

// By using matrix[i].length in the inner loop condition, you ensure that you iterate through each
//  column in the current row, regardless of the specific number of columns in each row. This is a 
//  general approach that works for matrices where the number of columns may vary from row to row.

// The condition i < matrix.length in the outer loop ensures that you iterate over each row of the 
// matrix. In a two-dimensional array (matrix), matrix.length gives you the number of rows.

// So, the outer loop for (let i = 0; i < matrix.length; i++) iterates through each row of the matrix.
//  The variable i takes on values from 0 to matrix.length - 1, representing the row indices.

// In the context of the matrix:

//     matrix is the entire 2D array.
//     matrix.length is the number of rows in the matrix.

// The condition i < matrix.length ensures that the loop iterates as long as i is a valid row index. 
// This way, you visit each row in the matrix, and for each row, the inner loop (for (let j = 0; j < matrix[i].length; j++)) 
// iterates over the
//  columns in that particular row.