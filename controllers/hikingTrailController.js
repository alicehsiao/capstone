import mongoose from 'mongoose';
require('../models/HikingTrail');
const HikingTrail = mongoose.model('HikingTrail');

exports.getAllHikingTrails = async (req, res) => {
    const hikingTrails = await HikingTrail.find();
    res.status(200).json(hikingTrails);
};

exports.getSingleHikingTrail = async (req, res, next) => {
    const hikingTrail = await HikingTrail.findOne({
        _id: req.params.id
    });
    if (!hikingTrail) return next();
    res.status(200).json(hikingTrail);
};