const emitter = new EventEmitter();

const sub1 = emitter.subscribe("event1", (x) => x + 1);
const sub2 = emitter.subscribe("event1", (x) => x + 2);

console.log(emitter.emit("event1", [5])); // [6, 7]

sub1.unsubscribe();

console.log(emitter.emit("event1", [5])); // [7]