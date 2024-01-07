let array = [[1,2,3],
            [4,5,6],
            [7,8,9]]

function diagonal(array,i,j){
 
     array[i][j] + array[i+1][j+1]+array[i+2][j+2]
     let  diagonalSum = diagonal(array, 0, 0);
     console.log(diagonalSum)
     
   
}
console.log(diagonal(array))