let arr = [1,1,2,3,3,4,5,6,6]

let numberCount = {};
let repeated = [];

arr.map((n)=>{
  numberCount[n] = (numberCount[n] || 0)+1
})

for(const n in numberCount){
    if(numberCount[n]>1){
        repeated.push(n)
    }
}
repeated.map((n)=>{
  console.log(`${n} : ${numberCount[n]} times`)
})