import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar expanded={sidebarExpanded} />
        <MainContent sidebarExpanded={sidebarExpanded} />
      </div>
    </div>
  )
}

export default App 