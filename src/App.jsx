import { useState } from 'react'
import './App.css'
import { ToDoList } from './assets/components/ToDoList'
import { FormTask } from './assets/components/FormTask'

function App() {

  return (
    <>
      <h1>ToDo List 📝</h1>
      <FormTask />
      <ToDoList />
    </>
  )
}

export default App