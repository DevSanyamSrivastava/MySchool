import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MasterFooter from './components/MasterFooter/MasterFooter.jsx'
import MasterHeader from './components/MasterHeader/MasterHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MasterHeader/>
    <MasterFooter/>
    
  </StrictMode>,
)
