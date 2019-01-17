const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const foodJointController = require('../controllers/foodJointController');
const hikingTrailController = require('../controllers/hikingTrailController');
const bikePathController = require('../controllers/bikePathController');
const attractionController = require('../controllers/attractionController');
const activityController = require('../controllers/activityController');
const testController = require('../controllers/testController');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.get('/api/v1/foodjoints', catchErrors(foodJointController.getAllFoodJoints));
router.get('/api/v1/foodjoints/:id', catchErrors(foodJointController.getSingleFoodJoint));

router.get('/api/v1/hikingtrails', catchErrors(hikingTrailController.getAllHikingTrails));
router.get('/api/v1/hikingtrails/:id', catchErrors(hikingTrailController.getSingleHikingTrail));

router.get('/api/v1/bikepaths', catchErrors(bikePathController.getAllBikePaths));
router.get('/api/v1/bikepaths/:id', catchErrors(bikePathController.getSingleBikePath));

router.get('/api/v1/attractions', catchErrors(attractionController.getAllAttractions));
router.get('/api/v1/attractions/:id', catchErrors(attractionController.getSingleAttraction));

router.get('/api/v1/activities', catchErrors(activityController.getAllActivities));
router.get('/api/v1/activities/:id', catchErrors(activityController.getSingleActivity));

router.get('/api/v1/tests', catchErrors(testController.getAllTests));
router.get('/api/v1/tests/:id', catchErrors(testController.getSingleTest));

router.get('/api/v1/search', catchErrors(searchController.queryDatabase));

module.exports = router; 