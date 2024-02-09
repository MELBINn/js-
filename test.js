
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 22 },
  { name: 'Eva', age: 25 },
  { name: 'Frank', age: 30 }
];

const groupedByAge = people.reduce((result, person) => {
  const { age } = person;

  // Check if the age is already a key in the result object
  if (result[age]) {
    result[age].push(person);
  } else {
    // If the age is not a key, create a new key with an array containing the person
    result[age] = [person];
  }

  return result;
}, {});

console.log(groupedByAge);