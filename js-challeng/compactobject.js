const obj = {
    a: null,
    b: [false, 1],
    c: {
        d: 0,
        e: 2
    }
};

console.log(compactObject(obj));


  // Output: { b: [1], c: { e: 2 } }