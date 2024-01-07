// // 1
// // 12
// // 123
// // 1234
// // 12345
// for (let i = 1; i <= 5; i++) {
//     // Add spaces before numbers
//     // let spaces = ' '.repeat(5 - i);
  
//     // Add numbers in descending order
//     let numbers = '';

//     for (let j = 1; j <= i; j++) {
//       numbers += j;
//     }
  
//     // Combine spaces and numbers and print the result
//     console.log(numbers);
//   }
  // 5
  // 54
  // 543
  // 5432
  // 54321

  // for(i=5;i>=1;i--){//row i=5   so etra row
  //   let result = ''
  //   for(j=5;j>=i;j--){//column i column becoz i=5 so j>=i become 5
  //     //first row etra column vre venm
  //     result += j
  //   }
  //   console.log(result)
  // }
// 54321
// 4321
// 321
// 21
// 1

  // for(i=5;i>=1;i--){ //evede start
  //   let result = '' //
  //   for(j=i;j>=1;j--){ //line evde vare run cheyanm
  //     result += j
  //   }
  //   console.log(result)
  // }

  for(i=1;i<=5;i++){ //evede start
  let result = '' //
  for(j=i;j<=5;j++){ //line evde vare run cheyanm
    result += j
  }
  console.log(result)
}