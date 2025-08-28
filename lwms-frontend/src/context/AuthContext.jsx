import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const AUTH_STORAGE_KEY = 'lwms_auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        if (parsed && parsed.user) {
          setUser(parsed.user)
        }
      } catch {
        // ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user }))
  }, [user])

  const login = (email, password) => {
    // naive login for demo purposes
    setUser({ email })
  }

  const register = (name, email, password) => {
    // naive register for demo purposes
    setUser({ name, email })
  }

  const logout = () => setUser(null)

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, login, logout, register }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

