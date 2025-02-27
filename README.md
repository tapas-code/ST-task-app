# **Task Management App**

## 🚀 **Overview**
A **Task Management App** built with **MERN Stack** (MongoDB, Express, React, Node.js) and **TypeScript** that allows users to manage their daily tasks efficiently with CRUD operations, deadline tracking, and automatic timeout management.

## 🎯 **Features**

### 🔥 **Backend Features**
- Create, Read, Update, and Delete (CRUD) Tasks
- Automatic Task Timeout (Expired tasks automatically marked as Timeout)
- Priority-Based Task Management (High/Low)
- Deadline Tracking
- Proper Error Handling and Validation
- Modular Code Structure
- MongoDB Database Integration

### 🎨 **Frontend Features**
- Task Filtering (To-Do, On Progress, Completed, Timeout)
- Task Search Functionality
- Add New Task with Deadline and Priority
- Update Task Status and Priority
- Delete Task
- Realtime Status Update (Timeout Handling)
- Mobile Responsive Design
- Calendar Date Picker
- Interactive Sidebar with Task Statistics
- Modern UI using Tailwind CSS

## 🛠 **Tech Stack**

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

### Frontend
- React (Vite + TypeScript)
- Tailwind CSS
- Axios
- Lucide Icons

## 💻 **How to Run Locally**

### Prerequisites
- Node.js
- MongoDB

## Backend Setup

#### 1. Clone the repository
```bash
git https://github.com/tapas-code/ST-task-app.git
cd backend
```

#### 2. Install dependencies
```bash
npm install
```
#### 3. Add .env file with the following variables
```bash
MONGO_URI=your_mongodb_uri
PORT=5000
```

#### 4. Start the server
```bash
npm run dev
```

## Frontend Setup

#### 1. Navigate to frontend
```bash
cd frontend
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Start the frontend
```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

## 🌐 Deployment
The app is deployed on **Netlify** for the frontend and **Render** for the backend.
👉 **[Live Demo](https://st-task-app.netlify.app/)** 🌍

## 📹 Demo Video
🎥 **Watch the demo here:** 👉 **[Video Link](https://youtu.be/YCImJdY4plo)**

## 📄 **API Endpoints**

### Tasks
- `POST /tasks` - Create Task
- `GET /tasks` - Get All Tasks
- `PUT /tasks/:id` - Update Task
- `DELETE /tasks/:id` - Delete Task

## 🏆 **Key Highlights**
- Modular and Clean Codebase
- Realtime Task Timeout Management
- Fully Responsive Design

---

### ✨ Special Thanks
- **Vite** for fast frontend development
- **Tailwind CSS** for seamless styling
- **Lucide Icons** for beautiful UI elements

💡 Feel free to contribute by submitting issues or pull requests! 🚀

---

## 👨‍💻 Author
Developed by **Tapas Tanty** 🚀

🔗 **GitHub:** [tapas-code](https://github.com/tapas-code)  
📧 **Email:** tapas.code247@gmail.com 

---

### ⭐ Don't forget to star the repo if you found it useful!

