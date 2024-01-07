array1=[...array1,...array2]
 
array1 = array1.concat(array2)

Array.prototype.push.apply(array1, array2);

for(i=0;i<array2.length;i++){
    array1.push(array2[i])
}