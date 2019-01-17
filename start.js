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
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});