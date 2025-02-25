import TaskBox from './TaskBox'

const Dashboard = () => {
  return (
    <div className="flex-1 flex justify-start ms-6 gap-10">
      <TaskBox />
      <TaskBox />
      <TaskBox />
    </div>
  )
}

export default Dashboard
