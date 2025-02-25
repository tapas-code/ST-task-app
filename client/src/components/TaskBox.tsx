import { Ellipsis } from "lucide-react";
import React from "react";

const TaskBox = () => {
  return (
    <div className="h-[99.5%] bg-gray-200 w-[360px] shadow-5 rounded-xl py-4 px-5">
      <div className="flex items-center justify-center gap-2">
        <div className="bg-green-500 rounded-full w-2 h-2"></div>
        <p className="font-semibold">Todo</p>
        <div className="bg-gray-300 rounded-full text-xs px-1.5 py-0.5 flex items-center justify-center">
          3
        </div>
      </div>

      <div className="bg-blue-500 w-full h-1 mt-2"></div>

      <div className="taskBox max-h-[500px] mt-4 pb-3 flex flex-col gap-4 overflow-auto -me-2">
        <div className="w-[96%] mx-auto bg-white min-h-max rounded-xl shadow-4 p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-xs px-3 py-1.5 flex items-center justify-center bg-orange-100 rounded-full text-orange-600">Low</div>
            <Ellipsis />
          </div>

          <p className="font-semibold text-lg">Brainstorming</p>

          <p className="text-gray-600 -mt-1.5">Brainstorming brings team members' diverse experience into play.</p>

          <p className="text-sm mt-3"><span className="font-semibold">Deadline: </span> 12/05/24</p>
        </div>
        
      </div>
    </div>
  );
};

export default TaskBox;
