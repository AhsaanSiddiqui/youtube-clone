import React, { useState } from 'react'
import UserDropdown from './UserDropdown'

const Header = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Add search functionality here
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105"
            title="Toggle Sidebar"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-leaf text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold">Essence Of Me</span>
          </div>
        </div>
        
        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="Search Video..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-gray-600"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </form>
        </div>
        
        {/* Right Section - User Profile */}
        <div className="flex items-center space-x-3">
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header 