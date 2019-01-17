const mongoose = require('mongoose');
require('../models/Attraction');
const Attraction = mongoose.model('Attraction');

exports.getAllAttractions = async (req, res) => {
    const attractions = await Attraction.find();
    res.status(200).json(attractions);
};

exports.getSingleAttraction = async (req, res, next) => {
    const attraction = await Attraction.findOne({
        _id: req.params.id
    });
    if (!attraction) return next();
    res.status(200).json(attraction);
};