// 1)
let a = 10
let b = 5

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}


// 2)

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

if (num1 > num2) {
    console.log(num1 + " is greater");
} else if (num2 > num1) {
    console.log(num2 + " is greater");
} else {
    console.log("Both numbers are equal");
}
