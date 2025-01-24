import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
    // html se main comp. m aaye
    // idhar App component render ho rha ho
    // app comp. m khud ka code render krwa rhe
    // <App />

    <Navbar />
)
