/* eslint-disable no-console */

import mongoose from 'mongoose'; // database
import path from 'path'; 
import dotenv from 'dotenv'; // env variables
dotenv.config({
    path: path.join(__dirname, '.env')
});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on('error', (error) => {
    console.error(`🙅‍ 🚫 🙅‍ 🚫 🙅 ➡ ${error.message} `)
});

// import models
require('./models/FoodJoint');


// Start the app
const app = require('./app');
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// Start script
// "start": "nodemon --exec babel-node start.js"