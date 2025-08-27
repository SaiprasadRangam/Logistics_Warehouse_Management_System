import '../styles/customer.css'

export default function Customer() {
  return (
    <section className="page">
      <h1>Customers</h1>
      <p>Manage customer accounts and preferences.</p>
      <div className="table">
        <div className="thead"><div>Name</div><div>Email</div><div>Status</div></div>
        <div className="trow"><div>Jane Doe</div><div>jane@example.com</div><div>Active</div></div>
        <div className="trow"><div>John Smith</div><div>john@example.com</div><div>Inactive</div></div>
      </div>
    </section>
  )
}

