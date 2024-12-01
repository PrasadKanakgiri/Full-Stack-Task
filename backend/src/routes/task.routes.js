import express from 'express';
import {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
} from '../controllers/task.controller.js';

const router = express.Router();

router.route('/get-all-tasks').get(getAllTasks);
router.route('/create-task').post(createTask);
router.route('/:id').get(getTaskById);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);

export default router;
