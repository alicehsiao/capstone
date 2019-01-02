/* eslint-disable no-console */

// import environmental variables from our .env file
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({
    path: path.join(__dirname, '.env')
});

// import middleware
import app from './app';

// import models

// database stuffs
// const mongoose = require('mongoose');

// Start the app
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});