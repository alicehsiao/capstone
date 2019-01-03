import mongoose from 'mongoose';
require('../models/Activity');
const Activity = mongoose.model('Activity');

exports.getAllActivities = async (req, res) => {
    const activities = await Activity.find();
    res.status(200).json(activities);
};

exports.getSingleActivity = async (req, res, next) => {
    const activity = await Activity.findOne({
        _id: req.params.id
    });
    if (!activity) return next();
    res.status(200).json(activity);
};