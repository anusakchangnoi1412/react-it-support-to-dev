import { useState } from "react"
import TaskList from "./components/TaskList"

function App() {
  const [tasks] = useState([
    { id: 1, title: "Reset password" },
    { id: 2, title: "Fix VPN issue" }
  ])

  return (
    <div>
      <h1>IT Support → Dev Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
