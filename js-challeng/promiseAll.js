function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

const functions = [
    () => Promise.resolve(3),
    () => new Promise(res => setTimeout(() => res(5), 100)),
    () => Promise.resolve(10)
];

promiseAll(functions).then(console.log);