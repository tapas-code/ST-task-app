import { Ellipsis, Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteTask } from "../services/api";

interface TaskCardProps {
  task: Task;
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

const TaskCard: React.FC<TaskCardProps> = ({ task, handleDelete }) => {
    const [showMenu, setShowMenu] = useState(false);
  const formattedDate = new Date(task.deadline).toLocaleDateString("en-GB");

  return (
    <div className="w-full mx-auto bg-white min-h-max rounded-xl shadow-4 p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        {task.status === "todo" || task.status === "onProgress" ? (
          <div
            className={`text-xs px-3 py-1.5 rounded-full capitalize ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : "bg-orange-100 text-orange-600"
            }`}
          >
            {task.priority}
          </div>
        ) : (
          <div
            className={`text-xs px-3 py-1.5 rounded-full capitalize ${
              task.status === "completed"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {task.status === "completed" ? "Completed" : "Timeout"}
          </div>
        )}
        <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                <Ellipsis className="w-4 h-4 text-gray-500"/>
            </button>

            {showMenu && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-5 z-10">
                    <div className="py-1">
                        <button  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Move to Progress
                        </button>
                        <button  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Mark as Done
                        </button>
                        <button
                  onClick={() => {
                    handleDelete(task._id);
                    setShowMenu(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </div>
                </button>
                    </div>
                </div>
            )}
        </div>
        
      </div>

      <p className="font-semibold text-lg ">{task.title}</p>

      <p className="text-gray-600 -mt-1.5">{task.description}</p>

      <p className="text-sm mt-3">
        <span className="font-semibold">Deadline: </span> {formattedDate}
      </p>
    </div>
  );
};

export default TaskCard;
