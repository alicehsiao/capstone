/* eslint-disable no-console */

const mongoose = require('mongoose'); 
const path = require('path');
const dotenv = require('dotenv');
// const Test = require('../models/Test'); 
// const {Translate} = require('@google-cloud/translate');
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
    console.log('connected');
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
// db.your_collection.update({}, {
//     $set: {
//         "new_field": 1
//     }
// }, {
//     upsert: false,
//     multi: true
// })
// db.hikingtrails.update({}, {
//     $set: {
//         "heart": false
//     }
// }, {
//     multi: true
// })


// find all athletes that play tennis
// const query = Test.find();
// console.log(query);

// // selecting the 'name' and 'age' fields
// query.select('name age');

// // limit our results to 5 items
// query.limit(5);

// // sort by age
// query.sort({
//     age: -1
// });

// // execute the query at a later time
// query.exec(function (err, athletes) {
//     if (err) return handleError(err);
//     // athletes contains an ordered list of 5 athletes who play Tennis
// })

// Delete field in all documents in a collection
// db.activities.update({}, {
//     $unset: {
//         photos: 4,
//         location: 2
//     }
// }, {
//     multi: true
// });