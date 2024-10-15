import React from 'react'

export const Task = ({name, status}) => {
  return (
    <>
    <p>{name}</p>
    <div>
        {/* TODO: Validar si status es true or false ??? */}
        <button on onClick={() => {
            console.log("Done")
        } }>✅</button>
        <button on onClick={() => {
            console.log("Delete")
        } }>❌</button>
    </div>
    </>
  )
}