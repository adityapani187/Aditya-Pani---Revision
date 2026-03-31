/**
 * Program: Find the highest number in an array
 *
 * Approach:
 * - We use a "for loop" to iterate through the array
 * - We assume the first element is the maximum
 * - Then we compare each element with the current maximum
 * - If a bigger number is found, we update the maximum
 */

let nums = [10, 15, 20, 25, 30];

// Step 1: Assume first element is the maximum
let max = nums[0];

// Step 2: Loop through the array using "for loop"
for (let i = 0; i < nums.length; i++) {
  // Step 3: Compare current element with max
  if (nums[i] > max) {
    // Step 4: Update max if current element is greater
    max = nums[i];
  }
}

// Step 5: Print the result
console.log("Highest number is:", max);
