import Task from '../models/task.model.js';

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const { sortBy = 'createdAt', order = 'desc', status } = req.query;
        const filter = status ? { status } : {}; // Filter by status if provided
        const tasks = await Task.find(filter).sort({ [sortBy]: order === 'desc' ? -1 : 1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
    }
};

// Create a new task
const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const newTask = new Task({ title, description, status });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single task
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a task
const updateTask = async (req, res) => {
    const { title, description, status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, status },
            { new: true, runValidators: true }
        );
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    getAllTasks
}
