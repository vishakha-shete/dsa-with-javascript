// ✅ 🔹 Relation Between String and Integer using +

// string + string = string (concatination)

//1
let s1 = "hello"
let s2 = "world"
console.log(s1 + s2);
console.log(typeof (s1 + s2));

//output : helloworld
//         string


// string + integer = string

// 2

let a1 = 10;
let a2 = "20";
console.log(a1 + a2);
console.log(typeof (a1 + a2));

//output : 1020
//         string


// integer + integer = integer (arithmatic)

// 3

let temp1 = 20;
let temp2 = 30;
console.log(temp1 + temp2);
console.log(typeof (temp1 + temp2));

//output : 50
//         string


//4

let a = 10;
let b = 20;
console.log("the sum of " + a + " and " + b + " is " + (a + b));

//  otput : the sum of 10 and 20 is 30

//4

let c = 40;
let d = 10;
console.log(c + d + " is the sum of " + c + " and " + d);

//  otput : the sum of 10 and 20 is 30






// 🔹 Relation Between String and Integer using +

// string + string = string (concatenation)
let s3 = "hello";
let s4 = "world";

console.log(s1 + s2);           // helloworld
console.log(typeof (s1 + s2));  // string


// string + integer = string
let a3 = 10;
let a4 = "20";

console.log(a1 + a2);           // 1020
console.log(typeof (a1 + a2));  // string


// integer + integer = number (arithmetic addition)
let temp3 = 20;
let temp4 = 30;

console.log(temp1 + temp2);           // 50
console.log(typeof (temp1 + temp2));  // number


// string with numbers (left to right evaluation)
let e = 10;
let f = 20;

console.log("The sum of " + e + " and " + f + " is " + (e + f));
// Output: The sum of 10 and 20 is 30


// number + number first, then string
let c1 = 40;
let d2 = 10;

console.log(c1 + d2 + " is the sum of " + c1 + " and " + d2);
// Output: 50 is the sum of 40 and 10
