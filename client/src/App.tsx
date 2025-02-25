import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-6 flex gap-6">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
