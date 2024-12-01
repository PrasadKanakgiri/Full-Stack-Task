import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Task Management App</h1>
            <TaskForm />
            <TaskList />
            <ToastContainer />
        </div>
    );
};

export default App;
