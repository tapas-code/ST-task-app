import { Ellipsis } from "lucide-react";

interface TaskCardProps {
  task: Task;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
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
        <Ellipsis />
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
