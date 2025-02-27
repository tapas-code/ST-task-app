import TaskCard from "./TaskCard";

interface Task {
    _id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    deadline: string;
}

interface TaskBoxProps {
  category: string;
  count: number;
  tasks: Task[];
  handleDelete: (taskId: string) => void;
  handleUpdate: (taskId: string, updatedTask: { title: string; description: string; deadline: string; priority: string; status: string }) => void;
}

const TaskBox: React.FC<TaskBoxProps> = ({ category, count, tasks, handleDelete, handleUpdate }) => {
  return (
    <div className="h-[99.5%] bg-gray-200 w-[300px] max-lg:w-1/2 max-md:w-full shadow-5 rounded-xl py-4 px-4">
      <div className="flex items-center justify-center gap-2">
        <div
          className={` ${
            category === "To Do"
              ? "bg-blue-500"
              : category == "On Progress"
              ? "bg-orange-400"
              : category == "Done"
              ? "bg-green-500"
              : "bg-red-500"
          }
 rounded-full w-2 h-2`}
        ></div>
        <p className="font-semibold">{category}</p>
        <div className="bg-gray-300 rounded-full text-xs px-1.5 py-0.5 flex items-center justify-center">
          {count}
        </div>
      </div>

      <div
        className={`${
          category == "To Do"
            ? "bg-blue-500"
            : category == "On Progress"
            ? "bg-orange-400"
            : category == "Done"
            ? "bg-green-500"
            : "bg-red-500"
        } w-full h-1 mt-2`}
      ></div>

      <div className="taskBox max-h-[500px] mt-4 pb-3 flex flex-col gap-4 overflow-auto ">
        {tasks.length > 0 ? tasks.map(task => (
            <TaskCard key={task._id} task={task} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        )): <p>No tasks available.</p>}
      </div>
    </div>
  );
};

export default TaskBox;
