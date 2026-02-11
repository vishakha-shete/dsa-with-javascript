const prompt = require ("prompt-sync")();

// 1)

let age = Number(prompt("Enter your age"))

if (age>=18){
    console.log("user is valid voter");
}else{
    console.log("user is not valid voter");
}

// 2)

let marks = prompt("Enter your Marks")

if (marks>=85 && marks<=95){
    console.log("Excellent A+");
}else if(marks>=75 && marks<=85){
    console.log("veryyyy Good A");
}else if(marks>=65 && marks<=75){
    console.log("Good B+");
}else if(marks>=55 && marks>=65){
    console.log("PASS");
}else{
    console.log("FAIL");
}


