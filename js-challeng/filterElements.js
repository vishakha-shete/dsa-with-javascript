function filter(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Testing

// Example 1
const greaterThan10 = function (n) {
    return n > 10;
};

console.log(filter([0, 10, 20, 30], greaterThan10));
// [20, 30]

// Example 2
const firstIndex = function (n, i) {
    return i === 0;
};

console.log(filter([1, 2, 3], firstIndex));
// [1]

// Example 3
const plusOne = function (n) {
    return n + 1;
};

console.log(filter([-2, -1, 0, 1, 2], plusOne));
// [-2, -1, 1, 2]
