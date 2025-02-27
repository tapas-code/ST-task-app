import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api"
const API_BASE_URL = "https://st-task-app-api.onrender.com/api"

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Fetch all tasks 
export const getTasks = async () => {
    try {
        const response = await api.get("/tasks");
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks: ", error);
        return [];
    }
}

// Create a new task
export const createTask = async (taskData: object) => {
    try {
        const response = await api.post("/tasks", taskData);
        return response.data;
    } catch (error) {
        console.error("Error creating task: ", error);
        throw error;
    }
}

// Update a task 
export const updateTask = async (id: string, updatedData: object) => {
    try {
        const response = await api.put(`/tasks/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating task: ", error);
        throw error;
    }
}

// Delete a task
export const deleteTask = async (id: string) => {
    try {
        await api.delete(`tasks/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting task: ", error);
        return false;
    }
}