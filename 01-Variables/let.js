let temp = 10;
temp =20;
console.log(temp);

// ✅ Q1. Declare and print
// Declare a variable using let to store your city and print it

let city = 'Akola' ;
console.log(city);

// ✅ Q2. Reassign the value
// Store a number in let, change its value, and print the updated value

let value = 10;
value = 20;
console.log(value);    

// 👉 Question: Why will this code give an error?
//let x = 10;
let x = 20;
console.log(x);
// “let cannot be redeclared in the same scope.”


// ✅ Q4. let in loop (very important)
// Print numbers from 1 to 5 using let in a loop

for(let i=1;i<6;i++){
    console.log(i);
}


// 👉 What will be the output?

let sum = 0;
sum = sum + 5;
sum = sum + 10;
console.log(sum);
// output=15


// 🌟 Clean Final Version

// let example
let temp1 = 10;
temp1 = 20;
console.log(temp1);

// Q1
let city1 = 'Akola';
console.log(city1);

// Q2
let value1 = 10;
value1 = 20;
console.log(value1);

// Q3 - redeclaration error
// let x = 10;
// let x = 20; ❌ Error

// Q4
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Bonus
let sum1 = 0;
sum1 += 5;
sum1 += 10;
console.log(sum1); // 15
