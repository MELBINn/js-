function sum(numbers){
    let result = 0;
    for(i=0;i<numbers.length;i++){
      result +=numbers[i]
    }
    console.log(result)
}
sum([1,2,3])


function sum(numbers){
  let result = 0;
  for(i=0;i<numbers.length;i++){
    result +=numbers[i]
  }
  console.log(result)
}
sum([1,2,3])
// function summ(num){
//   let res = 0;
//   num.forEach(n=> {
//     res += n
    
//   });
//   console.log(res)
// }
// summ([1,2,3])

function simpleArraySum(ar) {
  // Using the reduce method to calculate the sum
  return ar.reduce((acc, current) => acc + current, 0);
}
function sumofn(arr){
  let result  = arr.reduce((acc,current)=>acc+current)
  console.log(result)
}
(sumofn([1,2,3,4,5,6]))
// The reduce method takes a callback function and an initial value for the accumulator (0 in this case).
// The callback function is applied to each element in the array, and the accumulator is updated accordingly. 
// This results in the sum of all the elements in the array.