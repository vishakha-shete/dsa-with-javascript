// Q . 3) accept name and age from the user.check if the user is valid voter or not

const prompt = require("prompt-sync")();

let user = "vishakha";
let age = Number(prompt("Enter a number"))

if(age>=18){
    console.log(`${user} is valid voter`);
}else{
    console.log(`${user} is not a valid voter`);
}
