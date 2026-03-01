function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let start = Date.now();

sleep(2000).then(() => {
    console.log("Woke up after:", Date.now() - start, "ms");
});