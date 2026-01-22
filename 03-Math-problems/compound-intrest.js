// Q.1) calculate compound intrest 
//      cp=p(1+r/100)^(t)-p
//      Example : input => p= 10000,r=5,t=3,
//               output = 1576.25

const prompt = require("prompt-sync")();

// convert inputs to numbers
let p = Number(prompt("Enter principal: "));
let r = Number(prompt("Enter rate of interest: "));
let t = Number(prompt("Enter time: "));

// Compound Interest formula
let ci = p * Math.pow(1 + r / 100, t) - p;

console.log(ci.toFixed(2));

// output : 1576.25