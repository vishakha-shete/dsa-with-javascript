🔹 → division operator

JavaScript division returns floating-point numbers

Math.floor() is used to get the integer part of a division

Useful in DSA, loops, indexing, and logic problems

1️⃣ Normal Division

JavaScript always returns decimal values for division.

10 / 3 = 3.3333333333333335

2️⃣ Math.floor()

Math.floor() removes the decimal part

It returns the largest integer less than or equal to the value

Math.floor(10 / 3) = 3
Math.floor(16 / 3) = 5




🔹 Modulus Operator (%) in JavaScript
- % gives the remainder

- If divisor is bigger than number,       
  remainder is the number itself
  👉 2 % 10 = 2

✍️ Note
  To remove last digit(s), divide by powers of 10 and use Math.floor()

  🔹 Getting only the last digit

This part you wrote is perfect 👌

let n = 45678;
console.log(n % 10); // 8

🧠 Why this works

% 10 gives the last digit

% 100 gives the last two digits

Examples:

45678 % 10   // 8
45678 % 100  // 78
45678 % 1000 // 678

✅ Clean & Correct Notes (GitHub Ready)
// Modulus operator examples
console.log(10 % 2);  // 0
console.log(10 % 3);  // 1
console.log(2 % 10);  // 2

// Removing last digit
let n = 45678;
console.log(Math.floor(n / 10));    // 4567
console.log(Math.floor(n / 100));   // 456
console.log(Math.floor(n / 1000));  // 45
console.log(Math.floor(n / 10000)); // 4

// Getting last digit
console.log(n % 10); // 8

⭐ Very Important DSA Rules (Remember These)
n % 10 → last digit

Math.floor(n / 10) → remove last digit

% is used heavily in:

digit problems

palindrome checks

reversing numbers

even/odd logic

🧠 One-Line Summary
Use % to extract digits and Math.floor(n / 10) to remove digits.



🔹 Comparison / Relational Operators

They always return a Boolean value (true or false)

🧠 Very Important Rules 

== → compares values only (type conversion happens)

=== → compares value + type (no conversion)

!= → opposite of ==

!== → opposite of ===

Comparison operators always return boolean

⭐ One-Line Summary

“Use === and !== for safe and predictable comparisons in JavaScript.”



🔹 Logical Operators

👉 Used when we want to check multiple conditions together
👉 They always return a boolean (true / false)

1️⃣ AND operator (&&)

Rule:
✔ Returns true only if all conditions are true

✅ Correct examples
console.log(12 > 7 && 8 < 56 && 19 > 10);
// true (all conditions are true)

console.log(12 < 7 && 8 < 56 && 19 > 10);
// false (first condition is false)


📝 Note:
If any one condition is false, the result is false.

2️⃣ OR operator (||)

⚠️ You wrote // — that is a comment, not OR.
✅ Correct OR operator is ||

Rule:
✔ Returns true if at least one condition is true

✅ Correct example
console.log(12 < 7 || 8 < 56 || 19 > 10);
// true (because 8 < 56 and 19 > 10 are true)

3️⃣ NOT operator (!)

Rule:
✔ Reverses the result

true → false

false → true

✅ Correct example
console.log(!(12 < 7 || 8 < 56 || 19 > 10));
// false


🧠 Explanation:

Inside OR → result is true

!true → false

🧠 Very Important Rules (Write These)

&& → all conditions must be true

|| → at least one condition must be true

! → reverses the result

Logical operators always return boolean

⭐ One-Line Summary

Logical operators are used to combine multiple conditions into a single boolean result.




🔹 Unary Operator (Very Important)
📌 Definition

Unary operator works with only ONE operand (value).

Example:

++a
--a
!a

🔹 Types of Unary Operators
1️⃣ Increment (++)

Pre-increment → ++a

Post-increment → a++

2️⃣ Decrement (--)

Pre-decrement → --a

Post-decrement → a--

🔹 Post-increment (a++)

👉 Use value first, then increase

let a = 10;
let b = a++;

console.log(a); // 11
console.log(b); // 10

🔹 Pre-increment (++a)

👉 Increase first, then use value

let c = 10;
let d = ++c;

console.log(c); // 11
console.log(d); // 11

🔹 Complex Expression (Very Good Example)
let e = 12;
let f = 15;
let g = 8;

let h = e++ + --f - g++ + ++e;

Step-by-step evaluation:
e++   → 12  (e becomes 13)
--f   → 14
g++   → 8   (g becomes 9)
++e   → 14  (e was 13)

h = 12 + 14 - 8 + 14
h = 32

🧠 Golden Rules (Write These)

a++ → use first, then increment

++a → increment first, then use

Unary operators need variables, not constants

Nested increment/decrement is not allowed

⭐ One-Line Summary

Unary operators work on a single operand and are commonly used for increment and decrement operations.