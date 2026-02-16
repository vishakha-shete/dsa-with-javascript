function expect(val) {
    return {
        toBe(val2) {
            if (val === val2) return true;
            throw new Error("Not Equal");
        },
        notToBe(val2) {
            if (val !== val2) return true;
            throw new Error("Equal");
        }
    };
}

//Some Tests ----

try {
    console.log(expect(5).toBe(5));        // true
    console.log(expect(5).notToBe(null));  // true
    console.log(expect(5).toBe(null));     // Error
} catch (err) {
    console.log(err.message);
}
