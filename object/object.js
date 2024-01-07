const person = {
    name: 'John',
    age: 30,
    job: 'Developer',
  };

//Using the new keyword and Object Constructor:
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';

console.log(person.name); // Output: John
person.age = 31;
console.log(person['age']); // Output: 31

//You can access and modify object properties using dot notation or square bracket notation:

//In JavaScript, functions inside objects are referred to as methods. Methods are functions associated 
//with object instances. Here's an example:

// const person = {
//   name: 'John',
//   age: 30,
//   sayHello: function() {
//     console.log('Hello, my name is ' + this.name);
//   },
// };

// person.sayHello(); // Output: Hello, my name is John

// The `Object.entries()` method in JavaScript is used to return an array of a given object's own enumerable property `[key, value]` pairs. It allows you to iterate over the properties of an object and obtain key-value pairs in the form of an array.

// Here's a simple explanation of how `Object.entries()` works:


const person = { name: 'John', age: 30, city: 'New York' };

// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);

console.log(entries);


// Output:
// ```
// [ ["name", "John"], ["age", 30], ["city", "New York"] ]
// ```

// In this example, `Object.entries(person)` converts the `person` object into an array of `[key, value]` pairs.
// Each property of the object becomes an array, where the first element is the property key and the 
// second element is the property value.

// Here are a few key points about `Object.entries()`:

// 1. **Enumerable Properties Only:** `Object.entries()` returns only the own enumerable properties of 
// the object. It does not include properties from the object's prototype chain.

// 2. **Order of Properties:** The order of properties in the resulting array is based on the order 
// in which they were defined in the object. However, there are some exceptions, and in practice, you
//  should not rely on the order.

// 3. **Iterating Over Properties:** The array returned by `Object.entries()` can be easily iterated 
// using methods like `forEach`, `map`, or `for...of`.

// Here's an example using a `for...of` loop:


const person = { name: 'John', age: 30, city: 'New York' };

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}


// Output:
// ```
// name: John
// age: 30
// city: New York
// ```

// This loop iterates over the array of `[key, value]` pairs returned by `Object.entries(person)`
//  and logs each key-value pair.

let originalObject = {
  name: "jo#",
  place: "hello#"
};

let updatedObject = Object.fromEntries(
  Object.entries(originalObject).map(([key, value]) => [key, value.split('#')])
);

console.log(updatedObject);
