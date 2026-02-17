function createCounter(init) {
    let current = init;

    return {
        increment: function() {
            current++;
            return current;
        },
        decrement: function() {
            current--;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

// Testing
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
