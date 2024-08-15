const numbersArray = [1, 2, 3, 4, 2, 5, 6, 3];
let uniqueArray = [];
let seen = {};

numbersArray.forEach((number) => {
    if (!seen[number]) {//if false push
        uniqueArray.push(number);
        seen[number] = true; //the num is added to seen as true
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
