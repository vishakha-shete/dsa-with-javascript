function createCounter(n) {
    return function() {
        return n++;
    };
}

// Testing
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

// output :
// 10
// 11
// 12
