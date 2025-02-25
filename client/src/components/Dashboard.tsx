import TaskBox from "./TaskBox";

interface DashboardProps {
  category: String;
}

const Dashboard: React.FC<DashboardProps> = ({ category }) => {
  return (
    <div className="flex-1 flex justify-start max-md:my-6 md:ms-6 gap-12 max-md:flex-col">
      {category == "Active" && (
        <>
          <TaskBox category="To Do" count="3" />
          <TaskBox category="On Progress" count="2" />
        </>
      )}
      {category == "Done" && <TaskBox category="Done" count="1" />}
      {category == "To Do" && <TaskBox category="To Do" count="3" />}
      {category == "On Progress" && <TaskBox category="On Progress" count="2" />}
      {category == "Timeout" && <TaskBox category="Expired" count="1" />}
    </div>
  );
};

export default Dashboard;
