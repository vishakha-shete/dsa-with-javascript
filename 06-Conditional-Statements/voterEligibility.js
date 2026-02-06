const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));

if (age >= 18) {
    console.log(name + " is eligible to vote.");
} else {
    console.log(name + " is not eligible to vote.");
}
