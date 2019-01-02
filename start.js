// database
// const mongoose = require('mongoose');

// import environmental variables from our .env file
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';


const app = express();
const PORT = 3600;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.get("/", (req, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`))

// console.log('Hello');

// const test = [1, 2, 3]

// const redo = [...test, 4]
// console.log(redo);

// console.log(process.env.DB_HOST);

export default app;