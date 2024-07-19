//max and min

// let arr = [1,8,3,9,6,7]

// let result = arr.sort((a,b)=>a-b)

// let res = (arr[0])
// let last = arr[arr.length - 1]

// console.log(res)
// console.log(last)

let numbers = [3, 5, 1, 8, 2, 9, 4];

let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);

// let numbers = [3, 5, 1, 8, 2, 9, 4];

// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);

// console.log("Maximum number:", maxNumber);
// console.log("Minimum number:", minNumber);
