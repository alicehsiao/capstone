/* eslint-disable no-console */
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
// const FoodJoint = require('../models/FoodJoint');
// const Activity = require('../models/Activity');
const Attraction = require('../models/Attraction');
// const HikingTrail = require('../models/HikingTrail');
// const BikePath = require('../models/BikePath');
// const Test = require('../models/Test');
const {
    Translate
} = require('@google-cloud/translate');
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
const projectId = 'off-to-taiwan-6e73d';

// Instantiates a client
const translate = new Translate({
    projectId: projectId,
});

// Update Single Document
// translate
//     .translate("2018鯤鯓王平安鹽祭", "en")
//     .then(results => {
//         const translation = results[0];

//         Activity.findOneAndUpdate({
//                 name: "2018鯤鯓王平安鹽祭"
//             }, {
//             "$set": {
//                 "engName": translation
//             }
//         }).exec();

//         console.log(`Text: 2018鯤鯓王平安鹽祭`);
//         console.log(`Translation: ${translation}`);
//     })
//     .catch(err => {
//         console.error('ERROR:', err);
//     });


Attraction.find({})
    .then(places => {
        places.forEach(function (doc) {

            const text = doc.name;
            const target = 'en';

            translate
                .translate(text, target)
                .then(results => {
                    const translation = results[0];

                    Attraction.updateOne({
                        "_id": doc._id
                    }, {
                        "$set": {
                            "engName": translation
                        }
                    }).exec();

                    console.log(`Text: ${text}`);
                    console.log(`Translation: ${translation}`);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });
        })
    });


