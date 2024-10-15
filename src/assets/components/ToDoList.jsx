import React, { useState } from 'react'
import { Task } from './Task'

export const ToDoList = ({ tasks, setTasks }) => {
    const markAsDone = (index) => {
        const newTasks = [...tasks]
        newTasks[index].status = "done"
        setTasks(newTasks)
    }
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }
  return (
    <div>
        <h2>Tasks</h2>
        {tasks.map((task, index) => (
            <Task
                key={index}
                name={task.name}
                status={task.status}
                onDone={() => markAsDone(index)}
                onDelete={() => deleteTask(index)}
            />
        ))}
    </div>
  )
}