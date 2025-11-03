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
      <div className="bg-gray-900 text-white h-screen flex flex-col invisible md:visible">
        <Header onMenuClick={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden pt-16">
          <Sidebar expanded={sidebarExpanded} />
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <AppRoutes sidebarExpanded={sidebarExpanded} />
          </div>
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