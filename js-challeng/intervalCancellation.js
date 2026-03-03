function cancellable(fn, args, t) {
    fn(...args); // immediate call

    const intervalId = setInterval(() => {
        console.log("Function executed:", fn(...args));
    }, t);

    return function cancelFn() {
        clearInterval(intervalId);
        console.log("Interval cancelled");
    };
}

// Example
const fn = (x) => x * 2;

const cancel = cancellable(fn, [4], 1000);

// Cancel after 5 seconds
setTimeout(() => {
    cancel();
}, 5000);