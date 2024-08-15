const numbersArray = [1, 2, 3, 4, 2, 5, 6, 3];

let numbercount = {};

let repeated = [];

numbersArray.forEach((number)=>{
   if(!repeated[number]){
     numbercount.push(number)
     repeated[number] =true
   })
   return number
}