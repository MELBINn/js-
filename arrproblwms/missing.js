function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

// Example usage:
const arrayy = [0, 1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arrayy);
console.log("Missing number:", missingNumber);


function findMissingNumbers(nums) {
    const n = nums.length + 2; // Two missing numbers
    const totalSum = (n * (n + 1)) / 2;
    
    const arraySum = nums.reduce((sum, num) => sum + num, 0);

    const sumDiff = totalSum - arraySum;
    const averageDiff = sumDiff / 2;

    const expectedSum1 = (n / 2) * ((n / 2) + 1);
    const actualSum1 = nums.filter(num => num <= averageDiff).reduce((sum, num) => sum + num, 0);
    const missingNum1 = expectedSum1 - actualSum1;

    const expectedSum2 = totalSum - expectedSum1;
    const actualSum2 = arraySum - actualSum1;
    const missingNum2 = expectedSum2 - actualSum2;

    return [missingNum1, missingNum2];
}

// Example usage:
const array = [0, 1, 2, 6, 4, 5, 7, 8];
const missingNumbers = findMissingNumbers(array);
console.log("Missing numbers:", missingNumbers);
