import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css'        // ← Import AOS styles
import AOS from 'aos'            // ← Import AOS

// Initialize AOS
AOS.init({
  duration: 800,     // animation duration
  once: true,        // animation happens only once
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
