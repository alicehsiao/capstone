const mongoose = require('mongoose');
require('../models/BikePath');
const BikePath = mongoose.model('BikePath');

exports.getAllBikePaths = async (req, res) => {
    const bikePaths = await BikePath.find();
    res.status(200).json(bikePaths);
};

exports.getSingleBikePath = async (req, res, next) => {
    const bikePath = await BikePath.findOne({
        _id: req.params.id
    });
    if (!bikePath) return next();
    res.status(200).json(bikePath);
};