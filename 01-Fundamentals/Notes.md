✅ Q1. Sum of Two Integers
📌 Definition

An integer is a whole number without a decimal point.
Examples: -3, -1, 0, 5, 10

📌 Program to find the sum of two integers
let a = 10;
let b = 20;
console.log(a + b);

🧠 Explanation
1) a and b are integer variables
2) + is the addition operator
3) console.log(a + b) prints the sum


🖥 Output
30

⭐ Simple Note 
*) “Integers are whole numbers, and JavaScript uses the + operator to add two integers.”


🔹 Relation Between String and Integer using +
📌 Key Concept

When the + operator is used between two strings, it performs string concatenation (joins the strings).

❌ Small mistakes in your example

typeof(s1 + s2) does not print the text

It prints the data type

"hello" + "world" becomes "helloworld" (no space unless added)

✅ Correct & Clean Example
let s1 = "hello";
let s2 = "world";

console.log(s1 + s2);           // helloworld
console.log(typeof (s1 + s2));  // string

🧠 If you want space between words
console.log(s1 + " " + s2); // hello world

⭐ Important Rule (Write This)

If at least one operand of + is a string, JavaScript treats the result as a string (concatenation).

📌 String + Integer Example
let a = "10";
let b = 20;

console.log(a + b);          // "1020"
console.log(typeof (a + b)); // string

🧠 One-Line Summary

“The + operator concatenates when strings are involved; otherwise, it adds numbers.

🔹 Type Coercion in JavaScript

📌 Definition
Type coercion is the automatic conversion of one data type into another by JavaScript during operations.

In simple words:
👉 JavaScript changes data types automatically when needed.

🔁 Types of Type Coercion

There are two types:

1️⃣ Implicit Type Coercion (Automatic)

JavaScript does it by itself.

2️⃣ Explicit Type Coercion (Manual)

We convert the type manually.