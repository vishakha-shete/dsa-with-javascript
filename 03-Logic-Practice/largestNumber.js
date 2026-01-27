function findLargest(a, b, c) {
    let largest = a;
  
    if (b > largest) largest = b;
    if (c > largest) largest = c;
  
    console.log("Largest number is:", largest);
  }
  
  findLargest(10, 25, 17);
  