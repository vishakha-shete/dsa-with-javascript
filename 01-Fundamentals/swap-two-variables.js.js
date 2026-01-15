// 🔄 Swap Two Variables in JavaScript (3 Methods)

// ✅ Method 1: Using a Third Variable (Most Basic & Clear)

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a, b); 

// output : 20 10

// ✅ Method 2: Without Using Third Variable (Arithmetic Method)
let c = 10;
let d = 20;

c = c + d;
d = c - d;
c = c - d;

console.log(c, d); 

//output : 20 


// ✅ Method 3: Using Array Destructuring (Modern JavaScript ⭐)
let e = 10;
let f = 20;

[e, f] = [f, e];

console.log(e, f); 

//output : 20 10