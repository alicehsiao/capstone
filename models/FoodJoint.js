const mongoose = require('mongoose');

const foodJointSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this food joint!'
    },
    region: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number]
        },
        address: {
            type: String
        }
    },
    intl_phone: {
        type: String,
        trim: true
    },
    photos: [
        { type: String }
    ],
    hours: [
        { type: String }
    ],
    place_id: {
        type: String
    }
});

module.exports = mongoose.model('FoodJoint', foodJointSchema);