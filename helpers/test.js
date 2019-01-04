/* eslint-disable no-console */
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.join(__dirname, '/../.env')
});

axios.get('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200396986-6635b51809a01023578960f4dcf4b243')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
console.log('Add Data');

// const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.GOOGLE_API_KEY}&input=50年代台北蚵仔麵線&inputtype=textquery`
// const res = encodeURI(url);


// axios.get(res)
//     .then(response => {
//         // Get Place ID
//         const placeID = response.data.candidates[0]["place_id"];

//         const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLE_API_KEY}&placeid=${placeID}`;
//         const res = encodeURI(url);


//         // Get Place Details
//         axios.get(res)
//             .then(response => {
//                 // Save photo references
//                 const photoReferences = response.data.result.photos.map(photo => photo.photo_reference);

//                 const lat = response.data.result.geometry.location.lat;
//                 const lng = response.data.result.geometry.location.lng;

//                 console.log([lng, lat]);

//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     })
//     .catch(error => {
//         console.log(error);
//     });


// Places API - Photo Search (using photoreference)
// const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAvYdC9IROVpRYrCeZHy7JD3gf_M8RRP9AxuWgrPQgtSDPRrNPI9I-79EuOabPweg6MDUppAf_wv9T1q9nWWxpnqzp-WsgxqpGghWgqndpSIrOi31eUN0xTGkR5Z_P_8gyEhAmwmyhJRaxoGVFDAr4823LGhQXytnNr0KB3qyNxfC6typbpbF6LQ&key=${process.env.GOOGLE_API_KEY}`;
// const res = encodeURI(url);
// axios.get(res)
//     .then(response => {
//         console.log(typeof response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     })