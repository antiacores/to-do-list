import React, { useState } from 'react'

export const FormTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState("")
    const buttonAddTask = () => {
        if (newTask.trim() === "") return
        addTask({ name: newTask, status: "pending" })
        setNewTask("")
    }
    return (
        <div>
            <label htmlFor="add_task">Add new task: </label>
            <input 
                type="text" 
                id="add_task" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button onClick={buttonAddTask}>➕</button>
        </div>
    )
}