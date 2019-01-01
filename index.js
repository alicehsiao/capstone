console.log('Hello');

const test = {
    name: "Alice"
}

const redo = { ...test }
redo["age"] = 31;
console.log(redo);
