


//let arr  = [1,2,3,4,56,5,6,7]

// function pal(string){
//   let rev = ''
//    for(let i=str.length-1;i>=0;i--){

//    }
// }

// let string  = "ada"
// console.log(pal(string))

const palindrome = (str) =>{
    let reverse = '';
    for(i = str.length-1;i>=0;i--)
    reverse += str[i]
    if (reverse === str){
        console.log("it is palindrome")
    }else{
        console.log("not")
    }}
    palindrome("aba")