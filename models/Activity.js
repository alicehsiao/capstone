const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this activity!'
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
    location: {
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
        type: String,
        trim: true,
        required: true
    },
    end: {
        type: String,
        trim: true,
        required: true
    },
    website: {
        type: String,
        trim: true
    },
    longitude: {
        type: Number,
        trim: true,
        required: true
    },
    latitude: {
        type: Number,
        trim: true,
        required: true
    },
    picture1: {
        type: String,
        trim: true
    },
    picdescribe1: {
        type: String,
        trim: true
    }
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
