import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/v1/tasks/create-task', {
                title,
                description,
                status,
            });
            toast.success('Task created successfully!');
            setTitle('');
            setDescription('');
            setStatus('Pending');
            fetchTasks();
        } catch (err) {
            toast.error('Failed to create task.');
        }
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button className="btn btn-primary" type="submit">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
