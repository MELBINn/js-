//merge two arr
function mergeArrays(array1, array2) {
    const mergedArray = [];
    
    // Add elements from array1
    for (let i = 0; i < array1.length; i++) {
      mergedArray.push(array1[i]);
    }
  
    // Add elements from array2
    for (let i = 0; i < array2.length; i++) {
      mergedArray.push(array2[i]);
    }
  
    return(mergedArray);
  }
  
  // Example
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const result = mergeArrays(array1, array2);
  
   console.log(result); // Output: [1, 2, 3, 4, 5, 6]
  

   //using concat

   let array3=[1,2,3,4];
   let array4=[5,6,7,8];

   const mergedArray = array3.concat(array4);

   console.log(mergedArray)

   //using spread

   const array5= [1, 2, 3];
const array6 = [4, 5, 6];

const mergeddArray = [...array5, ...array6];

console.log(mergeddArray); // Output: [1, 2, 3, 4, 5, 6]

//using push

const array7 = [1, 2, 3];
const array8 = [4, 5, 6];

const mergedddArray = [...array7];
mergedddArray.push(...array8);

console.log(mergedddArray); // Output: [1, 2, 3, 4, 5, 6]


//using from 

const array10 = [1, 2, 3];
const array9 = [4, 5, 6];

const mergedddddArray = Array.from(array1).concat(array2);

console.log(mergedddddArray); // Output: [1, 2, 3, 4, 5, 6]


array1=[...array1,...array2]
 
array1 = array1.concat(array2)

Array.prototype.push.apply(array1, array2);

for(i=0;i<array2.length;i++){
    array1.push(array2[i])
}