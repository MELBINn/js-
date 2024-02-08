// function sumofn (n){
//     let result = (n * (n+1)/2)
//     console.log(result)
// }
// sumofn(2)

function sumofarr (arr , n){
    result = 0;
    for(i=0;i<=n;i++){ //i is 0,1,2,3 bt n is 1 2 3 4 so i<n
        result += arr[i]
    }
    console.log(result)
}
sumofarr([1,2,3,4,5],3)


const myArra = [1, 2, 3, 4, 5, 6, 7, 8];
const startInde = 1; // Index of the 2nd element
const endInde= 4;   // Index of the 5th element
//+1 is index based so +1
const sumOfElement= myArray.slice(startIndex, endIndex + 1).reduce((acc, current) => acc + current, 0);//0 is initia eleemt

console.log(sumOfElements);


const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const startIndex = 1; // Index of the 2nd element
const endIndex = 4;   // Index of the 5th element

let sumOfElements = 0;

for (let i = startIndex; i <= endIndex; i++) {
    sumOfElements += myArray[i];
}

console.log(sumOfElements);
