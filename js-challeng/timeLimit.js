function timeLimit(fn, t) {
    return async function (...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    }
}

// Example
const slowFn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited = timeLimit(slowFn, 50);

limited(5)
    .then(console.log)
    .catch(console.log);  // Time Limit Exceeded