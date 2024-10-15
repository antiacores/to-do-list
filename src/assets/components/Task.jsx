import React from 'react'

export const Task = ({ name, status, onDone, onDelete }) => {
    return (
        <div style={{ 
            backgroundColor: status === "done" ? "lightgreen" : "#EAE6CA",
            padding: '10px', 
            margin: '5px 0', 
            border: '1px solid black' 
        }}>
            <p>{name}</p>
            {status === "pending" ? (
                <div>
                    <button onClick={onDone}>✅</button>
                    <button onClick={onDelete}>❌</button>
                </div>
            ) : (
                <p>Completed 🎉</p>
            )}
        </div>
    )
}