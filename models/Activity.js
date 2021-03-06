const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this activity!'
    },
    engName: {
        type: String
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    participation: {
        type: String,
        trim: true
    },
    region: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    website: {
        type: String,
        trim: true
    },
    picture1: {
        type: String,
        trim: true
    },
    picdescribe1: {
        type: String,
        trim: true
    },
    place_id: {
        type: String
    },
    engDescription: {
        type: String
    }
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
