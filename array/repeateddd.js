function repeated(arr,x){
    let n = arr.length;
    let a = 0;

    for(i=0;i<n;i++){
        if(x == arr[i])
         a++;
    }
    return a; 
}


const res = repeated([1,2,3,4,2],2)
console.log(`repeated ${res} times`)

