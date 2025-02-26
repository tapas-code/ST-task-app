import { useEffect, useState } from "react";
import TaskBox from "./TaskBox";
import { getTasks } from "../services/api";

interface DashboardProps {
  category: String;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

const Dashboard: React.FC<DashboardProps> = ({ category }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };
    fetchTasks();
  }, []);

  const todoTasks = tasks.filter(task => task.status === "todo");
  const onProgressTasks = tasks.filter(task => task.status === "onProgress");
  const doneTasks = tasks.filter(task => task.status === "done");
  const expiredTasks = tasks.filter(task => task.status === "expired");

  return (
    <div className="flex-1 flex justify-start max-md:my-6 md:ms-6 gap-12 max-md:flex-col">
      {category == "Active" && (
        <>
          <TaskBox category="To Do" count={todoTasks.length} tasks={todoTasks} />
          <TaskBox category="On Progress" count={onProgressTasks.length} tasks={onProgressTasks} />
        </>
      )}
      {category == "Done" && <TaskBox category="Done" count={doneTasks.length} tasks={doneTasks} />}
      {category == "To Do" && <TaskBox category="To Do" count={todoTasks.length} tasks={todoTasks} />}
      {category == "On Progress" && (
        <TaskBox category="On Progress" count={onProgressTasks.length} tasks={onProgressTasks} />
      )}
      {category == "Timeout" && <TaskBox category="Expired" count={expiredTasks.length} tasks={expiredTasks} />}
    </div>
  );
};

export default Dashboard;
