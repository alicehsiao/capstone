const mongoose = require('mongoose');
require('../models/FoodJoint');
const FoodJoint = mongoose.model('FoodJoint');

exports.getAllFoodJoints = async (req, res) => {
    const foodJoints = await FoodJoint.find();
    res.status(200).json(foodJoints);
};

exports.getSingleFoodJoint = async (req, res, next) => {
    const foodJoint = await FoodJoint.findOne({
        _id: req.params.id
    });
    if (!foodJoint) return next();
    res.status(200).json(foodJoint);
}