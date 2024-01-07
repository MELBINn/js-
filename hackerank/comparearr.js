function compareArrays(ab, ba) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (ab[i] > ba[i]) {
            aliceScore++;
        } else if (ab[i] < ba[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}

const ab = [1, 4, 3];
const ba = [3, 2, 5];
const result = compareArrays(ab, ba);

console.log(result); // Output: [1, 1]

////////////////////////////////////
function compareArrays(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    // Determine the minimum length of the two arrays
    const minLength = Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
        // If elements are equal, no points are earned.
    }

    return [aliceScore, bobScore];
}

// Example usage
const a = [1, 2, 3];
const b = [3, 2, 1, 4, 5];
const resultt = compareArrays(a, b);

console.log(resultt); // Output: [1, 1]

///////////////////////////////////////////

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 5, 4];

// Assuming both arrays have the same length
const length = array1.length;

for (let i = 0; i < length; i++) {
  const element1 = array1[i];
  const element2 = array2[i];

  if (element1 === element2) {
    console.log(`Elements at index ${i} are equal: ${element1}`);
  } else {
    console.log(`Elements at index ${i} are not equal: ${element1} :${element2}`);
  }
}
////////////////////////////////////
const array12 = [1, 2, 3, 4];
const array21 = [1, 2, 5, 4];
let resultz = array12.map((i)=>{
    if(array12[i]===array21[i]){
        console.log(`Elements at index ${i} are equal: ${array12[i]}`);
    }else{
        console.log(`Elements at index ${i} are not equal: ${array12[i]} :${array21[i]}`);
    }
})