console.log(temp);
var temp = 10;
// “var is hoisted, so the variable exists before initialization with value undefined.”


// ✅ Q1. Declare and print
// Declare a variable using var to store your name and print it

var user = 'vishakha';
console.log(user);

// ❓ Q2. Access before initialization (Hoisting)
//yess var is function-scoped and hoisted which allows
//access before initiallization with an undefined value

console.log(x);
var x = 10;
// 👉 What will be the output and why?
//undefined
// “var is function-scoped and hoisted, which allows access before initialization with an undefined value.”

var a = 5;
var a = 15;
console.log(a);
//output:15
//yess “var allows redeclaration in the same scope.”

// ⚠️ Q4. Function scope vs block scope

if (true) {
    var num = 100;
  }
  console.log(num);

//   👉 Will this work? Why?
//yess “var is function-scoped, not block-scoped.”


// 🔁 Q5. var in loop
for (var i = 1; i <= 3; i++) {
    console.log(i);
  }
  console.log(i);
//   👉 What will be printed and why?
//1
//2
//3
//4
//beacause “var is function-scoped, so i is accessible outside the loop.”


// ⭐ Bonus: Unexpected behavior
var x = 1;
if (true) {
  var x = 2;
}
console.log(x);
//output: 2
// “var does not respect block scope, so the same variable is reused.”




// 🌟 Clean Final Notes

// Hoisting
console.log(temp); // undefined
var temp = 10;


// Redeclaration
var a = 5;
var a = 15;
console.log(a); // 15


// Function scope
if (true) {
  var num = 100;
}
console.log(num); // 100


// Loop
for (var i = 1; i <= 3; i++) {
  console.log(i);
}
console.log(i); // 4


// Unexpected behavior
var x = 1;
if (true) {
  var x = 2;
}
console.log(x); // 2

