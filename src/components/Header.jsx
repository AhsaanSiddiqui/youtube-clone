import React, { useState } from 'react'
import UserDropdown from './UserDropdown'
import logoDark from '/assets/logo-dark.png'
import logoWhite from '/assets/logo-white.png'

const Header = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Add search functionality here
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-brown-950 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4 w-full">
          {/* Hamburger Menu */}
          <button 
            onClick={onMenuClick}
            className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition-all duration-200 ease-in-out transform hover:scale-105"
            title="Toggle Sidebar"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoWhite} alt="Logo" className="w-48" />
          </div>
        </div>
        
        {/* Center Section - Search Bar */}
        <div className='flex items-center justify-end w-full'>
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative group">
              <input 
                type="text" 
                placeholder="Search Video..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/20 text-white placeholder-white focus:placeholder-black px-4 py-2 rounded-full pl-10 pr-4 focus:outline-none focus:ring-0 focus:ring-purple-0 focus:bg-white focus:text-black"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white group-focus-within:text-black"></i>
            </form>
          </div>
          
          {/* Notification Icon */}
          <div className="flex items-center mr-4">
            <button className="w-10 h-10 bg-white hover:bg-amber-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105">
              <i className="fas fa-bell text-black text-lg"></i>
            </button>
          </div>
          
          {/* Right Section - User Profile */}
          <div className="flex items-center space-x-3">
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 