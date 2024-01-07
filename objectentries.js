const person = { name: 'John', age: 30, city: 'New York' };

// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);

console.log(entries);

//[ ["name", "John"], ["age", 30], ["city", "New York"] ]

let originalObject = {
    name: "jo#",
    place: "hello#"
};

let updatedObject = Object.fromEntries(
    Object.entries(originalObject).map(([key, value]) => [key, value.split('#')])
);

console.log(updatedObject);
