const prompt = require("prompt-sync")();

let num = Number(prompt("Enter an integer: "));

if (num) {
    console.log("True (Truthy value)");
} else {
    console.log("False (Falsy value)");
}
