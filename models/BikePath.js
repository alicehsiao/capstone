const mongoose = require('mongoose');

const bikePathSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this bike path!'
    },
    distanceKM: {
        type: Number,
        trim: true
    },
    region: {
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
    photos: [{
        type: String
    }],
    place_id: {
        type: String
    }
});

const BikePath = mongoose.model('BikePath', bikePathSchema);
module.exports = BikePath;