// Unary operators

// Post-increment
let a = 10;
let b = a++;
console.log(a); // 11
console.log(b); // 10

// Pre-increment
let c = 10;
let d = ++c;
console.log(c); // 11
console.log(d); // 11

// Complex expression
let e = 12;
let f = 15;
let g = 8;
let h = e++ + --f - g++ + ++e;
console.log(h); // 32

// Invalid operations (errors)
// let x = 10++;
// ++(++a);

// Unary with boolean
let i = true;
console.log(i++); // 1

let j = false;
console.log(j++); // 0
