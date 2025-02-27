import { Search } from "lucide-react";

interface HeaderProps {
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCategory, setSearchQuery }) => {
  return (
    <div className="bg-gray-200 shadow-5 m-6 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <label className="input rounded-full w-1/5 max-md:w-2/4 shadow-md">
          <Search className="text-gray-800 w-5" />
          <input
            type="search"
            required
            placeholder="Search Tasks"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>

        <select
          defaultValue="Pick a color"
          className="select rounded-full w-1/5 shadow-md max-md:w-2/5"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Active">Filter</option>
          <option value="To Do">To-Do</option>
          <option value="On Progress">Progress</option>
          <option value="Done">Done</option>
          <option value="Timeout">Timeout</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
