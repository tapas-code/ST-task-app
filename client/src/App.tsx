import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [category, setCategory] = useState("Active");
  return (
    <div className="min-h-screen flex flex-col">
      <Header setCategory={setCategory}/>
      <div className="mx-6 flex gap-6 max-md:flex-col">
        <Sidebar setCategory={setCategory}/>
        <Dashboard category={category}/>
      </div>
    </div>
  );
};

export default App;
