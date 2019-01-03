const mongoose = require('mongoose');

const hikingTrailsSchema = new mongoose.Schema({
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
    }
});

const HikingTrail = mongoose.model('HikingTrail', hikingTrailsSchema);
module.exports = HikingTrail;