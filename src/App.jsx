import { useState } from 'react'
import './App.css'
import { ToDoList } from './assets/components/ToDoList'
import { FormTask } from './assets/components/FormTask'

function App() {
  const [tasks, setTasks] = useState([
    { name: "Agentes inteligentes: investigación", status: "pending" },
    { name: "Diseño de software: terminar login", status: "pending" },
    { name: "Lab Elementos programables: reporte 7", status: "pending" },
  ])
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  return (
    <>
      <h1>ToDo List 📝</h1>
      <FormTask addTask={addTask} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App