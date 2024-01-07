// function sumofn (n){
//     let result = (n * (n+1)/2)
//     console.log(result)
// }
// sumofn(2)

function sumofarr (arr , n){
    result = 0;
    for(i=0;i<=n;i++){ //i is 0,1,2,3 bt n is 1 2 3 4 so i<n
        result += arr[i]
    }
    console.log(result)
}
sumofarr([1,2,3,4,5],3)