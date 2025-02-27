import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createTask, deleteTask, getTasks } from "./services/api";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

const App = () => {
  const [category, setCategory] = useState("Active");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (newTask: { title: string; description: string; deadline: string; priority: string; }) => {
    try {
      const createdTask = await createTask(newTask);
      setTasks((prevTasks) => [...prevTasks, createdTask]); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId))
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header setCategory={setCategory} />
      <div className="mx-6 flex gap-6 max-md:flex-col">
        <Sidebar setCategory={setCategory} tasks={tasks} addTask={handleAddTask}/>
        <Dashboard category={category} tasks={tasks} handleDelete={handleDeleteTask}/>
      </div>
    </div>
  );
};

export default App;
