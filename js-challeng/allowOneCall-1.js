function once(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}

// Example 1
const add = (a, b, c) => a + b + c;
const onceAdd = once(add);

console.log(onceAdd(1, 2, 3)); // 6
console.log(onceAdd(2, 3, 6)); // undefined


// Example 2
const multiply = (a, b, c) => a * b * c;
const onceMultiply = once(multiply);

console.log(onceMultiply(5, 7, 4)); // 140
console.log(onceMultiply(2, 3, 6)); // undefined