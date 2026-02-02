function findLCM(a, b) {
    let max = a > b ? a : b;
    let lcm = max;

    while (true) {
        if (lcm % a === 0 && lcm % b === 0) {
            console.log("LCM:", lcm);
            break;
        }
        lcm += max;
    }
}

findLCM(4, 6);

// output : LCM: 12

