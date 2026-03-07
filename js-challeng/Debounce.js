function debounce(fn, t) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

const log = debounce((msg) => {
    console.log(msg);
}, 1000);

log("Hello");
log("Hello World");
log("Final Message");