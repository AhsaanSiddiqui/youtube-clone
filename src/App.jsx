import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes'

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen invisible md:visible">
        <Header onMenuClick={toggleSidebar} />
        <div className="flex pt-16">
          <Sidebar expanded={sidebarExpanded} />
          <AppRoutes sidebarExpanded={sidebarExpanded} />
        </div>
      </div>

      {/* Mobile-only overlay for devices <= 575px */}
      <div className="mobile-block-overlay">
        <div className="mobile-block-card">
          <div className="mobile-block-title">This website is Not available for Mobile Devices</div>
        </div>
      </div>
    </Router>
  )
}

export default App 