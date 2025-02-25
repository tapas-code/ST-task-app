import TaskCard from "./TaskCard";

interface TaskBoxProps {
  category: String;
  count: String;
}

const TaskBox: React.FC<TaskBoxProps> = ({ category, count }) => {
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
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskBox;
