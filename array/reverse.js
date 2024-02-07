//reverse

let arr = [1,2,4,5,67,4]

// let res =arr.reverse()

// console.log(res)
result = [];
for(i=arr.length-1;i>=0;i--){
   result.push(arr[i])
}
console.log(result)

//without modifying original array
let reversedArray = originalArray.slice().reverse();