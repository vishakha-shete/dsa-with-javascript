function compose(functions) {
    return function (x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
}

// Example 1
const functions1 = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

const composed1 = compose(functions1);
console.log(composed1(4));
// 65

// Example 2
const functions2 = [];
const composed2 = compose(functions2);
console.log(composed2(42));
// 42