class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key).expiry > now;

        this.cache.set(key, {
            value,
            expiry: now + duration
        });

        return exists;
    }

    get(key) {
        const item = this.cache.get(key);

        if (!item || item.expiry <= Date.now()) return -1;

        return item.value;
    }

    count() {
        const now = Date.now();
        let count = 0;

        for (let item of this.cache.values()) {
            if (item.expiry > now) count++;
        }

        return count;
    }
}

const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 100));
console.log(cache.get(1));
console.log(cache.count());