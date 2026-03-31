/**
 * Program: Find the total sum of all elements in an array
 *
 * Approach:
 * - Use a "for loop" to iterate through the array
 * - Initialize a variable 'sum' with 0
 * - Add each element to 'sum'
 * - Print the final result
 */

let prices = [100, 200, 300];

// Step 1: Initialize sum
let sum = 0;

// Step 2: Loop through array
for (let i = 0; i < prices.length; i++) {
  // Step 3: Add each element to sum
  sum = sum + prices[i];

  // (optional) print each value
  console.log(prices[i]);
}

// Step 4: Print final sum
console.log("Total sum is:", sum);
