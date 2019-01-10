const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this food joint!'
    },
    engName: {
        type: String
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
    place_id: {
        type: String
    }
});

module.exports = mongoose.model('Test', testSchema);