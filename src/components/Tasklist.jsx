import React from "react"

export default function Tasklist({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div>
        <h3>Task List</h3>
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Task List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              margin: '10px 0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: task.completed ? '#d4edda' : '#fff',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            <div style={{ flex: 1 }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: '10px' }}
              />
              <span style={{ fontWeight: 'bold' }}>{task.text}</span>
              <span style={{ marginLeft: '10px', fontSize: '0.9em', color: '#666' }}>
                [{task.priority}] - {task.category}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}