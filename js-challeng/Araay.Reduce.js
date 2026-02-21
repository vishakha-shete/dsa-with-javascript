function reduce(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example 1
const sum = function (accum, curr) {
    return accum + curr;
};

console.log(reduce([1, 2, 3, 4], sum, 0));
// Output: 10

// Example 2
const multiplyAdd = function (accum, curr) {
    return accum + curr * curr;
};

console.log(reduce([1, 2, 3, 4], multiplyAdd, 100));
// Output: 130