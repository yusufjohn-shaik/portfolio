import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { AppProvider } from './context/AppContext'
import Loader from './components/ui/Loader'
import { useAppContext } from './context/AppContext'

function AppInner() {
  const { isLoading } = useAppContext()
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (isLoading) return <Loader />

  return <AppRoutes />
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </ThemeProvider>
  )
}
