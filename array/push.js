let array = ["apple","orange","banana"]

let result = array.push("jack")


//console.log(result)//4
console.log(result)//[ 'apple', 'orange', 'banana', 'jack' ]


// Adding 'grape' to the end of the array without using push
 fruits[fruits.length] = 'orange';
// //// Adding 'grape' to the end of the array using the spread operator
 fruits = [...fruits, 'grape'];
 fruits = fruits.concat('grape');
 fruits.splice(fruits.length, 0, 'grape');
//  The index at which to start changing the array (fruits.length in this case).
//  The number of elements to remove (0 in this case, indicating that no elements should be removed).
//  The new elements to add ('grape' in this case).
fruits.unshift('grape');
fruits = Array.from(fruits).concat('grape');
// Array.from(fruits) creates a shallow copy of the original array, and then the concat method is used
// to concatenate this copy with
//  a new array containing only the element 'grape'
Array.prototype.push.apply(fruits, ['grape']);
// Array.prototype.push.apply is used to push the elements of a new array ['grape'] onto the fruits array.
//  This method modifies the original array in place.