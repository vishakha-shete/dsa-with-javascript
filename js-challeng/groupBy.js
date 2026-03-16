Array.prototype.groupBy = function (fn) {
    const result = {};

    for (const item of this) {
        const key = fn(item);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item);
    }

    return result;
};

const arr = [1, 2, 3, 4, 5];

const grouped = arr.groupBy(x => x % 2 === 0 ? "even" : "odd");

console.log(grouped);