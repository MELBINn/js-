function editDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the distances
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;//if string i is empty calculate how much to change first string into second
            } else if (j === 0) {
                dp[i][j] = i;
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + (str1.charAt(i - 1) !== str2.charAt(j - 1) ? 1 : 0),
                    dp[i][j - 1] + 1,
                    dp[i - 1][j] + 1
                );
            }
        }
    }

    return dp[m][n];
}
console.log(editDistance("hello","helool"))