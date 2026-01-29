function reverseNumber(n) {
    let reversed = 0;
  
    while (n > 0) {
      let digit = n % 10;
      reversed = reversed * 10 + digit;
      n = Math.floor(n / 10);
    }
  
    console.log("Reversed number:", reversed);
  }
  
  reverseNumber(1234);

  
//   output : Reversed number: 4321
