// a = a + b; a = 1 + 2 = 3
// b = a - b; b = 3 - 2 = 1
// a = a - b; a = 3 - 1 = 2
//last ans = a = 2 b = 1

function numbers(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("swap no are",a,b)
}
numbers(1,2)