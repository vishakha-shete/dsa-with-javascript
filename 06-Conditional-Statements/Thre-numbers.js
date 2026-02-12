// Q . 4)accept three numbers and print the greatest among them 

let a = 20;
let b = 30;
let c = 40;

if (a > b && a > c){
    console.log(`${a}: a is greater than b and c`);
}else if(b > a && b >c){
    console.log(`${b}: b is greater than a and c`);
}else {
    console.log(`${c}: c is greater than a and b`);
}

// output : 40: c is greater than a and b