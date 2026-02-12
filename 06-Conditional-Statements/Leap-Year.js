// Q.5)accept a year and check it if a leap year or not(google to find out whats a leap year)

// a year should be multiply by 400
//a year should be multiply by 4 but not by  100

const prompt = require("prompt-sync")();

let year = Number(prompt("Enter a Year"));

if(year % 4 ==0 && year % 100 !=0){
    console.log("leap year");
}else if(year % 400 ==0 ){
    console.log("leap year");
}else{
    console.log("no leap year");
}