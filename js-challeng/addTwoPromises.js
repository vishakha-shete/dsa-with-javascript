async function addTwoPromises(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
}

// Testing
const p1 = new Promise(resolve => setTimeout(() => resolve(2), 200));
const p2 = new Promise(resolve => setTimeout(() => resolve(5), 300));

addTwoPromises(p1, p2).then(result => {
    console.log(result); // 7
});