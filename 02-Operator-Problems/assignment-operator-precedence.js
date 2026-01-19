// Q1
let a = 5;
a += 3 * 2;
console.log(a); 
// Output: 11


// Q2
let b = 10;
b += 5 * 2;
console.log(b); 
// Output: 20


// Q3
let c = 10;
c *= 2 + 3;
console.log(c); 
// Output: 50


// Q4
let d = 5;
let e = 2;
d += e++ * 3;
console.log(d, e); 
// Output: 11 3


// Q5 (Invalid syntax example – correctly commented)
// let x = 10;
// let y = ++x x++; 
// console.log(x, y);
// ❌ Error: Missing operator between ++x and x++


// Q6
let f = 20;
f -= 4 + 2 * 3;
console.log(f); 
// Output: 10


// Q7
let n = 10;
let m = n++ + ++n;
console.log(m, n); 
// Output: 22 12



// 🧠 Step-by-Step (Correct Logic)
// 1️⃣ Operator precedence
// * runs before +=
// So first:
// 3 * 2 = 6


// 2️⃣ Now apply +=
// a += 6 means:
// a = a + 6
// a = 5 + 6


// ✅ Final Value
// a = 11


// So output is:
// 11


// ⭐ Rule
// a += x is the same as a = a + x
// and operator precedence still applies.