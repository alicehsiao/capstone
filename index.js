require('dotenv').config();

console.log('Hello');

const test = {
    name: "Alice"
}

const redo = { ...test }
redo["age"] = 31;
console.log(redo);

console.log(process.env.DB_HOST);