import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import '../styles/sidebar.css'

export default function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">LWMS</div>
      <nav className="sidebar__nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
        <NavLink to="/inventory" className={({ isActive }) => (isActive ? 'active' : '')}>Inventory</NavLink>
        <NavLink to="/space" className={({ isActive }) => (isActive ? 'active' : '')}>Space</NavLink>
        <NavLink to="/shipment" className={({ isActive }) => (isActive ? 'active' : '')}>Shipments</NavLink>
        <NavLink to="/maintenance" className={({ isActive }) => (isActive ? 'active' : '')}>Maintenance</NavLink>
        <NavLink to="/reports" className={({ isActive }) => (isActive ? 'active' : '')}>Reports</NavLink>
        <NavLink to="/customers" className={({ isActive }) => (isActive ? 'active' : '')}>Customers</NavLink>
        <NavLink to="/customer-home" className={({ isActive }) => (isActive ? 'active' : '')}>Customer Home</NavLink>
      </nav>
      <button className="sidebar__logout" onClick={handleLogout}>Logout</button>
    </aside>
  )
}

