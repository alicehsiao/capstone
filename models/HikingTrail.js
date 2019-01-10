const mongoose = require('mongoose');

const hikingTrailsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this hiking trail!'
    },
    engName: {
        type: String
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

// Define our indexes, for faster reads
// hikingTrailsSchema.index({
//     name: 'text',
//     description: 'text'
// });

const HikingTrail = mongoose.model('HikingTrail', hikingTrailsSchema);
module.exports = HikingTrail;