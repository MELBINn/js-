let arr = [1,1,2,3,3,4,5,6,6]

let numberCountt = {};
let repeated = [];

arr.map((n)=>{
  numberCountt[n] = (numberCountt[n] || 0)+1
})

for(const n in numberCountt){
    if(numberCountt[n]>1){
        repeated.push(n)
    }
}
repeated.map((n)=>{
  console.log(`${n} : ${numberCountt[n]} times`)
})

const numbersArray = [1, 2, 3, 4, 2, 5, 6, 3];

// Step 1: Initialize an empty object to store the count of each number
const numberCount = {};

// Step 2: Initialize an empty array to store repeated numbers
const repeatedNumbers = [];

// Step 3: Iterate through each number in the array
numbersArray.forEach((number) => {

    // Step 4: Increment the count for the current number in the numberCount object
    //forEach loop iterates through each number in numbersArray and increments its count in the numberCount object.
    numberCount[number] = (numberCount[number] || 0) + 1;
    //the (numberCount[number] || 0) + 1 checks for if that num is in the array it increments by 1, 1+1
    //if it is not like 0 it increments to 1 to the numberCount[number]
    //  object value access numberCount[number] like this (person['name'])
    //the calculation done in right side and values assigned to left side
    // numberCount[number] => use the value of number as a key/index to access in the numberCount object.
    //no represent each no in array proceessed in foreach loop numberCount is the object
});

// Step 5: Iterate through the keys of the numberCount object
Object.keys(numberCount).forEach((number) => {// array containing the enumerable property names (keys) of the numberCount object.

    // Step 6: Check if the count of the number is greater than 1 (indicating repetition)
    if (numberCount[number] > 1) {

        // Step 7: Convert the string key back to a number and add it to the repeatedNumbers array
        repeatedNumbers.push(Number(number));

    }
});

// Step 8: Log the array containing the repeated numbers
//console.log(repeatedNumbers);

repeatedNumbers.forEach((num)=>console.log(`${num} : ${numberCount[num]}times`))


// use of `` template iterals
// const name = 'John';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, John!


