// 1️⃣ Implicit Type Coercion (Automatic)

// ✅ String + Number

let a = 10;
let b = "20";

console.log(a + b);        // "1020"
console.log(typeof(a + b)); // string

// ✅ Number – String

let x = 20;
let y = "10";

console.log(x - y);        // 10
console.log(typeof(x - y)); // number

// ✅ Multiplication / Division

console.log(10 * "2"); // 20
console.log(10 / "2"); // 5

console.log("5" + 3); // "53"
console.log("5" - 3); // 2


// 📌 Reason:
// + → prefers string concatenation
// -, *, / → prefer numeric conversion

// 2️⃣ Explicit Type Coercion (Manual)

// ✅ String → Number
let str = "123";

console.log(Number(str));     // 123
console.log(parseInt(str));  // 123

// ✅ Number → String
let num = 50;

console.log(String(num)); // "50"

// ✅ Boolean Conversion
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("hi")); // true