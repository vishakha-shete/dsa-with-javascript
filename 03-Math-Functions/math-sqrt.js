
// Basic square roots
console.log(Math.sqrt(4));   // 2
console.log(Math.sqrt(9));   // 3
console.log(Math.sqrt(16));  // 4
console.log(Math.sqrt(25));  // 5

// Zero case
console.log(Math.sqrt(0)); 
// 0

// Non-perfect square
console.log(Math.sqrt(20));  
// 4.47213595499958

// Negative number
console.log(Math.sqrt(-4));  
// NaN

// check perfect square
let n = 36;
console.log(Number.isInteger(Math.sqrt(n))); 
// true
