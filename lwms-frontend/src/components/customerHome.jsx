import '../styles/customerHome.css'

export default function CustomerHome() {
  return (
    <section className="page">
      <h1>Customer Portal</h1>
      <p>Track your shipments and view available inventory.</p>
      <div className="cards">
        <div className="card">
          <h3>Track Shipment</h3>
          <p>Enter your tracking ID to view status and ETA.</p>
          <input placeholder="Tracking ID" />
          <button>Track</button>
        </div>
        <div className="card">
          <h3>Available Stock</h3>
          <p>Search products for availability.</p>
          <input placeholder="Search products" />
          <button>Search</button>
        </div>
      </div>
    </section>
  )
}

