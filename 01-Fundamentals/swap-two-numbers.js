// ✅ Q6. Swap two numbers (without third variable)

// 1)
 let a = 10;
 let b = 20;

 a = a + b;
 b = a - b;
 a = a - b;

 console.log(a,b);

// output : 20 10

// 2)

let c = 30;
let d = 50;

c = c + d;
d = c - d;
c = c - d;

console.log(c,d);

// output : 50 30


//3)

let e = 40;
let f = 50;
[e,f]=[f,e];
console.log(f,e);

// output : 50 40



