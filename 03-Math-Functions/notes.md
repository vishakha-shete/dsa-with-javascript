# 📘 JavaScript Math Functions & Problems

This section covers important **JavaScript Math functions** that are commonly used in  
**DSA, logic building, problem-solving, and interviews**.

---

## 🔹 Math.abs()
- **abs** stands for **absolute**
- Converts a **negative number into a positive number**
- Positive numbers remain unchanged

```js
Math.abs(-10); // 10
Math.abs(5);   // 5
🔹 Math.ceil()
Always rounds a number UP

Returns an integer

Used for:
Pagination

Minimum counts

Division-based problems

Math.ceil(4.1);   // 5
Math.ceil(-4.1);  // -4
🔹 Math.floor()
Always rounds a number DOWN

Returns the largest integer less than or equal to the number

Math.floor(4.9);   // 4
Math.floor(-4.1);  // -5
🔹 Math.round()
Rounds to the nearest integer

Decimal ≥ 0.5 → round up

Decimal < 0.5 → round down

Math.round(4.4);  // 4
Math.round(4.5);  // 5
Math.round(-3.5); // -3
🔹 Math.trunc()
Removes the decimal part

Does not round

Moves the number towards zero

Math.trunc(4.9);   // 4
Math.trunc(-4.9);  // -4
🔸 Difference Between floor, ceil & trunc
Function	4.9	-4.9
Math.floor()	4	-5
Math.ceil()	5	-4
Math.trunc()	4	-4
🔹 Math.pow()
Returns a number raised to a power

Math.pow(2, 3); // 8
Math.pow(5, 2); // 25
Alternative (Modern JS)
2 ** 3; // 8
🔹 Math.sqrt()
Returns the square root of a number

Math.sqrt(16); // 4
Math.sqrt(25); // 5
Math.sqrt(-4); // NaN
🔹 Math.cbrt()
Returns the cube root of a number

Math.cbrt(27); // 3
Math.cbrt(-8); // -2
🔹 Math.max()
Returns the largest value from given numbers

Math.max(10, 20, 5); // 20
🔹 Math.min()
Returns the smallest value from given numbers

Math.min(10, 20, 5); // 5
🔹 Math.random()
Generates a random number between 0 and 1

Math.random();
Random integer between min and max (inclusive)
Math.floor(Math.random() * (max - min + 1)) + min;
🚀 Why These Functions Matter
Used in DSA problems

Important for coding interviews

Useful in real-world applications

📌 Status
✅ Learning completed
✅ Practiced with problems
🚀 Moving towards advanced problem-solving
