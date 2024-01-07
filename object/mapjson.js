// Sample JSON data (an array of objects)
const jsonData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
  ];
  
  // Using map to transform the data
  const mappedData = jsonData.map(item => {
    return {
      userId: item.id,
      userName: item.name,
      userAge: item.age * 2 // just an example transformation
    };
  });
  
  console.log(mappedData);
  