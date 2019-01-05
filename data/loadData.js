/* eslint-disable no-console */
const fs = require('fs'); // file system
const mongoose = require('mongoose'); // database
const path = require('path');
const dotenv = require('dotenv');
const FoodJoint = require('../models/FoodJoint');
const Activity = require('../models/Activity');
const Attraction = require('../models/Attraction');
const HikingTrail = require('../models/HikingTrail');
const BikePath = require('../models/BikePath');
const {
    formatActivityData, formatFoodJointData, formatHikingTrailData, formatBikePathData, formatAttractionData
} = require('./formatData');

dotenv.config({
    path: path.join(__dirname, '/../.env')
});

// Connect to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
});

// Read JSON
const foodJoints = JSON.parse(fs.readFileSync(__dirname + '/food.json', 'utf-8'));
const bikePaths = JSON.parse(fs.readFileSync(__dirname + '/bicyclepaths.json', 'utf-8'));
const activities = JSON.parse(fs.readFileSync(__dirname + '/activities.json', 'utf-8'));
const attractions = JSON.parse(fs.readFileSync(__dirname + '/attractions.json', 'utf-8'));
const hikingTrails = JSON.parse(fs.readFileSync(__dirname + '/hikingtrails.json', 'utf-8'));

// loadAllData
// used a try/catch block to handle any exceptions upon the loading of data
async function loadAllData() {
    try {
        const res = await formatFoodJointData(foodJoints);
        await FoodJoint.insertMany(res);

        const res2 = await formatBikePathData(bikePaths);
        await BikePath.insertMany(res2);
        
        const res3 = await formatAttractionData(attractions);
        await Attraction.insertMany(res3);

        const res4 = await formatActivityData(activities);
        await Activity.insertMany(res4);

        const res5 = await formatHikingTrailData(hikingTrails);
        await HikingTrail.insertMany(res5);

        console.log('👍 Finished Loading Data!');
        process.exit();
    } catch (e) {
        console.log('👎 Be sure to drop existing database first: run \n\n\t npm run wipe\n\n\n');
        console.log(e);
        process.exit();
    }
}

// // deleteAllData
async function deleteAllData() {
    console.log('😢 Goodbye Data...');
    await FoodJoint.deleteMany();
    await BikePath.deleteMany();
    await Attraction.deleteMany();
    await Activity.deleteMany();
    await HikingTrail.deleteMany();
    console.log('Data deleted. To load sample data, run \n\n\t npm run seed\n\n');
    process.exit();
}

// // process.argv is an array of all arguments in node invocation
if (process.argv.includes('--delete')) {
    deleteAllData();
} else {
    loadAllData();
}