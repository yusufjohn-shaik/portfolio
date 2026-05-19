import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './styles/globals.css'
import './styles/index.css'
import './styles/animations.css'
import './styles/scrollbar.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0f1e',
              color: '#f1f5f9',
              border: '1px solid rgba(0,245,255,0.2)',
              borderRadius: '12px',
              fontFamily: 'DM Sans, sans-serif',
            },
            success: {
              iconTheme: { primary: '#00f5ff', secondary: '#030712' },
            },
            error: {
              iconTheme: { primary: '#ec4899', secondary: '#030712' },
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
