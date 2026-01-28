function checkDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " is divisible by both 3 and 5");
    } else {
        console.log(num + " is not divisible by both 3 and 5");
    }
}

checkDivisible(15);

// output : 15 is divisible by both 3 and 5