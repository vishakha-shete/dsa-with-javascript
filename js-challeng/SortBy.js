function sortBy(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}

// Test
const arr = [5, 4, 1, 2, 3];

const result = sortBy(arr, x => x);

console.log(result);

//1
const arr1 = [{x:1}, {x:0}, {x:-1}];

const result1 = sortBy(arr1, d => d.x);

console.log(result1);