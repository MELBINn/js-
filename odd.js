//reminder is not equal to zero
// function odd(arr){
//     const oddnum = arr.filter(num =>num % 2 !== 0)//two operands are equal its false
//     console.log(oddnum)
// }
// odd([1,2,3,4,5])

function odd(arr){
    oddnumbers = [];
   
    for(i=0;i<=arr.length;i++){
        if(i % 2 !== 0){
            oddnumbers.push(i)
        }
    }
    console.log(oddnumbers)
}
odd([1,2,3,4,5])

let arr = [1,2,3,4,5,6]
let result = []

let odd = arr.filter((a)=>a % 2 !== 0)
// console.log(odd)
//result.push(odd) not work
//result = result.concat(odd);
result = [...result,...odd]
console.log(result)