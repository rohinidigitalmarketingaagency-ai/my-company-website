import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter provides the History API context to the entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
