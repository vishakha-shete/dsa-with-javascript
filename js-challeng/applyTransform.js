function map(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// Testing

// Example 1
const plusOne = function (n) {
    return n + 1;
};

console.log(map([1, 2, 3], plusOne));
// [2, 3, 4]

// Example 2
const plusIndex = function (n, i) {
    return n + i;
};

console.log(map([1, 2, 3], plusIndex));
// [1, 3, 5]

// Example 3
const constant = function () {
    return 42;
};

console.log(map([10, 20, 30], constant));
// [42, 42, 42]
