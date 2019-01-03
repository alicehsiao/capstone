const mongoose = require('mongoose');

const hikingTrailsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for this hiking trail!'
    },
    distanceKM: {
        type: Number,
        trim: true
    },
    region: {
        type: String,
        trim: true
    }
});

// Define our indexes, for faster reads
// hikingTrailsSchema.index({
//     name: 'text',
//     description: 'text'
// });

const HikingTrail = mongoose.model('HikingTrail', hikingTrailsSchema);
module.exports = HikingTrail;