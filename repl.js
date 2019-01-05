/* eslint-disable no-console */
const repl = require("repl");
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const HikingTrail = require('./models/HikingTrail');
const Activity = require('./models/Activity');
const BikePath = require('./models/BikePath');
const Attraction = require('./model/Attraction');
const FoodJoint = require('./models/FoodJoint');

dotenv.config({
    path: path.join(__dirname, '.env')
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(`🙅‍ 🚫 🙅‍ 🚫 🙅 ➡ ${error.message} `);
});

db.once('open', function () {
    const replServer = repl.start({
        prompt: "my-app > ",
    });

    replServer.context.mongoose = mongoose;
    replServer.context.foo = 'bar';
    replServer.context.HikingTrail = HikingTrail;
    replServer.context.FoodJoint = FoodJoint;
    replServer.context.Attraction = Attraction;
    replServer.context.Activity = Activity;
    replServer.context.BikePath = BikePath;
});

// Ex: using Mongoose to query the database

// HikingTrail.where('distanceKM').gte(4).exec(function (err, result) {
//     console.log(result)
// });