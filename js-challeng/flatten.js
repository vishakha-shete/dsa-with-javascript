function flat(arr, n) {
    let result = [];

    function helper(arr, depth) {
        for (let item of arr) {
            if (Array.isArray(item) && depth > 0) {
                helper(item, depth - 1);
            } else {
                result.push(item);
            }
        }
    }

    helper(arr, n);
    return result;
}

// Test
const arr = [1, [2, [3, [4]]]];
console.log(flat(arr, 2));