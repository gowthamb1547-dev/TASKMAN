import React from "react"

export default function Progresstracker({ tasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div>
      <h3>Progress Tracker</h3>
      <div style={{ margin: '20px 0' }}>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
        <p>Remaining: {totalTasks - completedTasks}</p>
        <div style={{
          width: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          height: '30px',
          marginTop: '10px'
        }}>
          <div style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressPercentage === 100 ? '#28a745' : '#007bff',
            height: '100%',
            borderRadius: '10px',
            transition: 'width 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            {progressPercentage}%
          </div>
        </div>
      </div>
    </div>
  )
}