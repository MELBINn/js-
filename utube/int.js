// let arr = [[1,2],[3,4],[5,6]]

// let res = arr.flat(1);
// console.log(res)//[ 1, 2, 3, 4, 5, 6 ]

// function flat(arr,n){
//     if(n===0) return arr;
//     const res=[];
//     for(let i=0;i<arr.length;i++){
//       if(typeof arr[i]==="number")
//         res.push(arr[i])
//     else{
//         res.push(...flat(arr[i],n-1));//call the fun as depth as -1 decreasing the depth gradually
//     }
//     }
//     return res;
// }
// let ans = flat([[1,2],[3,4],[5,6]],3)//3=depth q.make this one array
// console.log(ans)

//console.log("4"+6*5)//6*5 then string "4" = 430
//console.log("4"*6+5)//if multiplication number string becomes number  so 4*6+5 = 29

//console.log(typeof NaN)//number

//console.log("5" - "3" + 6)//same tpe so left to right js tye coertion make it 5 and 3 so 5-3+6=8

console.log( NaN == NaN)//false
console.log( NaN === NaN)//false
// NaN is not equal to any value, including itself. This is why both NaN == NaN and NaN === NaN evaluate to false. 

function findMaxLengthWord(sentence) {
    // Match all words in the sentence, ignoring punctuation and handling multiple spaces
    let words = sentence.match(/\b\w+\b/g);

    // Initialize a variable to store the maximum length
    let maxLength = 0;

    // Iterate through the words using a for loop
    for (let i = 0; i < words.length; i++) {
        // Update maxLength if the current word's length is greater
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

// Example usage:
let sentence = "The quickkk brown fox jumps over the lazy dog!";
console.log("Maximum word length:", findMaxLengthWord(sentence)); // Output: 5

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(3)); 