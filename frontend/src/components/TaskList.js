import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import { toast } from 'react-toastify';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('createdAt');
    const [order, setOrder] = useState('desc');

    const fetchTasks = async () => {
        setLoading(true);
        setError('');
        try {
            const { data } = await axios.get(
                `http://localhost:8000/api/v1/tasks/get-all-tasks?status=${filter}&sortBy=${sortBy}&order=${order}`
            );
            setTasks(data);
        } catch (err) {
            setError('Failed to fetch tasks.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [filter, sortBy, order]);

    return (
        <div>
            <div className="d-flex justify-content-between my-4">
                <select
                    className="form-select w-25"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                >
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <select
                    className="form-select w-25"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="createdAt">Created At</option>
                    <option value="title">Title</option>
                </select>
                <select
                    className="form-select w-25"
                    onChange={(e) => setOrder(e.target.value)}
                    value={order}
                >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>

            {loading && <p>Loading tasks...</p>}
            {error && <p className="text-danger">{error}</p>}

            <div className="list-group">
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        fetchTasks={fetchTasks}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
