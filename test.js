// function compareArrays(ab, ba) {
//     let aliceScore = 0;
//     let bobScore = 0;

//     for (let i = 0; i < ab.length; i++) {
//         for(let j = 0; j < ba.length; j++){
//             if (ab[i] > ba[i]) {
//                 aliceScore++;
//             } else if (ab[i] < ba[i]) {
//                 bobScore++;
//             }
//         }
       
//     }

//     return [aliceScore, bobScore];
// }

// const ab = [1, 4, 3];
// const ba = [3, 2, 5];
// const result = compareArrays(ab, ba);

// console.log(result); // Output: [1, 1]

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