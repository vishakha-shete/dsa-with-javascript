function argumentsLength(...args) {
    return args.length;
}

// Testing
console.log(argumentsLength(5));
// 1

console.log(argumentsLength({}, null, "3"));
// 3

console.log(argumentsLength());
// 0