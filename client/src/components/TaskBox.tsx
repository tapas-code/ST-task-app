import TaskCard from "./TaskCard";

const TaskBox = () => {
  return (
    <div className="h-[99.5%] bg-gray-200 w-[360px] shadow-5 rounded-xl py-4 px-4">
      <div className="flex items-center justify-center gap-2">
        <div className="bg-green-500 rounded-full w-2 h-2"></div>
        <p className="font-semibold">Todo</p>
        <div className="bg-gray-300 rounded-full text-xs px-1.5 py-0.5 flex items-center justify-center">
          3
        </div>
      </div>

      <div className="bg-blue-500 w-full h-1 mt-2"></div>

      <div className="taskBox max-h-[500px] mt-4 pb-3 flex flex-col gap-4 overflow-auto ">
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskBox;
