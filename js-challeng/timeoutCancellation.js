function cancellable(fn, args, t) {
    const timeoutId = setTimeout(() => {
        console.log("Function executed:", fn(...args));
    }, t);

    return function cancelFn() {
        clearTimeout(timeoutId);
        console.log("Execution cancelled");
    };
}

// Example
const fn = (x) => x * 5;

const cancel = cancellable(fn, [2], 3000);

// Try cancelling after 1 second
setTimeout(() => {
    cancel();
}, 1000);