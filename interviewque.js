//create this 1
//12
//123

//1234


for(i=1;i<=4;i++){ //print number 4
    let output = ''; //output
    for (j=1;j<=i;j++){ //j 4 vare run //inner loop
        output += j; //1+1= 
        // i = 1, op = op+ j  0 = 0 + 1 op=1 loop stop ,then next line
        //next line i=2 j=1 j runs upto 2 output 1 2 loop stops next line
        //In each iteration of the inner loop, the value of j is appended to the output string.
        //This process continues until the inner loop completes for the current line.
        //The outer loop then iterates to the next line (i increments),
        // and the process repeats until the outer loop completes.
       //if here  console.log(output) thoe output print as 
//1
// 12
// 1
// 12
// 123
// 1
// 12
// 123
// 1234
    }
    console.log(output)
   
}
// let array = [];
// for(i=0;i<=5;i++){
//     array.push(i)
//     //console.log(array)
// }
// console.log(array)