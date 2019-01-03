/* eslint-disable no-console */

import app from './app'; // middleware
import mongoose from 'mongoose'; // database
import path from 'path'; 
import dotenv from 'dotenv'; // env variables
dotenv.config({
    path: path.join(__dirname, '.env')
});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
// mongoose uses native promises in v5
// mongoose.Promise = global.Promise
mongoose.connection.on('error', (error) => {
    console.error(`🙅‍ 🚫 🙅‍ 🚫 🙅 ➡ ${error.message} `)
});

// Start the app
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});