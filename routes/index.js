import express from 'express';
import { catchErrors } from '../handlers/errorHandlers';
// import TodoController from '../controllers/todoController';
import FoodJointController from '../controllers/foodJointController';

const router = express.Router();

// router.get('/api/v1/todos', TodoController.getAllTodos);
// router.get('/api/v1/todos/:id', TodoController.getTodo);
// router.post('/api/v1/todos', TodoController.createTodo);
// router.put('/api/v1/todos/:id', TodoController.updateTodo);
// router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

router.get('/api/v1/foodjoints', FoodJointController.getAllFoodJoints);

export default router; 