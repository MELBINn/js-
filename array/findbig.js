let arra = [1,2,3,4,5,6]

let result = Math.max(...arra)
console.log(result)


	// A JavaScript program to find a peak element

	// Find the peak element in the array
	function findPeak(arr, n)
	{
	
		// first or last element is peak element
		if (n == 1) return 0;
		if (arr[0] >= arr[1]) return 0;
		if (arr[n - 1] >= arr[n - 2]) return n - 1;

		// check for every other element
		for (var i = 1; i < n - 1; i++) 
		{
		
		// check if the neighbors are smaller
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
		}
	}

	// Driver Code
	var arr = [1, 3, 20, 4, 1, 0];
	var n = arr.length;
	console.log("Index of a peak point is " + findPeak(arr, n));
	
	// This code is contributed by rdtank.
	
    function findIndexOfMax(arr) {
        if (arr.length === 0) {
          return -1; // Handle the case when the array is empty
        }
      
        let max = arr[0];
        let maxIndex = 0;
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
          }
        }
      
        return maxIndex;
      }
      
      // Example usage:
      const numbers = [2, 7, 1, 8, 4];
      const indexOfMax = findIndexOfMax(numbers);
      
      console.log("Index of the maximum number:", indexOfMax);
      