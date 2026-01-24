// Swap two numbers without using a third variable

function swapNumbers(a, b) {
    console.log("Before Swap:", a, b);

    // Swapping logic
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("After Swap:", a, b);
}

// Example values
swapNumbers(5, 10);

// Output
// Before Swap: 5 10
// After Swap: 10 5