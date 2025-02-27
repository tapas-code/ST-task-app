import { ActivitySquare, Clock, TriangleAlert } from "lucide-react";
import { useState } from "react";

import { SuccessModal } from "./SuccessModal";
import { TaskModal } from "./TaskModal";

interface SidebarProps {
  setCategory: (category: string) => void;
  tasks: Task[];
  addTask: (task: {
    title: string;
    description: string;
    deadline: string;
    priority: string;
  }) => void;
}

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setCategory, tasks, addTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const expiredTasksCount = tasks.filter(
    (task) => task.status === "timeout"
  ).length;
  const todoTasksCount = tasks.filter((task) => task.status === "todo").length;
  const onProgressTasksCount = tasks.filter(
    (task) => task.status === "onProgress"
  ).length;
  const doneTasksCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <div className="flex flex-col gap-6">
      <div
        className="w-[280px] max-md:w-full bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5 active:scale-95 cursor-pointer transition-all duration-150"
        onClick={() => setCategory("Timeout")}
      >
        <div className="p-2 bg-red-500 text-white rounded-full max-w-max">
          <TriangleAlert className="scale-90" />
        </div>
        <p className="text-sm">Expired Tasks</p>
        <p className="text-2xl font-bold">{expiredTasksCount}</p>
      </div>

      <div
        className="w-[280px] max-md:w-full bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5 active:scale-95 cursor-pointer transition-all duration-150"
        onClick={() => setCategory("Active")}
      >
        <div className="p-2 bg-orange-500 text-white rounded-full max-w-max">
          <ActivitySquare className="scale-90" />
        </div>
        <p className="text-sm">All Active Tasks</p>
        <p className="text-2xl font-bold">
          {todoTasksCount + onProgressTasksCount}
        </p>
      </div>

      <div
        className="w-[280px] max-md:w-full bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5 active:scale-95 cursor-pointer transition-all duration-150"
        onClick={() => setCategory("Done")}
      >
        <div className="p-2 bg-blue-500 text-white rounded-full max-w-max">
          <Clock className="scale-90" />
        </div>
        <p className="text-sm">Completed Tasks</p>
        <p className="text-2xl font-bold">
          {doneTasksCount}/{tasks.length}
        </p>
      </div>

      <button
        className="bg-[#0d062d] w-[280px] max-md:w-full p-2 text-white rounded-full cursor-pointer active:scale-95 transition-all duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Task
      </button>

      {/* Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTask}
        onSuccess={handleSuccess}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
