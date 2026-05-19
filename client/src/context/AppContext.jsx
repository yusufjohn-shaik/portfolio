import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate initial app load
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        activeSection,
        setActiveSection,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}
