/**
 * LeetCode 2623 - Memoize
 * Concept: Cache function results to avoid repeated computation
 */

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

module.exports = memoize;