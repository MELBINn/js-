//if we console.log inside  { } with the loop it will console log single steps [ 0 ]
// [ 0, 1 ]                                  
// [ 0, 1, 2 ]
// [ 0, 1, 2, 3 ]
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2, 3, 4, 5 ] like this not like [ 0, 1, 2, 3, 4, 5 ]

//odd num => num % 2 !== 0
//loop start frm 1 becoz 0 is even
//result = [] and if we add sum of n num it will only add those num to get sum the result must be 0

// in for each map like we take an array name numbers  num.forEach(n=> { //u have to jst put a letter 
//here a for each element numbers array each element reprented by n
//     res += n
//addedMovies.splice(index,1);for delete the thing with the each button corresponding to it
// a = a + b;
//b = a - b;
//a = a - b;

//a + (-b) minus without using minus operator

//const temp = array[index1];//swap
// array[index1] = array[index2];
// array[index2] = temp;

// function add(){
//     return "hello"
// }
// console.log(add())

//output 
//hello

//a[b]        if a is an array, a[b] accesses the element at index b in the array a.
//let fruits = ['apple', 'banana', 'orange'];
//console.log(fruits[1]); // Output: 'banana'

//+= cannot use in array ans 246 like this only if u want sum n numbers declare sum = 0 first
//like push chyn pattila sum add akan pattum

//arr[i]  = access element at index i
//i=index

//length less than ayirkanm index

//bubblesort j<n-i-1 n - i korach so i loop sort chyth i vare ethetund pinea th sort chynda so n-i-1 sort chythathil
//ninn oru element kodi korch last elemnt first sort sort ayi so ath korch baaki first iteration thanne last
//element order avum
//first largest number in lasst position
//second largest in second position

// Math.max
// Math.min

// let x = 5;

// let result = x++;
// console.log(result)//5
//  console.log(x)//6

 
// let resultt = ++x;
// console.log(resultt)//6 it is normal ans bt here 6 becomes 7 becoz in above x has been 6
//  console.log(x)//6

//array
//find area
//let rsul = rectangles.map((obj) => obj.width * obj.height);
//find word with word e and find length
//let e = wordss.filter((word)=>word.includes("e")).map((word)=>word.length)

// [ '#20', '#50', '#75' ]

// const symbol = "#";

// const amount = amounts.map((amo)=>symbol+amo)

//const arresult = array1.map((num,index)=>num * array2[index])
//For each iteration, the element from array1 at the current index (num) is 
//multiplied by the corresponding element from array2 at the same index 

// let a = "hello";

// console.log(a)

// for(vari=1;i<=3;i++){                 
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// } However, this code will not produce the expected result due to the way closures work in JavaScript.
// By the time the console.log(i) is executed inside the setTimeout callback, 
//the loop will have completed, and i will be equal to 4 for all the timeouts.
// // 4
// // 4
// // 4

// for(var i=1;i<=3;i++){
//     setInterval(()=>{
//         console.log(i)
//     },1000)
// }
// // 4
// // 4
// // 4 go infinitely 

// Create a set
// const mySet = new Set();

// // Add values to the set
// mySet.add(1);
// mySet.add("Hello");
// mySet.add({ key: "value" });

// // Check if the set has specific values
// console.log(mySet.has(1)); // Output: true
// console.log(mySet.has("World")); // Output: false
// console.log(mySet.has({ key: "value" })); // Output: false (because it's a different object reference)

//numberCount[number] = (numberCount[number] || 0) + 1;

// let thingss = [1, 23, 26, 4];
// let thingsss = thingss.sort((a, b) => a - b);
// console.log(thingsss);

//compare two arr

// let resultz = array12.map((i)=>{
//     if(array12[i]==array21[i]){