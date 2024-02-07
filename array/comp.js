// let string = "In the heart of the bustling city, #where the rhythmic hum of life @never seems to fade, "

// //sort with only first letter count length repeated words remove symbols

// let str = string.split(' ');
// //console.log(str)

// let repstr = str.map((a)=>a.replace(/[#@%,]/g, ''))//if u put space there will space and when sort the space will come
// //console.log(repstr)

// let sostr = repstr.filter((a)=>a.length>0).sort((a, b) => a.split(' ')[0].localeCompare(b.split(' ')[0])).join();
// console.log(sostr)


// let lenstr = sostr.split('').length
// console.log(lenstr)

// for(var i=1;i<=3;i++){
//     setInterval(()=>{
//         console.log(i)
//     },1000)
// }



// let roles = "I am cook and nurse and builder and a father";
// let words = roles.split('');
// console.log(words)
// let len=words.length
// console.log(len)

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 5, 4];
let result = array1.map((num,i)=>{
    if(array1[i]==array2[i]){
        console.log(`Elements at index ${i} are equal: ${array1[i]}`);
    }else{
        console.log(`Elements at index ${i} are not equal: ${array1[i]} :${array2[i]}`);
    }
})
