//Q.6)shop discount (discription on graphic)

// |  Amount         |  Discount   |
// |-------------------------------|
// |  0 - 5000       |     0%      |
// |  5001-7000      |     5%      |
// |  7001-9000      |     10%     |
// |  more than 9000 |     20%     |

// 1st apporoach

const prompt = require("prompt-sync")();

let amount = Number(prompt("Enter the amount of shopping"));

payableAmount = 0;
if (amount > 0 && amount <= 5000) {
    payableAmount = amount;
} else if (amount > 5001 && amount <= 7000) {
    payableAmount = amount - (5 * amount) / 100;
}
else if (amount > 7001 && amount <= 9000) {
    payableAmount = amount - (10 * amount) / 100;
} else {
    payableAmount = amount - (20 * amount) / 100;
}

console.log(`with discount your payable-amount is : ${payableAmount}`);