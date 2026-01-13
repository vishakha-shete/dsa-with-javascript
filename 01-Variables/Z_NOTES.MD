🔹 const in JavaScript

📌 Definition
const is used to declare a constant variable.
The value of a const variable cannot be changed once it is assigned.

📌 Example
const temp = 10;
console.log(temp);


🧠 Explanation

const → keyword used to declare a constant

temp → variable name

10 → value assigned to the variable

console.log(temp) → prints the value of temp

Output:

10


⚠️ Important Rules of const

1) A const variable must be initialized at the time of declaration
❌ const x; (Not allowed)

2) The value cannot be reassigned

const temp = 10;
temp = 20; // ❌ Error


3) const has block scope


✅ When to use const
💡 Simple Line to Remember

“Use const when you don’t want the value to change.



🔹 let in JavaScript

📌 Definition

“let is used to declare a variable whose value can be reassigned.
In most DSA problems, let is commonly used because values change during execution.”

📌 Example
let temp = 10;
temp = 20;
console.log(temp);

🧠 Explanation

let → keyword to declare a variable

temp → variable name

Value is first 10, then reassigned to 20

Output will be: 20


✅ Key Points of let

1) Reassignment is allowed

2) Has block scope

3) Cannot be redeclared in the same scope

let x = 5;
let x = 10; // ❌ Error

💡 When to use let

1) When value needs to change

2) Counters, loops, updates in DSA problems

Example:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

⭐ Simple Line to Remember

“Use let when the value can change.”



🔹 var in JavaScript
❌ Your sentence (needs correction)

“in var we can accessed a value before initialization”

✅ Correct version (Notebook-ready)

“In JavaScript, variables declared with var can be accessed before initialization, but their value will be undefined.”

🧠 Why this happens? (Hoisting)

1) var declarations are hoisted to the top of their scope

2) Only the declaration is hoisted, not the value

📌 Example
console.log(x);
var x = 10;

🖥 Output
undefined

🔍 What actually happens internally
var x;        // hoisted
console.log(x);
x = 10;

❌ Compare with let and const
console.log(y);
let y = 10;   // ❌ ReferenceError


***) let and const are also hoisted, but they are in the Temporal Dead Zone (TDZ).

⚠️ Important Notes about var

1) Function scoped (not block scoped)

2) Allows redeclaration

3) Can cause unexpected bugs

4) Not recommended in modern JavaScript

⭐ One-Line Summary

“var is function-scoped and hoisted, which allows access before initialization with an undefined value.”


📊 Comparison: var vs let vs const

| Feature                        | `var`                            | `let`          | `const`               |
| ------------------------------ | -------------------------------- | -------------  | --------------------  |
| Introduced in                  | ES5                              | ES6 (2015)     | ES6 (2015)            |
| Scope                          | Function-scoped                  | Block-scoped   | Block-scoped          |
| Hoisting                       | Yes (initialized as `undefined`) | Yes (TDZ*)     | Yes (TDZ*)            |
| Access before declaration      | Yes (`undefined`)                | ❌ Error       | ❌ Error             |
| Reassignment                   | ✅ Allowed                       | ✅ Allowed     | ❌ Not allowed       |
| Redeclaration                  | ✅ Allowed                       | ❌ Not allowed | ❌ Not allowed       |
| Must initialize at declaration | ❌ No                            | ❌ No          | ✅ Yes               |
| Block behavior                 | ❌ Ignored                       | ✅ Respected   | ✅ Respected         |
| Usage in DSA                   | ❌ Avoid                         | ✅ Mostly used | ✅ Used for constants|
| Modern JS recommendation       | ❌ Not recommended               | ✅ Recommended | ✅ Recommended       |


TDZ (Temporal Dead Zone):
let and const exist but cannot be accessed before declaration.

🧠 One-Line Summary (Very Important)

var → old, function-scoped, risky ❌
let → changeable values, best for DSA loops & logic ✅
const → fixed values, safest choice ✅

⭐ Interview Tip
“In modern JavaScript, we avoid var and use let for reassignable values and const for constants.”