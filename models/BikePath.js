const mongoose = require('mongoose');

const bikePathSchema = new mongoose.Schema({
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

const BikePath = mongoose.model('BikePath', bikePathSchema);
module.exports = BikePath;