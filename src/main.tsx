import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/tailwind.css'
import { ThemeProvider } from './context/ThemeContext'

// Handle GitHub Pages SPA routing
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== location.pathname) {
  history.replaceState(null, '', redirect)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
