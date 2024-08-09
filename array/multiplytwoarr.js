function multiply(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
      res.push(arr1[i] * arr2[i]);
    }
    return res;
  }
  
  let arr1 = [1, 2, 3, 4, 4, 5];
  let arr2 = [1, 3, 4, 5, 6, 6];
  const fun = multiply(arr1, arr2);
  console.log(fun);
  

  // function multiplyArrays(arr1, arr2) {
//     const maxLength = Math.max(arr1.length, arr2.length);
//     const result = [];

//     for (let i = 0; i < maxLength; i++) {
//         const num1 = arr1[i] !== undefined ? arr1[i] : null;
//         const num2 = arr2[i] !== undefined ? arr2[i] : null;

//         if (num1 !== null && num2 !== null) {
//             result.push(num1 * num2);
//         } else {
//             result.push('no number');
//         }
//     }
//     return result;
// }

// Example usage
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7];

// const result = multiplyArrays(array1, array2);
// console.log(result); // Output: [5, 12, 21, 'no number']


function multiplyArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
      const num1 = arr1[i];
      const num2 = arr2[i];

      if (num1 !== undefined && num2 !== undefined) {
          result.push(num1 * num2);
      } else {
          result.push("nothing");
      }
  }
  return result;
}

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7];

const result = multiplyArrays(array1, array2);
console.log(result); // Output: [5, 12, 21, 'no number']
