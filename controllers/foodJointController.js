import mongoose from 'mongoose';
const FoodJoint = mongoose.model('FoodJoint');

exports.getAllFoodJoints = async (req, res) => {
    const foodJoints = await FoodJoint.find();
    res.json(foodJoints);
}