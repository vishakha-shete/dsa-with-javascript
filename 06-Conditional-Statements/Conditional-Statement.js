let prompt = require('prompt-sync')();

// 1)

let age = Number(prompt("Enter your age"))

if (age >= 18) {
    console.log("user is valid for application");
} else {
    console.log("user is not valid for application");
}


// 2)

let marks = Number(prompt("Enter your marks"))

if (marks > 85 && marks <= 95) {
    console.log("excellent");
} else if (marks > 80 && marks <= 85) {
    console.log("very good");
} else if (marks > 70 && marks <= 80) {
    console.log(" good");
}else{
    console.log("fail");
}



