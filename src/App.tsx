
import { Routes, Route } from "react-router-dom"
import TaskList from "./components/tasklist"
import AddTask from "./components/addtask"



function App() {
  
  return (
    <>
    <AddTask />
     <TaskList />
    </>
  )
}

export default App
