function simpleArraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// Example test
console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // 31
