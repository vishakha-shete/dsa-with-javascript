function calculateCompoundInterest(P, r, t, n) {
    const A = P * Math.pow((1 + r / n), n * t);
    const CI = A - P;
    return CI.toFixed(2);
}

console.log(calculateCompoundInterest(1000, 0.5, 10, 4));
// output : 110199.00

console.log(calculateCompoundInterest(1500, 0.04, 6, 2)); 
// output : 402.36

