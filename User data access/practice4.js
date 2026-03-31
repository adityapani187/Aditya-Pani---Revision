/**
 * Program: Calculate discount and final amount
 *
 * Rule:
 * - If amount is greater than 1000, apply 10% discount
 * - Otherwise, no discount
 * - Then calculate final payable amount
 */

let amount = 1200;
let discount = 0;

// Step 1: Apply discount condition
if (amount > 1000) {
  discount = (amount * 10) / 100;
} else {
  discount = 0;
}

// Step 2: Print discount
console.log("Discount is:", discount);

// Step 3: Calculate final amount after discount
let finalAmount = amount - discount;

// Step 4: Print final amount
console.log("Final amount to pay:", finalAmount);
