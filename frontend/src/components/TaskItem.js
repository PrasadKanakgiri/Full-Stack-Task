import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskItem = ({ task, fetchTasks }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/tasks/${task._id}`);
            toast.success('Task deleted successfully!');
            fetchTasks();
        } catch (err) {
            toast.error('Failed to delete task.');
        }
    };

    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <small>Status: {task.status}</small>
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
