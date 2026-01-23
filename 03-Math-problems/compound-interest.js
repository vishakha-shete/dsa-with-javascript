// Compound Interest Calculation
// Formula: CI = P * (1 + r / n)^(n * t) - P

function calculateCompoundInterest(p, r, t, n) {
    const amount = p * Math.pow(1 + r / n, n * t);
    const compoundInterest = amount - p;
  
    return compoundInterest.toFixed(2);
  }
  
  // Example 
  let principal = 1000;
  let rate = 0.5;   // already in decimal
  let time = 10;    // years
  let times = 4;    // compounded per year
  
  console.log(
    "Compound Interest =",
    calculateCompoundInterest(principal, rate, time, times)
  );
  

  output : 110199.00
