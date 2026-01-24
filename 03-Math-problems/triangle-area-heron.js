// Calculate Area of Triangle using Heron's Formula

function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2; // semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area.toFixed(2);
}

// Example values
let side1 = 3;
let side2 = 4;
let side3 = 5;

console.log(
    "Area of Triangle =",
    calculateTriangleArea(side1, side2, side3)
);


// Output : Area of Triangle = 6.00