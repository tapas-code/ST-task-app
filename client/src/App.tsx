import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createTask, deleteTask, getTasks, updateTask } from "./services/api";

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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleUpdateTask = async (
    taskId: string,
    updatedTask: { title: string; description: string; deadline: string; priority: string; status: string }
  ) => {
    try {
      const updated = await updateTask(taskId, updatedTask); // API Call
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? { ...task, ...updated } : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <div className="mx-6 flex gap-6 max-md:flex-col">
        <Sidebar setCategory={setCategory} tasks={tasks} addTask={handleAddTask}/>
        <Dashboard category={category} tasks={filteredTasks} handleDelete={handleDeleteTask} handleUpdate={handleUpdateTask}/>
      </div>
    </div>
  );
};

export default App;
