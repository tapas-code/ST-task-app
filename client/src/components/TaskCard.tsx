import { Ellipsis } from "lucide-react";

const TaskCard = () => {
  return (
    <div className="w-full mx-auto bg-white min-h-max rounded-xl shadow-4 p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="text-xs px-3 py-1.5 flex items-center justify-center bg-orange-100 rounded-full text-orange-600">
          Low
        </div>
        <Ellipsis />
      </div>

      <p className="font-semibold text-lg ">Brainstorming</p>

      <p className="text-gray-600 -mt-1.5">
        Brainstorming brings team members' diverse experience into play.
      </p>

      <p className="text-sm mt-3">
        <span className="font-semibold">Deadline: </span> 12/05/24
      </p>
    </div>
  );
};

export default TaskCard;
