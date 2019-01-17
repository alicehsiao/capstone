const mongoose = require('mongoose');
require('../models/Activity');
const Activity = mongoose.model('Activity');
const moment = require('moment');

exports.getAllActivities = async (req, res) => {
    const activities = await Activity.find({
        start: {
            $gte: moment().toDate()
        }
    }).sort({
        start: 1
    });
    res.status(200).json(activities);
};

exports.getSingleActivity = async (req, res, next) => {
    const activity = await Activity.findOne({
        _id: req.params.id
    });
    if (!activity) return next();
    res.status(200).json(activity);
};