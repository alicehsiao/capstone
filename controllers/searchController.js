const mongoose = require('mongoose');
require('../models/HikingTrail');
const HikingTrail = mongoose.model('HikingTrail');
require('../models/FoodJoint');
const FoodJoint = mongoose.model('FoodJoint');
require('../models/BikePath');
const BikePath = mongoose.model('BikePath');
require('../models/Attraction');
const Attraction = mongoose.model('Attraction');

exports.queryDatabase = async (req, res) => {
    let searchResults = [];

    const foodJoints = await FoodJoint.find({ $text: { $search: req.query.name }})
       .limit(10);
    foodJoints.forEach(foodJoint => searchResults.push(foodJoint));

    const hikingTrails = await HikingTrail.find({$text: {$search: req.query.name }})
       .limit(10);
    hikingTrails.forEach(hikingTrail => searchResults.push(hikingTrail));

    const bikePaths = await BikePath.find({$text: {$search: req.query.name }})
       .limit(10);
    bikePaths.forEach(path => searchResults.push(path));

    const attractions = await Attraction.find({$text: {$search: req.query.name }})
       .limit(10);
    attractions.forEach(attraction => searchResults.push(attraction));

    res.status(200).json(searchResults);
}