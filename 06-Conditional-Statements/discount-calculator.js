// Day 28 - Discount Calculator

function calculateFinalAmount(amount) {
    if (amount > 9000) {
        return amount - amount * 0.20;
    }
    else if (amount > 7000) {
        return amount - amount * 0.10;
    }
    else if (amount > 5000) {
        return amount - amount * 0.05;
    }
    else {
        return amount;
    }
}

// Test Cases
console.log(calculateFinalAmount(10000)); // 8000
console.log(calculateFinalAmount(8000));  // 7200
console.log(calculateFinalAmount(6000));  // 5700
console.log(calculateFinalAmount(4000));  // 4000
