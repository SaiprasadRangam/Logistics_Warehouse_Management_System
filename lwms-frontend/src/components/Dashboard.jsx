import '../styles/dashboard.css'

export default function Dashboard() {
  return (
    <section className="page">
      <h1>Dashboard</h1>
      <div className="kpi-grid">
        <div className="kpi-card"><div className="kpi-title">Inventory Items</div><div className="kpi-value">1,284</div></div>
        <div className="kpi-card"><div className="kpi-title">Space Used</div><div className="kpi-value">72%</div></div>
        <div className="kpi-card"><div className="kpi-title">Active Shipments</div><div className="kpi-value">19</div></div>
        <div className="kpi-card"><div className="kpi-title">Open Maintenance</div><div className="kpi-value">3</div></div>
      </div>
    </section>
  )
}

