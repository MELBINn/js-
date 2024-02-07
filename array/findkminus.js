//sort the array and return k-1

let arr=[7, 10, 4, 3, 20, 15]  
let k = 4

let result = arr.sort((a,b)=>a-b)

console.log(result)
let res = ''
for(i=0;i<k;i++){
 res = arr[i]
}
console.log(res)