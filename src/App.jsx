import React, { useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearAllTasks = () => {
    setTasks([])
  }

  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />
      <button className="clear-all-btn" onClick={clearAllTasks}>Clear All Tasks</button>
    </div>
  )
}