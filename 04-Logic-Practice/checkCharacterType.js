function checkCharacter(char) {
    if (char >= 'A' && char <= 'Z') {
        console.log("Uppercase Letter");
    } else if (char >= 'a' && char <= 'z') {
        console.log("Lowercase Letter");
    } else {
        console.log("Not a letter");
    }
}

checkCharacter('G');


// output : Uppercase Letter
