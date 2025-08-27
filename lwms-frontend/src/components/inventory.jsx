import { useMemo, useState } from 'react'
import '../styles/inventory.css'

export default function Inventory() {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([
    { itemId: 1, itemName: 'Pallet Jack', category: 'Equipment', quantity: 6, location: 'A1' },
    { itemId: 2, itemName: 'Widget A', category: 'Goods', quantity: 220, location: 'B4' },
    { itemId: 3, itemName: 'Widget B', category: 'Goods', quantity: 120, location: 'B5' },
  ])

  const filtered = useMemo(() => {
    return items.filter(i =>
      `${i.itemName} ${i.category} ${i.location}`.toLowerCase().includes(query.toLowerCase())
    )
  }, [items, query])

  const addItem = () => {
    const nextId = Math.max(...items.map(i => i.itemId)) + 1
    setItems([...items, { itemId: nextId, itemName: 'New Item', category: 'Goods', quantity: 0, location: 'Z1' }])
  }

  return (
    <section className="page">
      <header className="page-header">
        <h1>Inventory</h1>
        <div className="actions">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search items..." />
          <button onClick={addItem}>Add Item</button>
        </div>
      </header>
      <div className="table">
        <div className="thead">
          <div>Item</div><div>Category</div><div>Qty</div><div>Location</div>
        </div>
        {filtered.map(i => (
          <div className="trow" key={i.itemId}>
            <div>{i.itemName}</div>
            <div>{i.category}</div>
            <div>{i.quantity}</div>
            <div>{i.location}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

