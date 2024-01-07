let numbers = [10, 5, 8, 2, 1];

// Sort the array of numbers in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

//sort in random order
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
//find max
let numberss = [5, 8, 2, 10, 1];

let maxNumber = Math.max(...numberss);
console.log(maxNumber); // Output: 10

let numberz = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let result = numberz.sort();
console.log(result)

let number = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Sort the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(number); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]