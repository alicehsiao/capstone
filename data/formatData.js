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

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=${name}&inputtype=textquery`
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

        // Not Allowed based on Google ToS

        // if (foodJoint["place_id"]) {
        //     // Get Place Details
        //     const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLE_API_KEY}&placeid=${foodJoint["place_id"]}`;
        //     const res = encodeURI(url);

        //     await axios.get(res)
        //         .then(response => {
        //             // Save location
        //             const lat = response.data.result.geometry.location.lat;
        //             const lng = response.data.result.geometry.location.lng;
        //             const address = response.data.result.formatted_address;

        //             foodJoints[i]["location"] = {};
        //             foodJoints[i]["location"]["coordinates"] = [lng, lat];
        //             foodJoints[i]["location"]["address"] = address;
        //             foodJoints[i]["location"]["type"] = "Point";

        //             // Save international phone number
        //             const phone = response.data.result.international_phone_number;
        //             foodJoints[i]["intl_phone"] = phone;

        //             // Save opening hours
        //             if (response.data.result.opening_hours) {
        //                 const hours = response.data.result.opening_hours.weekday_text;
        //                 foodJoints[i]["hours"] = hours;
        //             } else {
        //                 foodJoints[i]["hours"] = '';
        //             }

        //             // Save photo references
        //             if (response.data.result.photos) {
        //                 const photos = response.data.result.photos.map(photo => photo.photo_reference);
        //                 foodJoints[i]["photos"] = photos;
        //             } else {
        //                 foodJoints[i]["photos"] = [];
        //             }

        //             return foodJoints[i];
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }
    }
    return foodJoints;
}

async function formatBikePathData(bikePaths) {
    for (let i = 0; i < bikePaths.length; i++) {
        const name = bikePaths[i]["name"];

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=${name}&inputtype=textquery`
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

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=${name}&inputtype=textquery`
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

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=${name}&inputtype=textquery`
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

        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=${address}&inputtype=textquery`
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

module.exports.formatFoodJointData = formatFoodJointData;
module.exports.formatHikingTrailData = formatHikingTrailData;
module.exports.formatBikePathData = formatBikePathData;
module.exports.formatAttractionData = formatAttractionData;
module.exports.formatActivityData = formatActivityData;