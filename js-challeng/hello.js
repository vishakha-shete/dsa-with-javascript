function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Testing
const f = createHelloWorld();

console.log(f());          // Hello World
console.log(f(1, 2, 3));   // Hello World
console.log(f(null));      // Hello World


// output :
// Hello World
// Hello World
// Hello World
