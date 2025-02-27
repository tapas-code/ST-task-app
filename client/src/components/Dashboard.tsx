import { useEffect, useState } from "react";
import TaskBox from "./TaskBox";
import { getTasks } from "../services/api";

interface DashboardProps {
  category: string;
  tasks: Task[];
  handleDelete: (taskId: string) => void;
}

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

const Dashboard: React.FC<DashboardProps> = ({ category, tasks, handleDelete }) => {

  const todoTasks = tasks.filter(task => task.status === "todo");
  const onProgressTasks = tasks.filter(task => task.status === "onProgress");
  const doneTasks = tasks.filter(task => task.status === "completed");
  const expiredTasks = tasks.filter(task => task.status === "timeout");

  return (
    <div className="flex-1 flex justify-start max-md:my-6 md:ms-6 gap-12 max-md:flex-col">
      {category == "Active" && (
        <>
          <TaskBox category="To Do" count={todoTasks.length} tasks={todoTasks}  handleDelete={handleDelete}/>
          <TaskBox category="On Progress" count={onProgressTasks.length} tasks={onProgressTasks}  handleDelete={handleDelete}/>
        </>
      )}
      {category == "Done" && <TaskBox category="Done" count={doneTasks.length} tasks={doneTasks}  handleDelete={handleDelete}/>}
      {category == "To Do" && <TaskBox category="To Do" count={todoTasks.length} tasks={todoTasks}  handleDelete={handleDelete}/>}
      {category == "On Progress" && (
        <TaskBox category="On Progress" count={onProgressTasks.length} tasks={onProgressTasks} handleDelete={handleDelete}/>
      )}
      {category == "Timeout" && <TaskBox category="Expired" count={expiredTasks.length} tasks={expiredTasks}  handleDelete={handleDelete}/>}
    </div>
  );
};

export default Dashboard;
