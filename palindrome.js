//characters that reads the same forward and backward 

//reverse it
//check with the org str

const palindrome = (str) =>{
    let reverse = '';
    for(i = str.length-1;i>=0;i--)
    reverse += str[i]
    if (reverse === str){
        console.log("it is palindrome")
    }else{
        console.log("not")
    }}
    palindrome("abba")