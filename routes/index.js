import express from 'express';
import { catchErrors } from '../handlers/errorHandlers';
import foodJointController from '../controllers/foodJointController';
import hikingTrailController from '../controllers/hikingTrailController';
import bikePathController from '../controllers/bikePathController';
import attractionController from '../controllers/attractionController';
import activityController from '../controllers/activityController';
import testController from '../controllers/testController';

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


export default router; 



// Examples
// router.post('/api/v1/todos', TodoController.createTodo);
// router.put('/api/v1/todos/:id', TodoController.updateTodo);
// router.delete('/api/v1/todos/:id', TodoController.deleteTodo);