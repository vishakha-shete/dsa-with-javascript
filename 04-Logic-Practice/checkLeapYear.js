function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is Not a Leap Year");
    }
}

checkLeapYear(2024);

// output : 2024 is a Leap Year
