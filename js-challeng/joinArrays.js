function join(arr1, arr2) {
    const map = new Map();

    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    for (let obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

// Test
const arr1 = [{ id: 1, x: 1 }, { id: 2, x: 9 }];
const arr2 = [{ id: 2, x: 5 }, { id: 3, x: 7 }];

console.log(join(arr1, arr2));