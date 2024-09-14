import { Router } from 'express';
import { createTask, getAllTasks, updateTask, completeTask, deleteTask } from '../controllers/taskController.js';

const router = Router();

//routes
router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.put('/tasks/:id', updateTask);
router.patch('/tasks/:id/complete', completeTask);
router.delete('/tasks/:id', deleteTask);

export default router;
