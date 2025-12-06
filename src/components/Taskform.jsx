import { useState } from "react"

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("medium")
  const [category, setCategory] = useState("general")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() === "") {
      return
    }
    addTask({ text: task.trim(), priority, category, completed: false })
    setTask("")
    setPriority("medium")
    setCategory("general")
  }

  return (
    <div>
      <form className='task-form' onSubmit={handleSubmit}>
        <div id='inp'>
          <input
            type='text'
            placeholder='Enter the task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <span><button type='submit'>Add task</button></span>
        </div>
        <div id='btns'>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}