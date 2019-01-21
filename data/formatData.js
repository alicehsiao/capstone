/* eslint-disable no-console */
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config({
    path: path.join(__dirname, '/../.env')
});

async function formatFoodJointData(foodJoints) {
    for (let i = 0; i < foodJoints.length; i++) {
        const name = foodJoints[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${name}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    foodJoints[i]["place_id"] = "";
                } else {
                    foodJoints[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return foodJoints;
}

async function formatBikePathData(bikePaths) {
    for (let i = 0; i < bikePaths.length; i++) {
        const name = bikePaths[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${name}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    bikePaths[i]["place_id"] = "";
                } else {
                    bikePaths[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return bikePaths;
}

async function formatHikingTrailData(hikingTrails) {
    for (let i = 0; i < hikingTrails.length; i++) {
        const name = hikingTrails[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${name}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    hikingTrails[i]["place_id"] = "";
                } else {
                    hikingTrails[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return hikingTrails;
}

async function formatAttractionData(attractions) {
    for (let i = 0; i < attractions.length; i++) {
        const name = attractions[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${name}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    attractions[i]["place_id"] = "";
                } else {
                    attractions[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return attractions;
}

async function formatActivityData(activities) {
    for (let i = 0; i < activities.length; i++) {
        const address = activities[i]["address"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${address}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    activities[i]["place_id"] = "";
                } else {
                    activities[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return activities;
}

async function formatTestData(tests) {
    for (let i = 0; i < tests.length; i++) {
        const name = tests[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_PLACES_API_KEY}&input=${name}&inputtype=textquery`
        const res = encodeURI(url);

        await axios.get(res)
            .then(response => {
                // Get and Save Place ID
                const placeID = response.data.candidates[0];
                if (!placeID) {
                    tests[i]["place_id"] = "";
                } else {
                    tests[i]["place_id"] = placeID["place_id"];
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return tests;
}

module.exports.formatFoodJointData = formatFoodJointData;
module.exports.formatHikingTrailData = formatHikingTrailData;
module.exports.formatBikePathData = formatBikePathData;
module.exports.formatAttractionData = formatAttractionData;
module.exports.formatActivityData = formatActivityData;
module.exports.formatTestData = formatTestData;