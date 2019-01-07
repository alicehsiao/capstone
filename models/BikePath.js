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
    place_id: {
        type: String
    }
});

const BikePath = mongoose.model('BikePath', bikePathSchema);
module.exports = BikePath;