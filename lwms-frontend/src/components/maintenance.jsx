import { useState } from 'react'
import '../styles/maintenance.css'

export default function Maintenance() {
  const [tasks, setTasks] = useState([
    { id: 1, equipmentId: 12, description: 'Forklift inspection', date: '2025-09-18', status: 'Scheduled' },
    { id: 2, equipmentId: 7, description: 'Conveyor belt replacement', date: '2025-09-22', status: 'Pending' },
  ])

  const addTask = () => {
    setTasks(t => [
      ...t,
      { id: Math.max(...t.map(x => x.id)) + 1, equipmentId: 99, description: 'Dock door lubrication', date: '2025-09-25', status: 'Scheduled' }
    ])
  }

  return (
    <section className="page">
      <header className="page-header">
        <h1>Maintenance Scheduling</h1>
        <button onClick={addTask}>Schedule Maintenance</button>
      </header>
      <div className="table">
        <div className="thead"><div>ID</div><div>Equipment</div><div>Description</div><div>Date</div><div>Status</div></div>
        {tasks.map(t => (
          <div className="trow" key={t.id}>
            <div>{t.id}</div>
            <div>{t.equipmentId}</div>
            <div>{t.description}</div>
            <div>{t.date}</div>
            <div>{t.status}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

