import '../styles/reports.css'

export default function Reports() {
  const reports = [
    { id: 1, type: 'Inventory Turnover', date: '2025-09-17' },
    { id: 2, type: 'Space Utilization', date: '2025-09-16' },
    { id: 3, type: 'Shipment Performance', date: '2025-09-15' },
  ]

  return (
    <section className="page">
      <h1>Performance Reports</h1>
      <ul className="report-list">
        {reports.map(r => (
          <li key={r.id} className="report-item">
            <div>
              <div className="report-type">{r.type}</div>
              <div className="report-date">Generated: {r.date}</div>
            </div>
            <button>Download</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

