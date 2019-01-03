const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this attraction!'
    },
    status: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    introduction: {
        type: String,
        trim: true
    },
    region: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    longitude: {
        type: String,
        trim: true,
        required: true
    },
    latitude: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true
    },
    masstransit: {
        type: String,
        trim: true
    },
    ticketinfo: {
        type: String,
        trim: true
    },
    drivinginfo: {
        type: String,
        trim: true
    },
    parkinginfo: {
        type: String,
        trim: true
    },
    tourism: {
        type: String,
        trim: true
    }
});

const Attraction = mongoose.model('Attraction', attractionSchema);
module.exports = Attraction;