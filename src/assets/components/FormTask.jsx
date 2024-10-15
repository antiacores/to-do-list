import React from 'react'

export const FormTask = ({ algo }) => {
  return (
    <div>
        <label htmlFor="add_task">Add new task: </label>
        <input type="text" id="add_task" />
        <button
            onClick={() => {
                console.log("Add task")
            }}>Add task
        </button>
    </div>
  )
}