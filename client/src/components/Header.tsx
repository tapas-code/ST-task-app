import { Filter, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 shadow-5 m-6 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <label className="input rounded-full w-1/5 max-md:w-2/4 shadow-md">
          <Search className="text-gray-800 w-5" />
          <input type="search" required placeholder="Search Tasks" />
        </label>

        <select
          defaultValue="Pick a color"
          className="select rounded-full w-1/5 shadow-md max-md:w-2/5"
        >
          <option>Filter</option>
          <option>To-Do</option>
          <option>Progess</option>
          <option>Done</option>
          <option>Timeout</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
