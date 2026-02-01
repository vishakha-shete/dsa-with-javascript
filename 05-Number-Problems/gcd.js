function findGCD(a, b) {
    let gcd = 1;

    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    console.log("GCD:", gcd);
}

findGCD(12, 18);


// output : GCD: 6
