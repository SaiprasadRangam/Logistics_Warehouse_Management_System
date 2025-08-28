import '../styles/space.css'

export default function Space() {
  const zones = [
    { zone: 'A', total: 1000, used: 720 },
    { zone: 'B', total: 800, used: 520 },
    { zone: 'C', total: 1200, used: 880 },
  ]

  return (
    <section className="page">
      <h1>Space Optimization</h1>
      <div className="space-grid">
        {zones.map(z => {
          const percent = Math.round((z.used / z.total) * 100)
          return (
            <div key={z.zone} className="space-card">
              <div className="space-header">
                <div className="space-zone">Zone {z.zone}</div>
                <div className="space-capacity">{z.used}/{z.total} ({percent}%)</div>
              </div>
              <div className="bar"><div className="bar-fill" style={{ width: percent + '%' }} /></div>
              <div className="space-actions">
                <button>Allocate</button>
                <button>Free</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

