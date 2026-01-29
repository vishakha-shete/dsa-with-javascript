function countDigits(n) {
    let count = 0;
  
    while (n > 0) {
      count++;
      n = Math.floor(n / 10);
    }
  
    console.log("Number of digits:", count);
  }
  
  countDigits(56789);
  
//   output : Number of digits: 5
