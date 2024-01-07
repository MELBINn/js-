// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" 
//instead of the number,
// and for the multiples of five, print 
// "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

//multiple of 3 i % 3 === 0

for(i=1;i<=100;i++){
    if(i % 3 ===0 && i%5===0){
        console.log("fizzbuzz")}
     else if(i % 3 ===0){
        console.log("fizz")
    }else if(i%5===0){
        console.log("buzz")
     
    }else{
        console.log(i)
    }
}
    
for (let i = 1; i <= 100; i++) {
    const output = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
                   (i % 3 === 0) ? "Fizz" :
                   (i % 5 === 0) ? "Buzz" :
                   i;

    console.log(output);
}

