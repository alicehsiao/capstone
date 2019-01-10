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

// Your Google Cloud Platform project ID
// const projectId = 'off-to-taiwan';

// Instantiates a client
// const translate = new Translate({
//     projectId: projectId,
// });

// Test.find({})
//     .then(places => {
//         places.forEach(function (doc) {

//             const text = doc.name;
//             const target = 'en';

//             translate
//                 .translate(text, target)
//                 .then(results => {
//                     const translation = results[0];

//                     Test.updateOne({
//                         "_id": doc._id
//                     }, {
//                         "$set": {
//                             "engName": translation
//                         }
//                     }).exec();

//                     console.log(`Text: ${text}`);
//                     console.log(`Translation: ${translation}`);
//                 })
//                 .catch(err => {
//                     console.error('ERROR:', err);
//                 });
//         })
//     });
        

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