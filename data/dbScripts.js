/* eslint-disable no-console */

const mongoose = require('mongoose'); 
const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config({
    path: path.join(__dirname, '../.env')
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(`🙅‍ 🚫 🙅‍ 🚫 🙅 ➡ ${error.message} `)
});

db.once('open', function () {
    // run code here
    db.close();
});

// via mongo shell
// 1) connect
// 2) show collections
// 3) activities = db.activities
// 4) run the script below
// activities.find({}).forEach(function (doc) {
//     activities.update({
//         "_id": doc._id
//     }, {
//         "$set": {
//             "start": new Date(doc.start),
//             "end": new Date(doc.end)
//         }
//     });
// });