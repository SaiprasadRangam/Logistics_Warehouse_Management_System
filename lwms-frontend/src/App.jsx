import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Inventory from './components/inventory.jsx'
import Space from './components/space.jsx'
import Shipment from './components/shipment.jsx'
import Maintenance from './components/maintenance.jsx'
import Reports from './components/reports.jsx'
import LoginPage from './components/loginpage.jsx'
import RegisterPage from './components/registerPage.jsx'
import CustomerHome from './components/customerHome.jsx'
import Customer from './components/customer.jsx'
import { useAuth } from './context/AuthContext.jsx'

function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

function AuthLayout() {
  return (
    <div className="auth-shell">
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/space" element={<Space />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/customer-home" element={<CustomerHome />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
