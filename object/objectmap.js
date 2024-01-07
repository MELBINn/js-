// const person =[{
//     name: "John Doe",
//     age: 25,
//     town: "Cityville"
//   },
//    {
//     name: "Jane Smith",
//     age: 35,
//     town: "Villagetown"
//   },
//   {
//     name: "Bob Johnson",
//     age: 40,
//     town: "Hamletsville"
//   }
// ]
    
const people = [
  { name: "John Doe", age: 25, town: "Cityville" },
  { name: "Jane Smith", age: 35, town: "Villagetown" },
  { name: "Bob Johnson", age: 40, town: "Hamletsville" }
];

// Use map to extract ages
const ages = people.map(person => person.age);

// Find the maximum age
const maxAge = Math.max(...ages);

// Find the person with the maximum age
const personWithMaxAge = people.find(person => person.age === maxAge);

// Print the name of the person with the biggest age
console.log(`The person with the biggest age is: ${personWithMaxAge.name}`);

const town = people.map((person)=>person.town.length)

//console.log(town)

const max = Math.max(...town)

//console.log(max)

const Maxtown = people.find((person)=>person.town.length === max)
console.log(Maxtown)

console.log(`The town with the biggest length is: ${Maxtown.town}`);



// const myObject = { a: 1, b: 2, c: 3 };

// const result = Object.keys(myObject).map(key => {
//   return { key: key, value: myObject[key] };
// });

// console.log(result);

// const myObject = { a: 1, b: 2, c: 3 };

// const result = Object.values(myObject).map(value => {
//   return { value: value };
// });

// console.log(result);

// const myObject = { a: 1, b: 2, c: 3 };

// const result = Object.entries(myObject).map(([key, value]) => {
//   return { key: key, value: value };
// });

// console.log(result);

cars.sort(function(a, b){return a.year - b.year}); 