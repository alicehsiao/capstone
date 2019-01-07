import mongoose from 'mongoose';
require('../models/Test');
const Test = mongoose.model('Test');

exports.getAllTests = async (req, res) => {
    const tests = await Test.find();
    res.status(200).json(tests);
};

exports.getSingleTest = async (req, res, next) => {
    const test = await Test.findOne({
        _id: req.params.id
    });
    if (!test) return next();
    res.status(200).json(test);
}