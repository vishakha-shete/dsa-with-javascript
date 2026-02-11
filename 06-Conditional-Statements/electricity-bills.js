// Day 29 - Calculate Electricity Bill Based on Units

const prompt = require("prompt-sync")();

function calculateElectricityBill(unit) {
    unit = Number(unit);

    let bill = 0;

    if (unit <= 100) {
        bill = unit * 4.2;
    }
    else if (unit <= 200) {
        bill = (100 * 4.2) + (unit - 100) * 6;
    }
    else if (unit <= 400) {
        bill = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
    }
    else {
        bill = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13;
    }

    return bill.toFixed(1);
}

// Take input from user
let units = prompt("Enter units consumed: ");
let result = calculateElectricityBill(units);

console.log("Total Electricity Bill:", result);


// output: Enter units consumed: 78
//         Total Electricity Bill: 327.6

