function isArmstrong(n) {
    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit * digit;
        n = Math.floor(n / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
}

isArmstrong(153);

// OUTPUT : Armstrong Number