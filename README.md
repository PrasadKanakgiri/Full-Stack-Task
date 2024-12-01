Here is the provided content formatted as a `README.md` file:

```markdown
# Task Management Application

A full-stack task management application built using the **MERN stack** (MongoDB, Express, React, and Node.js). This application allows users to create, view, update, and delete tasks with filtering, sorting, and notifications.

---

## **Features**

- **Task List**: Displays all tasks with sorting and filtering options.
- **Task Form**: Add new tasks with a title, description, and status.
- **Task Item**: View task details with options to update status or delete the task.
- **Sorting and Filtering**: Sort tasks by creation date or title and filter by status.
- **Notifications**: Displays success/error messages using toast notifications.
- **Error Handling**: Handles server errors and provides feedback.
- **Loading Indicators**: Shows loading messages during server requests.

---

## **Tech Stack**

### **Frontend**
- React.js
- Axios
- Bootstrap
- React-Toastify

### **Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## **Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

---

### **Backend Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/PrasadKanakgiri/Full-Stack-Task.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following:
   ```plaintext
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/task-management
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The backend will be running at `http://localhost:8000`.

---

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## **API Endpoints**

### **Base URL**: `http://localhost:8000/api/v1/tasks`

| Method | Endpoint                  | Description                | Payload Example                                             |
|--------|---------------------------|----------------------------|-------------------------------------------------------------|
| GET    | `/get-all-tasks`          | Fetch all tasks            | `?status=Pending&sortBy=createdAt&order=asc` (optional)     |
| POST   | `/create-task`            | Create a new task          | `{ title, description, status }`                           |
| GET    | `/:id`                    | Fetch a single task        | N/A                                                         |
| PATCH  | `/:id`                    | Update task status/details | `{ status }` or `{ title, description, status }`           |
| DELETE | `/:id`                    | Delete a task              | N/A                                                         |

---

## **Folder Structure**

```plaintext
task-management-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── app.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## **How to Use**

1. Open the application in your browser (`http://localhost:3000`).
2. Add tasks by filling out the **Task Form**.
3. View the list of tasks in the **Task List** section.
4. Use filters and sorting options to customize the view.
5. Update the status of a task or delete tasks as needed.

---

## **Screenshots**

### **Task List and Sorting**
![Task List](https://via.placeholder.com/600x400)

### **Task Form**
![Task Form](https://via.placeholder.com/600x400)

---

## **Future Enhancements**

- User authentication (login/signup).
- Role-based access control (RBAC).
- Advanced filtering and search options.
- Dark mode for better user experience.

---

## **Contributing**

Feel free to submit issues or contribute to this project by creating a pull request. For major changes, please open an issue first to discuss your ideas.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## **Acknowledgments**

- [React Icons](https://react-icons.github.io/react-icons/) for icons.
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications.
- [Bootstrap](https://getbootstrap.com/) for styling.
```

You can copy this content into a file named `README.md` in your project directory.
