function twoSum(nums, target) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return null; // If no solution is found
}

// Example usage:
const array = [2, 7, 11, 15];
const targetSum = 9;
const result = twoSum(array, targetSum);

if (result !== null) {
    console.log(`Indices of two numbers that add up to ${targetSum}: ${result}`);
} else {
    console.log(`No solution found.`);
}
