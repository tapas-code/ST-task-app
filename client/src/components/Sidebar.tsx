import { ActivitySquare, Clock, TriangleAlert } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[280px] bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5">
        <div className="p-2 bg-red-500 text-white rounded-full max-w-max">
          <TriangleAlert className="scale-90" />
        </div>
        <p className="text-sm">Expired Tasks</p>
        <p className="text-2xl font-bold">5</p>
      </div>
      <div className="w-[280px] bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5">
        <div className="p-2 bg-orange-500 text-white rounded-full max-w-max">
          <ActivitySquare className="scale-90" />
        </div>
        <p className="text-sm">All Active Tasks</p>
        <p className="text-2xl font-bold">5</p>
      </div>
      <div className="w-[280px] bg-gray-200 rounded-xl shadow-5 p-6 flex flex-col gap-2.5">
        <div className="p-2 bg-blue-500 text-white rounded-full max-w-max">
          <Clock className="scale-90" />
        </div>
        <p className="text-sm">Completed Tasks</p>
        <p className="text-2xl font-bold">2/7</p>
      </div>
      <button className="bg-[#0d062d] w-[280px] p-2 text-white rounded-full cursor-pointer active:scale-95 transition-all duration-200">
        + Add Task
      </button>
    </div>
  );
};

export default Sidebar;
