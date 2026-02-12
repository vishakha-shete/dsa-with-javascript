// Q.7)bill bill (description on graphics)

// ! Unit                 !   price          !
// !-----------------------------------------!
// ! up to 100            !  Rs. 4.2 / Unit  !
// ! 101 - 200            !  Rs. 6 / Unit    !
// ! 201 - 400            !  Rs. 8 / Unit    !
// ! more than 400        !  Rs. 13 / Unit   !

//topsown approach and bottom-up approach


// 550
// (100 * 4.3)+(100*6)+(200*8)+(150*13)

const prompt = require("prompt-sync")();

let Unit = Number(prompt("Enter Unit"))
let amount = 0;

if (Unit > 0 && Unit <= 100){
    console.log(Unit * 4.2);
} else if (Unit>100 && Unit <= 200) {
    console.log((100 * 4.2) + (Unit-100)*6);
} else if (Unit>200 && Unit <=400) {
    console.log((100*4.2) + (100*6) + (Unit-200)*8);
} else {
    console.log((100*4.2) + (100*6) + (200*8) + (Unit-400)*13);
}