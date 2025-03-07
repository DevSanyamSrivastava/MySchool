import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterFooter from './components/MasterFooter/MasterFooter.jsx'
import MasterHeader from './components/MasterHeader/MasterHeader.jsx'
import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Staff from './components/Staff/Staff.jsx'
import Registration from './components/Registration/Registration.jsx';
import { DeveloperTeam } from './components/Developer/Developer.jsx';
import DevFooter from './components/DevFooter/DevFooter.jsx';

// import Home from './components/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <MasterHeader /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/staff" element={<Staff />} />
        <Route path='/Developer' element={<DeveloperTeam/>}  />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <MasterFooter />
      <DevFooter/>
    </Router>
   </StrictMode>,
)
