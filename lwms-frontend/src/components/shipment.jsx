import { useState } from 'react'
import '../styles/shipment.css'

export default function Shipment() {
  const [shipments, setShipments] = useState([
    { shipmentId: 101, item: 'Widget A', origin: 'Seattle', destination: 'Denver', status: 'In Transit', eta: '2025-09-21' },
    { shipmentId: 102, item: 'Widget B', origin: 'LA', destination: 'Dallas', status: 'Received', eta: '2025-09-19' },
  ])

  const addShipment = () => {
    setShipments(s => [
      ...s,
      { shipmentId: Math.max(...s.map(x => x.shipmentId)) + 1, item: 'New Item', origin: 'NY', destination: 'Chicago', status: 'Preparing', eta: '2025-10-01' }
    ])
  }

  return (
    <section className="page">
      <header className="page-header">
        <h1>Shipment Handling</h1>
        <button onClick={addShipment}>Receive Shipment</button>
      </header>
      <div className="table">
        <div className="thead"><div>ID</div><div>Item</div><div>From</div><div>To</div><div>Status</div><div>ETA</div></div>
        {shipments.map(s => (
          <div className="trow" key={s.shipmentId}>
            <div>{s.shipmentId}</div>
            <div>{s.item}</div>
            <div>{s.origin}</div>
            <div>{s.destination}</div>
            <div>{s.status}</div>
            <div>{s.eta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

